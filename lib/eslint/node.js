import globals from "globals";
import config from "./config.js";


export default [
	{
		languageOptions: {
			globals: {
				...globals.node
			}
		}
	},
	...config
];
