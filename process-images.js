const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { input: 'C:\\Users\\chanc\\Downloads\\FinTech & BFSI.png', output: 'public\\industries\\fintech.webp' },
  { input: 'C:\\Users\\chanc\\Downloads\\Healthcare & Pharma.png', output: 'public\\industries\\healthcare.webp' },
  { input: 'C:\\Users\\chanc\\Downloads\\Logistics & Supply Chain.png', output: 'public\\industries\\logistics.webp' },
  { input: 'C:\\Users\\chanc\\Downloads\\Manufacturing & Heavy Industry.png', output: 'public\\industries\\manufacturing.webp' },
];

async function processImages() {
  if (!fs.existsSync('public\\industries')) {
    fs.mkdirSync('public\\industries', { recursive: true });
  }

  for (const img of images) {
    if (fs.existsSync(img.input)) {
      console.log(`Processing ${img.input} -> ${img.output}`);
      try {
        await sharp(img.input)
          .webp({ quality: 95, lossless: true })
          .toFile(img.output);
        console.log(`Success: ${img.output}`);
      } catch (err) {
        console.error(`Error processing ${img.input}:`, err);
      }
    } else {
      console.log(`File not found: ${img.input}`);
    }
  }
}

processImages();
