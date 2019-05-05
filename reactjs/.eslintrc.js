const os = process.PLATFORM || process.platform || '';
const isMac = os.toLowerCase().indexOf('darwin') !== -1;

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "class-methods-use-this": 0,
    "linebreak-style": 0,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src", "node_modules"]
      }
    }
  }
}
