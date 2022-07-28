let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");

let textContent = document.querySelector("textarea");

upperCaseButton.addEventListener("click",function () {
    textContent.value = textContent.value.toUpperCase();
});
lowerCaseButton.addEventListener("click",function () {
    textContent.value = textContent.value.toLowerCase();
});
properCaseButton.addEventListener("click",function () {
    textContent.value = toProperCase(textContent.value);
});
sentenceCaseButton.addEventListener("click",function () {
    textContent.value = toSentenceCase(textContent.value);
});
saveTextFileButton.addEventListener("click", function () {
    download("text.txt", textContent.value);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function toProperCase(text) {
    text = text.toLowerCase();
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = capitalise(words[i]);
    }
    return words.join(" ");
}

function toSentenceCase(text) {
    text = text.toLowerCase();
    let sentences = text.split(". ");
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = capitalise(sentences[i]);
    }
    return sentences.join(". ");
}

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}