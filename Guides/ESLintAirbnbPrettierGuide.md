# 1) Install ESLint and Prettier Extensions

# 2) npm init (create package.json) (-y or "yes" for creating default without asking questions)

# 3) npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier ((optional: eslint-plugin-node eslint-config-node))

(or --save-dev, for install dev dependencies)

# 4) npx install-peerdeps --dev eslint-config-airbnb-base

(airbnb-base - without react)

# 5) create config file - .prettierrc - for prettier settings

e.g.
{
"singleQuote": true
}

# 6) eslint --init command or create config file - .eslintrc.json

# 7) remove all and add this to .eslintrc.json file

<!--
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-console": "warn"
  }
}
 -->
