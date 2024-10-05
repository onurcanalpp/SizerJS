/**
 * Returns the maximum height from an array of numbers.
 * @param list - An array of numbers representing heights.
 * @returns The maximum height value.
 */
export declare function getBiggerHeight(list: Array<number>): number;
/**
 * Creates a debounced version of a function to limit how often it can be called.
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay; defaults to 1000ms.
 * @returns A debounced version of the function.
 */
export declare function debounce(func: Function, wait: number): (this: unknown, ...args: any[]) => void;
/**
 * Checks if a variable contains nested arrays.
 * @param variable - The variable to check.
 * @returns True if it contains nested arrays, otherwise false.
 */
export declare function hasNestedArray(variable: any): boolean;
/**
 * Groups child items into rows based on the container's width.
 * @param sizerChildItems - An array of child items to group.
 * @param container - The container element (optional).
 * @returns An array of arrays, each representing a row of grouped items.
 */
export declare function groupChildrenByRow(sizerChildItems: Array<any>, container?: any): Array<Array<HTMLElement>>;
/**
 * Merges related elements based on their indices in nested arrays.
 * @param relatedElements - An array of nested elements to merge.
 * @returns An array of merged elements.
 */
export declare function mergeRelatedElements(relatedElements: any): any;
