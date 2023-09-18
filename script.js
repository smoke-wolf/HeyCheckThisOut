document.addEventListener("DOMContentLoaded", function () {
    const contentElement = document.getElementById("content");

    // Get the URL parameter 'sitetom' from the main URL
    const urlParams = new URLSearchParams(window.location.search);
    const websiteURL = urlParams.get("sitetom");

    if (websiteURL) {
        // Display the specified website in an iframe
        contentElement.innerHTML = `<iframe src="${websiteURL}" width="100%" height="600"></iframe>`;
    } else {
        contentElement.innerHTML = "No website specified.";
    }
});
