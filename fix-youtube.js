const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'content', 'blog');
const langs = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];

langs.forEach(lang => {
  const langDir = path.join(baseDir, lang);
  if (!fs.existsSync(langDir)) return;

  const files = fs.readdirSync(langDir).filter(f => f.endsWith('.mdx'));
  files.forEach(file => {
    const filePath = path.join(langDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if youtubeId exists
    if (/youtubeId:\s*\"[^\"]*\"/.test(content)) {
      // Replace existing youtubeId
      content = content.replace(/youtubeId:\s*\"[^\"]*\"/, 'youtubeId: "7dMGfPxLktE"');
    } else {
      // Insert youtubeId before the second ---
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd !== -1) {
        content = content.slice(0, frontmatterEnd) + 'youtubeId: "7dMGfPxLktE"\n' + content.slice(frontmatterEnd);
      }
    }

    fs.writeFileSync(filePath, content);
    console.log('Processed', filePath);
  });
});
console.log('All articles updated!');
