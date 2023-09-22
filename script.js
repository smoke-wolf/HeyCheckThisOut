document.addEventListener("DOMContentLoaded", function () {
    const contentElement = document.getElementById("content");

    // Get the URL parameter 'sitetom' from the main URL
    const urlParams = new URLSearchParams(window.location.search);
    const websiteURL = urlParams.get("sitetom");

    if (websiteURL) {
        // Attempt to load the specified website in an iframe
        const iframe = document.createElement("iframe");
        iframe.src = websiteURL;
        iframe.width = "100%";
        iframe.height = 600;
        iframe.onload = function () {
            // If the iframe has loaded successfully, append it to the content element
            contentElement.innerHTML = "";
            contentElement.appendChild(iframe);
        };
        iframe.onerror = function () {
            // If there was an error loading the iframe (e.g., due to security restrictions),
            // inform the user with a message
            contentElement.innerHTML = "Unable to load the website. Please check the URL or try another website.";
        };
    } else {
        contentElement.innerHTML = "No website specified.";
    }
});
