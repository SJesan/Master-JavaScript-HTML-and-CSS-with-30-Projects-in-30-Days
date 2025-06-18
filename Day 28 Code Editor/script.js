let editors = document.querySelectorAll(".box textarea");
let outPut = document.getElementById("output");


function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;

    outPut.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    outPut.contentWindow.eval(jsCode);
}

editors.forEach(element => {
    element.addEventListener("input", run);
});