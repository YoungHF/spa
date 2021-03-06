// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    "indent": ["error",4],
    "quotes": [ 2, "double" ],
    "semi": ["error", "always"],
    "no-unused-vars": ["off", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-new-func": "off",
    "new-cap": "off",
    "no-undef": "off",
    "no-unused-expressions": "off"
  }
}
