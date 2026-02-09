const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function compressImage(inputPath, outputPath, maxSize = 1000) {
    try {
        const image = await loadImage(inputPath);

        // Calculate new dimensions
        let width = image.width;
        let height = image.height;

        if (width > maxSize || height > maxSize) {
            if (width > height) {
                height = Math.round((height * maxSize) / width);
                width = maxSize;
            } else {
                width = Math.round((width * maxSize) / height);
                height = maxSize;
            }
        }

        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);

        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(outputPath, buffer);

        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;

        console.log(`${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB`);
    } catch (error) {
        console.error(`Error compressing ${inputPath}:`, error.message);
    }
}

const badgesDir = path.join(__dirname, 'public', 'Badges');

async function main() {
    await compressImage(
        path.join(badgesDir, 'badge-patriot-original.png'),
        path.join(badgesDir, 'badge-patriot.png'),
        1000
    );
    await compressImage(
        path.join(badgesDir, 'badge-business-original.png'),
        path.join(badgesDir, 'badge-business.png'),
        1000
    );
}

main();
