module.exports = {
	"env": {
		"es6": true,
		"node": true
	},
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:jsdoc/recommended",
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"@typescript-eslint/tslint"
	],
	"rules": {
		"arrow-body-style": "error",
		"arrow-parens": [
			"error",
			"always"
		],
		"brace-style": [
			"error",
			"1tbs"
		],
		"camelcase": "error",
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"complexity": "off",
		"constructor-super": "error",
		"curly": "off",
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": [
			"error",
			"smart"
		],
		"guard-for-in": "error",
		"id-blacklist": [
			"error",
			"any",
			"Number",
			"number",
			"String",
			"string",
			"Boolean",
			"boolean",
			"Undefined",
			"undefined"
		],
		"id-match": "error",
		"import/order": "off",
		"jsdoc/require-jsdoc": "off",
		"max-classes-per-file": "off",
		"max-len": "off",
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": "off",
		"no-debugger": "error",
		"no-empty": [
			"error",
			{
				"allowEmptyCatch": true
			}
		],
		"no-eval": "error",
		"no-fallthrough": "off",
		"no-invalid-this": "off",
		"no-multiple-empty-lines": "error",
		"no-new-wrappers": "error",
		"no-shadow": [
			"off",
			{
				"hoist": "all"
			}
		],
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": [
			"error",
			"never"
		],
		"prefer-arrow-callback": [
			"error",
			{
				"allowUnboundThis": false
			}
		],
		"prefer-const": "error",
		"quote-props": [
			"error",
			"consistent-as-needed"
		],
		"radix": "error",
		"space-before-function-paren": "off",
		"spaced-comment": [
			"error",
			"always",
			{
				"markers": [
					"/"
				]
			}
		],
		"use-isnan": "error",
		"valid-typeof": "off",
		"@typescript-eslint/array-type": [
			"error",
			{
				"default": "array-simple"
			}
		],
		"@typescript-eslint/ban-types": [
			"error",
			{
				"types": {
					"Function": null,
				}
			}
		],
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				"accessibility": "explicit"
			}
		],
		"@typescript-eslint/indent": [
			"error",
			"tab",
			{
				"FunctionDeclaration": {
					"parameters": "first"
				},
				"FunctionExpression": {
					"parameters": "first"
				}
			}
		],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter": "semi",
					"requireLast": true
				},
				"singleline": {
					"delimiter": "semi",
					"requireLast": false
				}
			}
		],
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				"avoidEscape": true
			}
		],
		"@typescript-eslint/semi": [
			"error",
			"always"
		],
		"@typescript-eslint/triple-slash-reference": [
			"error",
			{
				"path": "always",
				"types": "prefer-import",
				"lib": "always"
			}
		],
		"@typescript-eslint/unified-signatures": "error",
		"@typescript-eslint/tslint/config": [
			"error",
			{
				"rules": {
					"disallow-fspath": true,
					"disallow-importing-non-shared-code": true,
					"disallow-vscode": true,
					"import-spacing": true,
					"object-literal-sort-keys": true,
					"whitespace": [
						true,
						"check-branch",
						"check-decl",
						"check-operator",
						"check-separator",
						"check-type",
						"check-typecast"
					]
				},
				"rulesDirectory": [
					"lints/"
				]
			}
		]
	}
	// TODO: No floating promises
	// TODO: no unused expression
	// "max-line-length": false,
	// "ordered-imports": false,
	// "no-shadowed-variable": false
};
