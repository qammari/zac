const tokens = require('./tokens.json');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        lineHeight: () => {
          const jsonLineHeights = tokens.global.lineHeights;
          const lineHeightsKeys = Object.keys(tokens.global.lineHeights);
          const obj = {};

            lineHeightsKeys.forEach((lineHeight) => {
                return (obj[
                    `${jsonLineHeights[lineHeight]['value']}`
                ] = `${jsonLineHeights[lineHeight]['value']}px`);
            });

            return obj;
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
