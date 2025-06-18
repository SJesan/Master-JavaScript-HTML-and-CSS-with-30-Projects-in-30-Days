const textarea = document.getElementById("input-textarea");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("charac-count");


textarea.addEventListener("input", () => {
    let text = textarea.value.trim();
    charCount.innerHTML = text.length;
    wordCount.innerHTML = text === "" ? "0" : text.split(/\s+/).length;
})