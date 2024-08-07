/**
 * Creates a table row element with table header cells based on the provided list of header names.
 *
 * @param {string[]} headersList - An array of strings representing the header names for the table.
 * @returns {HTMLTableRowElement} The table row element containing the header cells.
 * @throws {Error} If headersList is not an array of strings.
 *
 * @example
 * // Creates a table header row with specified headers and appends it to an existing table
 * const headers = ["Product ID", "Product Name", "Purchase Date", "Review Status", "Action", "Product Image"];
 * const tableHeaderRow = createTableHeaderRow(headers);
 * document.querySelector("table").appendChild(tableHeaderRow);
 *
 * @example
 * // Creates a table header row for a different set of headers
 * const headers = ["Name", "Age", "Email"];
 * const tableHeaderRow = createTableHeaderRow(headers);
 * document.querySelector("table").appendChild(tableHeaderRow);
 */
function createTableHeaderRow(headersList) {
    if (!Array.isArray(headersList)) {
        throw new Error("The headerList must be a list of strings");
    }

    const tableMainRow = document.createElement("tr");

    headersList.forEach(header => {
        const tableHeader = document.createElement("th");
        tableHeader.textContent = header;
        tableMainRow.appendChild(tableHeader);
    });

    return tableMainRow;
}

export default createTableHeaderRow;