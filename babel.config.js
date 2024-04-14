module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          i18n: './src/i18n',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
