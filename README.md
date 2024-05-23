# ESLint config

## Installation

```sh
npm install @nesvet/eslint-config --save-dev
```

Or

```sh
bun add @nesvet/eslint-config --dev
```

## Configuration

`.eslintrc`:
```json
{
	"extends": "@nesvet",
	"root": true
}
```

Or, for `jsx`:
```json
{
	"extends": "@nesvet/eslint-config/x",
	"root": true
}
```

Or, for Electron main:
```json
{
	"extends": "@nesvet/eslint-config/electron/main",
	"root": true
}
```

Or, for Electron renderer:
```json
{
	"extends": "@nesvet/eslint-config/electron/renderer",
	"root": true
}
```