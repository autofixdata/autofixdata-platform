const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/Ayoub/Desktop/Asset-Manager/artifacts/autofixdata-next/src/content/blog/en';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

// Convert CSS property name to camelCase
function toCamelCase(prop) {
  return prop.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

// Convert a CSS string like "background:#fff;color:red" to {{background:"#fff", color:"red"}}
function cssToJsxStyle(css) {
  const pairs = css.split(';').map(s => s.trim()).filter(Boolean);
  const entries = pairs.map(pair => {
    const colon = pair.indexOf(':');
    if (colon === -1) return null;
    const prop = pair.slice(0, colon).trim();
    const val = pair.slice(colon + 1).trim();
    const jsxProp = toCamelCase(prop);
    // Use double quotes for the value, escape any existing double quotes
    return `${jsxProp}:"${val.replace(/"/g, '\\"')}"`;
  }).filter(Boolean);
  return `{{${entries.join(', ')}}}`;
}

let totalFixed = 0;
files.forEach(file => {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  const original = content;

  // Replace style="..." with style={{...}}
  // Must use single-quote regex boundary since content has double quotes
  content = content.replace(/style="([^"]+)"/g, (match, css) => {
    return 'style=' + cssToJsxStyle(css);
  });

  if (content !== original) {
    fs.writeFileSync(fp, content, 'utf8');
    totalFixed++;
    console.log('Fixed: ' + file);
  } else {
    console.log('OK: ' + file);
  }
});
console.log('\nDone. Fixed ' + totalFixed + '/' + files.length + ' files.');
