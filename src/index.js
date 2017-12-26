export default function() {
  return {
    inherits: require("@babel/plugin-syntax-decorators").default,
    manipulateOptions(opts, parserOpts) {
      parserOpts.allowLetDecorators = "true";
    },
  };
}
