const tokens = require('./tokens.json');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: () => {
            const jsonFontSizes = tokens.global.fontSizes;
            const fontSizesKeys = Object.keys(tokens.global.fontSizes);
            const obj = {};

            fontSizesKeys.forEach((fontSize) => {
                return (obj[
                    `${jsonFontSizes[fontSize]['value']}`
                ] = `${jsonFontSizes[fontSize]['value']}px`);
            });

            return obj;
        },
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
