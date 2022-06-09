const CracoLessPlugin = require("craco-less");
process.env.BROWSER = "none"; // optional, disables auto-open every time you restart

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {"@primary-color": "#000"},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
