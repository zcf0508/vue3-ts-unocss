module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "auto", // 需要babel来解析es module
            targets: {
              node: "current", // 指定环境为当前node版本
            },
          },
        ],
      ],
    },
  },
};
