# SizerJS

![Version](https://img.shields.io/npm/v/sizerjs)
![License](https://img.shields.io/npm/l/sizerjs)

SizerJS is a lightweight library for dynamically adjusting the heights of elements to create a consistent and visually appealing layout. It automatically sizes elements based on their content and allows for responsive design by handling resize events.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Installation

To install SizerJS, you can use npm or yarn:

```bash
npm install sizerjs
```
OR
```bash 
yarn add sizerjs
```
test
## Usage 

### Basic Setup

#### First Step
```javascript
import { initAutoSizer, destroyAutoSizer } from 'sizerjs';
```
#### Second Step
```javascript
window.onload = () => {
    initAutoSizer();
};
```
#### Third Step (Optional)  If you need to destroy the auto-sizing functionality later, you can call:
```javascript
destroyAutoSizer();
```
### HTML Structure
Ensure your target elements have the attribute autoSizerActive to enable auto-sizing
- Note: `'example'` is optional if u want trigger specific sizer you can use tag.
```html
<div autoSizerActive="example">
    <div>Content 1</div>
    <div>Content 2</div>
</div>
```

## API Reference
### `initAutoSizer(tagName?: string): void`

Initializes the auto-sizing functionality for elements with the specified tag name.

**Parameters:**

- `tagName` (optional): A string to filter elements by a specific tag name.

**Usage:**

```javascript
initAutoSizer(); // Initializes for all elements
initAutoSizer('myTag'); // Initializes for elements with the tag name 'myTag'
```

### `destroyAutoSizer(): void`

Cleans up and removes the event listener for resize events.

**Usage:**

```javascript
destroyAutoSizer(); // Stops the auto-sizing functionality
```
