import { debounce, getBiggerHeight, hasNestedArray, groupChildrenByRow, mergeRelatedElements, resetElementHeights } from './utils';
import { getAutoSizeElements } from './domUtils';

let resizeHandler: (() => void) | null = null;

/**
 * Initializes the autoSizer functionality for elements with the specified tag name.
 * @param tagName - The specific tag name to filter elements (optional).
 */
export function initAutoSizer(tagName?: string) {
    autoSizer(tagName);
    resizeHandler = debounce(() => autoSizer(tagName), 1000);
    window.addEventListener('resize', resizeHandler);
}

/**
 * Adjusts the sizes of elements marked for auto-sizing.
 * @param tagName - Optional tag name to filter elements.
 */
export function autoSizer(tagName?: string) {
    
    let allSizers: NodeListOf<Element> = getAutoSizeElements(tagName);

    if (allSizers.length === 0) {
        console.warn('No elements found with the autoSizerActive attribute.');
        return;
    }
    allSizers.forEach((sizer) => {
        const childrenGroup = groupChildrenByRow(Array.from(sizer.children), allSizers[0]);
        controlElementGroupStructure(childrenGroup);
    });
}

/**
 * Controls the height structure of element groups.
 * @param group - An array of arrays representing grouped elements.
 */
function controlElementGroupStructure(group: Array<any>) {
    if (hasNestedArray(group)) {
        group.forEach((innerGroup: HTMLElement[]) => {
            innerGroup.forEach((innerElement: HTMLElement) => {
                let layerOfElementChildren = Array.from(innerElement.children);
                resetElementHeights(layerOfElementChildren);
            });
            resetElementHeights(innerGroup);
            let rowHeights = innerGroup.map((element) => element.offsetHeight);
            let biggerRowHeight = getBiggerHeight(rowHeights);

            innerGroup.forEach((innerElement: HTMLElement) => {
                innerElement.style.minHeight = `${biggerRowHeight}px`;
            });
            let layerOfElements: any = [];
            innerGroup.forEach((innerElement: HTMLElement) => {
                let layerOfElementChildren = Array.from(innerElement.children);
                layerOfElements.push(layerOfElementChildren);
            });

            if (layerOfElements.length > 0) {
                const mergeElements = mergeRelatedElements(layerOfElements);
                controlElementGroupStructure(mergeElements);
            }
        });
    }
}

/**
 * Cleans up the autoSizer by removing the resize listener.
 */
export function destroyAutoSizer() {
    if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
        resizeHandler = null;
    }
}
