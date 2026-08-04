import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
  "C:\\Users\\chanc\\Downloads\\crm.png",
  "C:\\Users\\chanc\\Downloads\\ai-automation.png",
  "C:\\Users\\chanc\\Downloads\\cloud-service.png",
  "C:\\Users\\chanc\\Downloads\\app-developement.png",
  "C:\\Users\\chanc\\Downloads\\erp.png",
  "C:\\Users\\chanc\\Downloads\\custom-software.png"
];

const outDir = './public/services';

async function processFiles() {
  for (const file of files) {
    if (fs.existsSync(file)) {
      const name = path.parse(file).name;
      const outFile = path.join(outDir, `${name}.webp`);
      console.log(`Converting ${file} to ${outFile}`);
      await sharp(file)
        .webp({ quality: 85 })
        .toFile(outFile);
    } else {
      console.log(`File not found: ${file}`);
    }
  }
}

processFiles().catch(console.error);
