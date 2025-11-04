// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import postcssImport from 'postcss-import'
// import postcssPresetEnv from 'postcss-preset-env'
// import cssnano from 'cssnano'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     cssCodeSplit: true,
//     lib: {
//       entry: 'src/index.css',
//       formats: ['es'],
//       fileName: 'index.min'
//     },
//     rollupOptions: {
//       output: {
//         assetFileNames: 'index.min.css'
//       }
//     }
//   },
//   css: {
//     postcss: {
//       plugins: [
//         postcssImport(),
//         postcssPresetEnv({ stage: 4 }),
//         cssnano(),
//       ]
//     }
//   }
// })