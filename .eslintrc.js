module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": ["taro/react","@typescript-eslint/eslint-plugin"],
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  "extends": [
    "alloy",
    "alloy/react",
    "alloy/typescript"
  ],
  "settings": {
    "react": {
        "version": "detect"
    }
  }
}
