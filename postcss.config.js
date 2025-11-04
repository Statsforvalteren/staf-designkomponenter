import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssImport(), // resolves @import
    postcssPresetEnv({
      stage: 4,
      features: {
        'cascade-layers': false, // enables @layer support
      }
    }),
  ]
}
