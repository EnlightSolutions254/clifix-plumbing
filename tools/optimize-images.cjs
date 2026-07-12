const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'images');
const srcFile = path.join(srcDir, 'hero_plumber_1783767785831.jpg');

if (!fs.existsSync(srcFile)) {
  console.error('Source image not found:', srcFile);
  process.exit(1);
}

(async () => {
  try {
    if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

    const variants = [
      { suffix: '1600', width: 1600 },
      { suffix: '800', width: 800 },
      { suffix: '400', width: 400 }
    ];

    for (const v of variants) {
      const outWebp = path.join(srcDir, `hero_plumber_1783767785831-${v.suffix}.webp`);
      const outJpg = path.join(srcDir, `hero_plumber_1783767785831-${v.suffix}.jpg`);

      await sharp(srcFile)
        .resize({ width: v.width })
        .webp({ quality: 75 })
        .toFile(outWebp);

      await sharp(srcFile)
        .resize({ width: v.width })
        .jpeg({ quality: 80 })
        .toFile(outJpg);

      console.log('Written:', outWebp, outJpg);
    }

    console.log('Image optimization complete.');
  } catch (err) {
    console.error('Error optimizing images:', err);
    process.exit(1);
  }
})();
