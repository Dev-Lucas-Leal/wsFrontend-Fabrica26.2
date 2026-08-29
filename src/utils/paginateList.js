/**
 * @param {Array} list
 * @param {number} currentPage 
 * @param {number} itemsPerPage
 * @returns {Array}
 */

export function paginateList(list, currentPage, itemsPerPage) {
    const startIndex = (currentPage -1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    return list.slice(startIndex, endIndex);
}

/**
 * @param {number} listLength
 * @param {number} itemsPerPage
 * @returns {number}
 */

export function calculateTotalPages(listLength, itemsPerPage) {
    return Math.max(1, Math.ceil(listLength / itemsPerPage));
}