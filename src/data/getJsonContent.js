/**
 * Retrieves content from a specified page using a Google Apps Script API.
 * @param {string} [pageName='events'] - The name of the page to retrieve content from.
 * @returns {Promise<any>} - A promise that resolves to the retrieved content.
 */
function getJsonContent(pageName = "events") {
  let url = `/data/${pageName}.json`;
  if (pageName === "events") {
    url = `https://script.google.com/macros/s/AKfycbzCMlzcUE_yVGi-4qjIkLg0gxqVyI_EsVnERlypezRt5iuuzXbZ7_pqILdIPql5rEMB/exec/exec?page=${pageName}`
   }

  return fetch(url)
    .then((response) => response.json())
    .then((out) => out.data)
    .catch((error) => console.error("Error:", error));
}

module.exports = { getJsonContent };
