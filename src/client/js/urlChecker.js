// Function to check if a given URL is valid
function validateURL(url) {
    // Regular expression pattern for validating URLs
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/i;

    // Validate the URL and return a boolean result
    return urlPattern.test(url);
}

export { validateURL };