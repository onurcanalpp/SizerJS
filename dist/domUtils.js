/**
 * Retrieves elements with the attribute 'autoSizerActive'.
 * If a specific tag name is provided, it filters the elements based on that tag name.
 *
 * @param tagName - The specific tag name to filter elements (optional).
 * @returns A NodeList of elements that match the specified criteria.
 */
export function getAutoSizeElements(tagName) {
    const sizerSelector = tagName ? `[autoSizerActive="${tagName}"]` : '[autoSizerActive]';
    return document.querySelectorAll(sizerSelector);
}
