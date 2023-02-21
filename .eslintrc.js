module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		indent: [0, 4],
		'space-before-function-paren': [
			'error',
			{ anonymous: 'always', named: 'never' },
		],
		quotes: [
			'error',
			'single',
			{ allowTemplateLiterals: true, avoidEscape: true },
		],
		semi: ['error', 'never'],
		'multiline-ternary': ['off'],
	},
}
