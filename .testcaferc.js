let os = require("os");

module.exports = {
  skipJsErrors: true,
  hostname: os.hostname(),
  compilerOptions: {
    typescript: {
      configPath: "./tsconfig.json",
      options: { experimentalDecorators: "true" },
    },
  },
};
