require('esbuild').build({
  entryPoints: ['src/App.jsx'],
  bundle: true,
  outfile: 'build/out.js',
  sourcemap: true,
  target: ['chrome58','firefox57','safari11','edge16']
}).then(result => {
  console.log('Build succeeded.')
}).catch(() => process.exit(1))
