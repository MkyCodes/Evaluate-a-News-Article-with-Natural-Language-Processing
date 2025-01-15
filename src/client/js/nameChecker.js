// Function to verify if the entered name is a valid captain
function verifyName(inputName) {
    console.log("::: Initiating Captain Name Verification :::", inputName);

    const knownCaptains = [
        "Picard", "Janeway", "Kirk", "Archer", "Georgiou"
    ];

    const isKnownCaptain = knownCaptains.includes(inputName);

    if (isKnownCaptain) {
        showAlert("Welcome, Captain!");
    } else {
        showAlert("Please provide a valid captain's name.");
    }
}

// Function to show alert messages
function showAlert(alertText) {
    alert(alertText);
}

// Exporting the verifyName function for use in other modules
export { verifyName };
