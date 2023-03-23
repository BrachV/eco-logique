module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            app: './app',
          },
        },
      ],
      ['styled-components', { ssr: true }]
    ],
  };
};