import esbuild from 'esbuild'
import * as common from './common.js'


esbuild.build({
  entryPoints: ['src/App.jsx'],
  bundle: true,
  outfile: `${common.buildDir}/out.js`,
  sourcemap: true,
  target: ['chrome58','firefox57','safari11','edge18']
}).then(result => {
  console.log('Build succeeded.')
}).catch(() => process.exit(1))
