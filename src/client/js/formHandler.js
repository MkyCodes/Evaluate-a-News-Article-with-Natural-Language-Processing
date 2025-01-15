import { validateURL } from "./urlChecker";

const serverURL = "http://localhost:8081/api";

if (document) {
    const urlSubmissionForm = document.getElementById("urlForm");
    if (urlSubmissionForm) {
        urlSubmissionForm.addEventListener("submit", submitURL);
    }
}

async function submitURL(event) {
    event.preventDefault();

    // Extract the URL input value
    const urlInput = event.target.elements[0].value;

    // Verify the URL's validity
    if (validateURL(urlInput)) {
        try {
            const responseData = await sendDataToServer(serverURL, { url: urlInput });
            processResponse(responseData);
        } catch (error) {
            console.error("Error during server communication:", error);
        }
    } else {
        alert("Please provide a valid URL.");
    }
}

// Handle the server response
function processResponse(data) {
    console.log("Response from server:", data);

    const polarityElement = document.getElementById("ifpolar");
    const subjectivityElement = document.getElementById("issubject");
    const textElement = document.getElementById("text");

    const polarity = data.score_tag;
    polarityElement.innerHTML = `ifpolar: ${getPolarityMessage(polarity)}`;
    subjectivityElement.innerHTML = `issubject: ${data.subjectivity}`;
    textElement.innerHTML = `Text: ${data.sentence_list[0].text}`;
}

// Helper function to generate polarity message
function getPolarityMessage(ifpolar) {
    switch (ifpolar) {
        case "P":
            return "positive";
        case "N":
            return "negative";
        default:
            return ifpolar;
    }
}

// Async function for sending data to the server
async function sendDataToServer(endpoint = "", payload = {}) {
    const response = await fetch(endpoint, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return await response.json();
}

// Exporting the submitURL function for external use
export { submitURL };
