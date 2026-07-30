import { readFileSync } from 'fs';
const p = readFileSync('node_modules/.package-lock.json', 'utf8');
const j = JSON.parse(p);
const pkgs = Object.keys(j.packages || {}).filter(k => j.packages[k].hasInstallScript);
console.log('Packages with install scripts:', pkgs.length);
pkgs.forEach(k => console.log(k));
