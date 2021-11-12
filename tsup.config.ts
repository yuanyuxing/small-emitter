import { Options } from 'tsup'

export const tsup: Options = {
  splitting: false,
  format: ['esm', 'cjs'],
  entryPoints: [
    'src/index.ts',
  ],
  target: 'es2018',
  clean: true,
  dts: true,
}
