const pageLoadTime = Date.now(); // milliseconds since Jan 1, 1970

function showElapsedTime() {
    const clickTime = Date.now();
    const elapsed = (clickTime - pageLoadTime) / 1000; // convert ms to seconds
    document.getElementById("result").textContent =
        "Time Taken: " + elapsed + " seconds";
}