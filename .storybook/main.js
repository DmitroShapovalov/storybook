const path = require("path");
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  core: {
    builder: 'webpack4',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@app': path.resolve(__dirname, '../src/app/'),
    };
    console.dir(config.module.rules);
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
}
