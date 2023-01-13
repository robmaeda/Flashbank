module.exports = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: true,
                },
            },
        ],
    },
};
