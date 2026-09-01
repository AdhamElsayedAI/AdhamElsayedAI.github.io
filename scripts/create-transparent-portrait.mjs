import { copyFile } from "node:fs/promises";
import sharp from "sharp";

const inputPath = "public/images/adham-original.jpg";
const outputPath = "public/images/adham-transparent.png";
const versionedOutputPath = "public/images/adham-transparent-v2.png";

const { data, info } = await sharp(inputPath)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const rgba = Buffer.alloc(width * height * 4);
const leftBounds = new Int32Array(height).fill(-1);
const rightBounds = new Int32Array(height).fill(-1);
let transparentPixels = 0;
let partialPixels = 0;

const isSubjectSample = (x, y) => {
  const offset = (y * width + x) * channels;
  const red = data[offset];
  const green = data[offset + 1];
  const blue = data[offset + 2];
  const minimum = Math.min(red, green, blue);
  const maximum = Math.max(red, green, blue);
  return minimum < 250 || maximum - minimum > 9;
};

for (let y = 0; y < height; y += 1) {
  const samples = new Uint8Array(width);
  for (let x = 0; x < width; x += 1) samples[x] = isSubjectSample(x, y) ? 1 : 0;

  let left = -1;
  let right = -1;
  let windowCount = 0;
  const windowSize = 11;

  for (let x = 0; x < width; x += 1) {
    windowCount += samples[x];
    if (x >= windowSize) windowCount -= samples[x - windowSize];
    if (left === -1 && windowCount >= 3) {
      const start = Math.max(0, x - windowSize + 1);
      for (let candidate = start; candidate <= x; candidate += 1) {
        if (samples[candidate]) {
          left = candidate;
          break;
        }
      }
    }
  }

  windowCount = 0;
  for (let x = width - 1; x >= 0; x -= 1) {
    windowCount += samples[x];
    if (x + windowSize < width) windowCount -= samples[x + windowSize];
    if (right === -1 && windowCount >= 3) {
      const end = Math.min(width - 1, x + windowSize - 1);
      for (let candidate = end; candidate >= x; candidate -= 1) {
        if (samples[candidate]) {
          right = candidate;
          break;
        }
      }
    }
  }

  leftBounds[y] = left;
  rightBounds[y] = right;
}

const topBounds = new Int32Array(width).fill(-1);
const bottomBounds = new Int32Array(width).fill(-1);

for (let x = 0; x < width; x += 1) {
  for (let y = 0; y < height; y += 1) {
    if (leftBounds[y] !== -1 && x >= leftBounds[y] && x <= rightBounds[y]) {
      if (topBounds[x] === -1) topBounds[x] = y;
      bottomBounds[x] = y;
    }
  }
}

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const index = y * width + x;
    const sourceOffset = index * channels;
    const outputOffset = index * 4;
    const inside = leftBounds[y] !== -1 && x >= leftBounds[y] && x <= rightBounds[y];
    let alpha = inside ? 255 : 0;

    if (inside) {
      const edgeDistance = Math.min(
        x - leftBounds[y],
        rightBounds[y] - x,
        y - topBounds[x],
        bottomBounds[x] - y,
      );

      if (edgeDistance < 4) {
        const red = data[sourceOffset];
        const green = data[sourceOffset + 1];
        const blue = data[sourceOffset + 2];
        const distanceFromWhite = 255 - Math.min(red, green, blue);
        alpha = Math.min(255, distanceFromWhite * 20 + edgeDistance * 70);
      }
    }

    rgba[outputOffset] = data[sourceOffset];
    rgba[outputOffset + 1] = data[sourceOffset + 1];
    rgba[outputOffset + 2] = data[sourceOffset + 2];
    rgba[outputOffset + 3] = alpha;
    if (alpha === 0) transparentPixels += 1;
    else if (alpha < 255) partialPixels += 1;
  }
}

await sharp(rgba, { raw: { width, height, channels: 4 } })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

await copyFile(outputPath, versionedOutputPath);

console.log(JSON.stringify({
  inputPath,
  outputs: [outputPath, versionedOutputPath],
  width,
  height,
  transparentPixels,
  partialPixels,
  opaquePixels: width * height - transparentPixels,
}));
