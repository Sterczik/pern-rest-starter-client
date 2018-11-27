module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "extends": "airbnb",
    "plugins": ["jest"],
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
        "import/no-unresolved": [
            0
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [
            "none"
        ],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};