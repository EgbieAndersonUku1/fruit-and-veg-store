

/**
 * Asynchronously loads the content of a file from the specified file path.
 *
 * @param {string} filePath - The path to the file to be loaded.
 * @returns {Promise<string>} A Promise that resolves with the text content of the file.
 * @throws {Error} Throws an error if there is an issue with fetching or reading the file.
 *
 * @example
 * // how to use it example:
 * try {
 *   const fileContent = await loadFile("path/to/file.txt");
 *   console.log(fileContent); // Display the content of the loaded file
 * } catch (error) {
 *   console.error('Error:', error);
 * }
 */
async function loadFile(filePath) {
    try {
        const response = await fetch(filePath);
        const data    = await response.text();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default loadFile