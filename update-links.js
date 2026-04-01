const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx')) {
      if (fullPath.includes('Navigation.tsx') || fullPath.includes('Footer.tsx') || fullPath.includes('LocalizedLink.tsx')) continue;
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let changed = false;
      if (content.includes("import Link from 'next/link'")) {
        content = content.replace(/import Link from 'next\/link';?/g, "import Link from '@/components/LocalizedLink';");
        changed = true;
      }
      if (content.includes('import Link from "next/link"')) {
        content = content.replace(/import Link from "next\/link";?/g, "import Link from '@/components/LocalizedLink';");
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir('src/app/[lang]');
processDir('src/components');
console.log('Done.');
