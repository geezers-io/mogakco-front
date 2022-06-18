module.exports = {
  extends: ['plugin:storybook/recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['unused-imports'],
  rules: {
    'no-else-return': 2,
    'react/prop-types': 0,
    'react/jsx-no-target-blank': 0,
    'unused-imports/no-unused-imports-ts': 2,
    'unused-imports/no-unused-vars-ts': 1,
    'react-hooks/exhaustive-deps': 2,
    'react/display-name': 0,
  },
};
