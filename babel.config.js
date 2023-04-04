module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}],
    ['@babel/plugin-proposal-private-property-in-object', {loose: true}],
    ['import', {libraryName: '@ant-design/react-native'}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@components': ['./src/components'],
          '@screens': ['./src/screens'],
          '@assets': ['./src/assets'],
          '@navigator': ['./src/navigators'],
          '@store': ['./src/store'],
          '@styles': ['./src/styles'],
          '@config': ['./src/config'],
          '@util': ['./src/utils'],
        },
      },
    ],
  ],
};
