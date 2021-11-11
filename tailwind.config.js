const tokens = require('./tokens.json');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: `${tokens.global.colors.black.value}`,
            white: `${tokens.global.colors.white.value}`,
            gray: {
                '100': `${tokens.global.colors.gray[100].value}`,
                '200': `${tokens.global.colors.gray[200].value}`,
                '300': `${tokens.global.colors.gray[300].value}`,
                '400': `${tokens.global.colors.gray[400].value}`,
                '500': `${tokens.global.colors.gray[500].value}`,
                '600': `${tokens.global.colors.gray[600].value}`,
                '700': `${tokens.global.colors.gray[700].value}`,
                '800': `${tokens.global.colors.gray[800].value}`,
                '900': `${tokens.global.colors.gray[900].value}`,
                '1000': `${tokens.global.colors.gray[1000].value}`,
            },
            blue: {
                '100': `${tokens.global.colors.blue[100].value}`,
                '200': `${tokens.global.colors.blue[200].value}`,
                '300': `${tokens.global.colors.blue[300].value}`,
                '400': `${tokens.global.colors.blue[400].value}`,
                '500': `${tokens.global.colors.blue[500].value}`,
                '600': `${tokens.global.colors.blue[600].value}`,
                '700': `${tokens.global.colors.blue[700].value}`,
                '800': `${tokens.global.colors.blue[800].value}`,
                '900': `${tokens.global.colors.blue[900].value}`,
                '1000': `${tokens.global.colors.blue[1000].value}`,
            },
            teal: {
                '100': `${tokens.global.colors.teal[100].value}`,
                '200': `${tokens.global.colors.teal[200].value}`,
                '300': `${tokens.global.colors.teal[300].value}`,
                '400': `${tokens.global.colors.teal[400].value}`,
                '500': `${tokens.global.colors.teal[500].value}`,
                '600': `${tokens.global.colors.teal[600].value}`,
                '700': `${tokens.global.colors.teal[700].value}`,
                '800': `${tokens.global.colors.teal[800].value}`,
                '900': `${tokens.global.colors.teal[900].value}`,
                '1000': `${tokens.global.colors.teal[1000].value}`,
            },
            green: {
                '100': `${tokens.global.colors.green[100].value}`,
                '200': `${tokens.global.colors.green[200].value}`,
                '300': `${tokens.global.colors.green[300].value}`,
                '400': `${tokens.global.colors.green[400].value}`,
                '500': `${tokens.global.colors.green[500].value}`,
                '600': `${tokens.global.colors.green[600].value}`,
                '700': `${tokens.global.colors.green[700].value}`,
                '800': `${tokens.global.colors.green[800].value}`,
                '900': `${tokens.global.colors.green[900].value}`,
                '1000': `${tokens.global.colors.green[1000].value}`,
            },
            yellow: {
                '100': `${tokens.global.colors.yellow[100].value}`,
                '200': `${tokens.global.colors.yellow[200].value}`,
                '300': `${tokens.global.colors.yellow[300].value}`,
                '400': `${tokens.global.colors.yellow[400].value}`,
                '500': `${tokens.global.colors.yellow[500].value}`,
                '600': `${tokens.global.colors.yellow[600].value}`,
                '700': `${tokens.global.colors.yellow[700].value}`,
                '800': `${tokens.global.colors.yellow[800].value}`,
                '900': `${tokens.global.colors.yellow[900].value}`,
                '1000': `${tokens.global.colors.yellow[1000].value}`,
            },
            orange: {
                '100': `${tokens.global.colors.orange[100].value}`,
                '200': `${tokens.global.colors.orange[200].value}`,
                '300': `${tokens.global.colors.orange[300].value}`,
                '400': `${tokens.global.colors.orange[400].value}`,
                '500': `${tokens.global.colors.orange[500].value}`,
                '600': `${tokens.global.colors.orange[600].value}`,
                '700': `${tokens.global.colors.orange[700].value}`,
                '800': `${tokens.global.colors.orange[800].value}`,
                '900': `${tokens.global.colors.orange[900].value}`,
                '1000': `${tokens.global.colors.orange[1000].value}`,
            },
            red: {
                '100': `${tokens.global.colors.red[100].value}`,
                '200': `${tokens.global.colors.red[200].value}`,
                '300': `${tokens.global.colors.red[300].value}`,
                '400': `${tokens.global.colors.red[400].value}`,
                '500': `${tokens.global.colors.red[500].value}`,
                '600': `${tokens.global.colors.red[600].value}`,
                '700': `${tokens.global.colors.red[700].value}`,
                '800': `${tokens.global.colors.red[800].value}`,
                '900': `${tokens.global.colors.red[900].value}`,
                '1000': `${tokens.global.colors.red[1000].value}`,
            },
            purple: {
                '100': `${tokens.global.colors.purple[100].value}`,
                '200': `${tokens.global.colors.purple[200].value}`,
                '300': `${tokens.global.colors.purple[300].value}`,
                '400': `${tokens.global.colors.purple[400].value}`,
                '500': `${tokens.global.colors.purple[500].value}`,
                '600': `${tokens.global.colors.purple[600].value}`,
                '700': `${tokens.global.colors.purple[700].value}`,
                '800': `${tokens.global.colors.purple[800].value}`,
                '900': `${tokens.global.colors.purple[900].value}`,
                '1000': `${tokens.global.colors.purple[1000].value}`,
            },
        },
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
        fontFamily: {
            sans: [
                `"${tokens.global.fontFamilies.sans.value}"`,
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            mono: [
                `"${tokens.global.fontFamilies.mono.value}"`,
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ]
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