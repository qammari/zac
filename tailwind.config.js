const tokens = require('./tokens.json');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: () => {
            const jsonSpacing = tokens.global.spacing;
            const spacingKeys = Object.keys(tokens.global.spacing);
            const obj = {};

            spacingKeys.forEach((spacing) => {
                return (obj[
                    `${spacing}`
                ] = `${jsonSpacing[spacing]['value']}px`);
            });

            return obj;
        },
        fontWeight: () => {
            const jsonFontWeights = tokens.global.fontWeights;
            const fontWeightsKeys = Object.keys(tokens.global.fontWeights);
            const obj = {};

            fontWeightsKeys.forEach((fontWeight) => {
                return (obj[
                    `${fontWeight}`
                ] = `${jsonFontWeights[fontWeight]['value']}`);
            });

            return obj;
        },
        fontSize: () => {
            const jsonFontSizes = tokens.global.fontSizes;
            const fontSizesKeys = Object.keys(tokens.global.fontSizes);
            const obj = {};

            fontSizesKeys.forEach((fontSize) => {
                return (obj[
                    `${fontSize}`
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
                    `${lineHeight}`
                ] = `${jsonLineHeights[lineHeight]['value']}px`);
            });

            return obj;
        },
        letterSpacing: () => {
            const jsonLetterSpacing = tokens.global.letterSpacing;
            const letterSpacingKeys = Object.keys(tokens.global.letterSpacing);
            const obj = {};

            letterSpacingKeys.forEach((letterSpacing) => {
                return (obj[
                    `${letterSpacing}`
                ] = `${jsonLetterSpacing[letterSpacing]['value']}px`);
            });

            return obj;
        },
        borderRadius: () => {
            const jsonborderRadius = tokens.global.borderRadius;
            const borderRadiusKeys = Object.keys(tokens.global.borderRadius);
            const obj = {};

            borderRadiusKeys.forEach((borderRadius) => {
                return (obj[
                    `${borderRadius}`
                ] = `${jsonborderRadius[borderRadius]['value']}px`);
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