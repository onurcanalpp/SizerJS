# SizerJS

![Version](https://img.shields.io/npm/v/sizerjs)
![License](https://img.shields.io/npm/l/sizerjs)

SizerJS is a lightweight library for dynamically adjusting the heights of elements to create a consistent and visually appealing layout. It automatically sizes elements based on their content and allows for responsive design by handling resize events.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-reference)
- [Examples](#examples)
- [License](#license)
- [Contributing](#contributing)

## Installation

To install SizerJS, you can use npm or yarn:

```bash
npm install sizerjs
```
OR
```bash 
yarn add sizerjs
```

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

## Contributing

We welcome contributions to SizerJS! To ensure a smooth process, please follow these guidelines:

### How to Contribute

1. **Fork the Repository**
   - Click on the "Fork" button at the top right of the repository page to create a copy of this repository under your GitHub account.

2. **Clone Your Fork**
   - Clone your forked repository to your local machine using the following command:
   ```bash
   git clone https://github.com/your-username/sizerjs.git
   ```

3. **Create a New Branch**
    - Clone your forked repository to your local machine using the following command:
    ```bash
    git checkout -b feature/YourFeatureName
    ```

4. **Make Your Changes**
    - Implement your changes and ensure that they align with the project's coding style. Consider adding tests if applicable.
    
5. **Test Your Changes**
    - Run the existing tests to make sure everything is working as expected. If you've added new features, please include tests for them.

6. **Create a New Branch**
    - Commit your changes with a descriptive message:

    ```bash
    git commit -m "Add a brief description of your changes"
    ``` 
7. **Push to Your Branch**
    - Push your changes to your forked repository:

    ```bash
    git push origin feature/YourFeatureName
    ``` 
8. **Create a Pull Request**
    - Navigate to the original repository where you want to propose your changes. Click on the "Pull Requests" tab, then click on "New Pull Request."
    - Select your branch from the "compare" dropdown and click "Create Pull Request."
    - Provide a detailed description of your changes and why they should be merged.
