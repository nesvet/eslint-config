/** @type {import('stylelint').Config} */
export default {
	extends: [
		"stylelint-config-recommended",
		"@stylistic/stylelint-config"
	],
	rules: {
		"@stylistic/indentation": "tab"
	}
};
