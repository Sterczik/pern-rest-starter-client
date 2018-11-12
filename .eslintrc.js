module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": "airbnb",
    "rules": {
        "comma-dangle": [
            "error",
            "never"
        ],
        "import/prefer-default-export": [
            "none",
            "always"
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [
            "none"
        ]
    }
};