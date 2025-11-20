/** @type {import('stylelint').Config} */
export default {
	plugins: [
		"stylelint-order"
	],
	extends: [
		"stylelint-config-recommended",
		"@stylistic/stylelint-config"
	],
	rules: {
		"alpha-value-notation": "percentage",
		"color-function-notation": "modern",
		"length-zero-no-unit": [ true, { ignore: [ "custom-properties" ], ignoreFunctions: [ "/^--/", "var" ] } ],
		
		"@stylistic/indentation": "tab",
		"@stylistic/max-empty-lines": 2,
		"@stylistic/max-line-length": null,
		"@stylistic/number-leading-zero": "never",
		"@stylistic/number-no-trailing-zeros": true,
		
		"order/order": [ [
			"custom-properties",
			"declarations"
		], { severity: "warning" } ],
		"order/properties-order": [ [
			"position",
			"top",
			"right",
			"bottom",
			"left",
			"flex",
			"flex-order",
			"order",
			"display",
			"flex-flow",
			"flex-direction",
			"flex-wrap",
			"flex-grow",
			"flex-shrink",
			"flex-basis",
			"box-sizing",
			"width",
			"height",
			"min-width",
			"min-height",
			"max-width",
			"max-height",
			"margin",
			"margin-top",
			"margin-right",
			"margin-bottom",
			"margin-left",
			"padding",
			"padding-top",
			"padding-right",
			"padding-bottom",
			"padding-left",
			"border",
			"border-top",
			"border-right",
			"border-bottom",
			"border-left",
			"border-radius",
			"overflow",
			"overflow-x",
			"overflow-y",
			"opacity",
			"visibility",
			"content-visibility",
			"transform",
			"transition",
			"transition-property",
			"transition-duration",
			"z-index",
			"cursor",
			"user-select",
			"pointer-events"
		], { severity: "warning" } ]
	}
};
