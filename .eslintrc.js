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
        "arrow-parens": [
            0
        ],
        "arrow-body-style": [
            0
        ],
        "react/destructuring-assignment": [
            0
        ],
        "react/prop-types": [
            0
        ],
        "import/no-named-as-default": [
            0
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