const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  // https://ant.design/docs/react/use-with-create-react-app-cn#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        // "@primary-color": "red",
        // "@border-color-base": "green",
        // "@link-color": "orange"
      }
    }
    // javascriptEnabled: true,
    // modifyVars: {
      // "@primary-color": "red",
      // "@border-color-base": "green",
      // "@link-color": "orange"
    // }
  }),
  addDecoratorsLegacy() //配置装饰器
);