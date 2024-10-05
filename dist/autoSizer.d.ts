/**
 * Initializes the autoSizer functionality for elements with the specified tag name.
 * @param tagName - The specific tag name to filter elements (optional).
 */
export declare function initAutoSizer(tagName?: string): void;
/**
 * Adjusts the sizes of elements marked for auto-sizing.
 * @param tagName - Optional tag name to filter elements.
 */
export declare function autoSizer(tagName?: string): void;
/**
 * Cleans up the autoSizer by removing the resize listener.
 */
export declare function destroyAutoSizer(): void;
