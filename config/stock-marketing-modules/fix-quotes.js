const fs = require('fs');
const files = ['module-1.ts', 'module-2.ts', 'module-3.ts', 'module-4.ts', 'module-5.ts', 'module-6.ts', 'module-7.ts', 'module-8.ts', 'module-9.ts', 'module-10.ts'];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');
  // Fix all property names that have stray quotes: word": -> word":
  content = content.replace(/(hint|solution|task|difficulty|id|title)":/g, '$1:');
  fs.writeFileSync(f, content);
  console.log('Fixed ' + f);
}
