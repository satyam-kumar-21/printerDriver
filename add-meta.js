const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app');

function toTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== '[slug]' && file !== 'components' && file !== 'utils' && file !== 'data') {
        processDirectory(fullPath);
      }
    } else if (file === 'page.tsx') {
      let relativePath = path.relative(baseDir, dir).replace(/\\/g, '/');
      if (relativePath === '') relativePath = 'home';

      // Special handling for dynamic routes (should not be reached due to [slug] exclusion, but just in case)
      if (relativePath.includes('[')) continue;

      let title = '';
      let description = '';

      if (relativePath === 'home') {
        title = 'DriverWise - Clear, Plain-English Driver Guides';
        description = 'Your trusted resource for understanding device drivers, troubleshooting issues, and finding clear answers without technical complexity.';
      } else if (relativePath.startsWith('drivers/')) {
        const cat = relativePath.split('/')[1];
        if (cat) {
          title = `${toTitleCase(cat)} - DriverWise Guides`;
          description = `Clear, plain-English guides and troubleshooting steps for ${cat.replace('-', ' ')} on Windows and other operating systems.`;
        } else {
          title = 'All Device Drivers - DriverWise';
          description = 'Browse our comprehensive guides and troubleshooting steps for all major hardware device drivers including printer, scanner, audio, graphics, network, and USB.';
        }
      } else {
        title = `${toTitleCase(relativePath.split('/').pop() || '')} - DriverWise`;
        description = `Learn more about ${relativePath.split('/').pop() || ''} at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.`;
      }

      let content = fs.readFileSync(fullPath, 'utf8');

      if (!content.includes('export const metadata')) {
        const importStatement = `import { constructMetadata } from '@/app/utils/seo';\n`;
        const metaStatement = `\nexport const metadata = constructMetadata({\n  title: '${title}',\n  description: '${description}',\n});\n\n`;

        // Find the first import statement or start of file
        let newContent = '';
        if (content.startsWith('"use client"') || content.startsWith("'use client'")) {
           // We can't export metadata from a client component!
           // Let's check if there are client components that are pages.
           console.log(`Skipping client component page: ${relativePath}`);
           continue;
        }

        // Just prepend
        newContent = importStatement + metaStatement + content;
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Added metadata to ${relativePath}/page.tsx`);
      }
    }
  }
}

processDirectory(baseDir);
console.log('Done');
