import { execSync } from 'node:child_process';
import * as esbuild from 'esbuild';

execSync('npx tailwindcss -i src/styles.css -o assets/styles.css --minify', { stdio: 'inherit' });
await esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  minify: true,
  format: 'iife',
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  outfile: 'assets/app.js',
});
console.log('Built -> assets/app.js, assets/styles.css');
