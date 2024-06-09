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

In case of *browser* environment your `eslint.config.js` is about to look like:
```javascript
export { browser as default } from "@nesvet/eslint-config";
```

For *Node*:
```javascript
export { node as default } from "@nesvet/eslint-config";
```

For neutral environment (both *browser* and *Node*):
```javascript
export { neutral as default } from "@nesvet/eslint-config";
```

For *Bun*:
```javascript
export { bun as default } from "@nesvet/eslint-config";
```

For *worker*:
```javascript
export { worker as default } from "@nesvet/eslint-config";
```
