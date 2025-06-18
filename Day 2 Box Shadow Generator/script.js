const elem = document.getElementById("element");
const code = document.getElementById("code");
const sliders = document.querySelectorAll(".sliders input");

sliders.forEach((slider) => {
  slider.addEventListener("input", generateShadow);
});

function generateShadow() {
  const value = getvalue();
  elem.style.boxShadow = value;
  code.innerHTML = value;
}

function getvalue() {
  const hShadow = document.getElementById("h-shadow").value;
  const vShadow = document.getElementById("v-shadow").value;
  const blurRadius = document.getElementById("blur-radius").value;
  const spreadRadius = document.getElementById("spread-radius").value;
  const shadowColor = document.getElementById("shadow-color").value;
  const shadowOpacity = document.getElementById("shadow-color-opacity").value;
  const shadowInset = document.getElementById("shadow-inset").checked; 
  const insetText = shadowInset ? "inset" : "";
  const rgba = getrgba(shadowColor, shadowOpacity);
  

  return `${insetText} ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${rgba}`;
}
function getrgba(shadowColor, shadowOpacity) {
    const r = parseInt(shadowColor.substr(1, 2), 16);
    const g = parseInt(shadowColor.substr(3, 2), 16);
    const b = parseInt(shadowColor.substr(5, 2), 16);
    const a = parseFloat(shadowOpacity);
    const rgba =`rgba(${r}, ${g}, ${b}, ${a})`
    return rgba;
    
}

function copyCode (){
    const text = code.value;
    navigator.clipboard.writeText(text)
    .then(()=>{
            alert("Code Copied to Clipboard");
        });
}

generateShadow();