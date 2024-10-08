/**
 * Returns the maximum height from an array of numbers.
 * @param list - An array of numbers representing heights.
 * @returns The maximum height value.
 */
export function getBiggerHeight(list) {
    return Math.max(...list);
}
/**
 * Creates a debounced version of a function to limit how often it can be called.
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay; defaults to 1000ms.
 * @returns A debounced version of the function.
 */
export function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
/**
 * Checks if a variable contains nested arrays.
 * @param variable - The variable to check.
 * @returns True if it contains nested arrays, otherwise false.
 */
export function hasNestedArray(variable) {
    if (!Array.isArray(variable)) {
        return false;
    }
    return variable.some(item => Array.isArray(item));
}
/**
 * Groups child items into rows based on the container's width.
 * @param sizerChildItems - An array of child items to group.
 * @param container - The container element (optional).
 * @returns An array of arrays, each representing a row of grouped items.
 */
export function groupChildrenByRow(sizerChildItems, container) {
    if (sizerChildItems.length === 0)
        return [];
    let rows = [];
    if (container) {
        const containerWidth = Math.floor(container.offsetWidth);
        const numberOfItemsInRow = Math.round(containerWidth / sizerChildItems[0].offsetWidth);
        const numberOfRows = Math.ceil(sizerChildItems.length / numberOfItemsInRow);
        for (let i = 0; i < numberOfRows; i++) {
            rows.push(sizerChildItems.slice(i * numberOfItemsInRow, (i + 1) * numberOfItemsInRow));
        }
    }
    else {
        rows.push(sizerChildItems);
    }
    return rows;
}
/**
 * Merges related elements based on their indices in nested arrays.
 * @param relatedElements - An array of nested elements to merge.
 * @returns An array of merged elements.
 */
export function mergeRelatedElements(relatedElements) {
    const result = relatedElements.reduce((acc, item) => {
        item.forEach((field, index) => {
            if (!acc[index])
                acc[index] = [];
            acc[index].push(field);
        });
        return acc;
    }, []);
    return result;
}
/**
 * Resets the minHeight and height styles of the given elements to 'auto'.
 *
 * @param {HTMLElement[]} elements - An array of DOM elements whose heights will be reset.
 */
export function resetElementHeights(elements) {
    if (elements.length === 0)
        return;
    elements.forEach((element) => {
        element.style.minHeight = 'auto';
        element.style.height = 'auto';
    });
}
