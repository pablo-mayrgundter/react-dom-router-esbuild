const entry = 'src/index.jsx'
const buildDir = 'docs'
const build = {
  entryPoints: [entry],
  bundle: true,
  // Splitting is experimental
  //   https://github.com/evanw/esbuild/issues/16
  splitting: true,
  outdir: buildDir,
  format: 'esm',
  sourcemap: true,
  target: ['chrome58','firefox57','safari11','edge18'],
  logLevel: 'debug'
}

export {
  build
}
