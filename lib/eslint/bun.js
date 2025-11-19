import globals from "globals";
import config from "./config.js";


export default [
	{
		languageOptions: {
			globals: {
				...globals.node,
				
				/* https://bun.sh/docs/api/globals */
				AbortController: false,
				AbortSignal: false,
				alert: false,
				Blob: false,
				Buffer: false,
				Bun: false,
				ByteLengthQueuingStrategy: false,
				confirm: false,
				__dirname: false,
				__filename: false,
				atob: false,
				btoa: false,
				BuildMessage: false,
				clearImmediate: false,
				clearInterval: false,
				clearTimeout: false,
				console: false,
				CountQueuingStrategy: false,
				Crypto: false,
				crypto: false,
				CryptoKey: false,
				CustomEvent: false,
				Event: false,
				EventTarget: false,
				exports: false,
				fetch: false,
				FormData: false,
				global: false,
				globalThis: false,
				Headers: false,
				HTMLRewriter: false,
				JSON: false,
				MessageEvent: false,
				module: false,
				performance: false,
				process: false,
				prompt: false,
				queueMicrotask: false,
				ReadableByteStreamController: false,
				ReadableStream: false,
				ReadableStreamDefaultController: false,
				ReadableStreamDefaultReader: false,
				reportError: false,
				require: false,
				ResolveMessage: false,
				Response: false,
				Request: false,
				setImmediate: false,
				setInterval: false,
				setTimeout: false,
				ShadowRealm: false,
				SubtleCrypto: false,
				DOMException: false,
				TextDecoder: false,
				TextEncoder: false,
				TransformStream: false,
				TransformStreamDefaultController: false,
				URL: false,
				URLSearchParams: false,
				WebAssembly: false,
				WritableStream: false,
				WritableStreamDefaultController: false,
				WritableStreamDefaultWriter: false
			}
		}
	},
	...config,
	{
		rules: {
			"n/prefer-node-protocol": "off"
		}
	}
];
