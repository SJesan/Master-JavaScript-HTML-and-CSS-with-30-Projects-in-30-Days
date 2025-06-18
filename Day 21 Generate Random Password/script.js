const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = ()=>{

   let arr = ""
    for (let i = 0; i < 8; i++) {
        let pass = Math.floor(33 + Math.random() * (126 - 33 + 1))
        arr += String.fromCharCode(pass)
    }
    return arr;
};

button.addEventListener("click",()=>{
  let pass = generatePassword();
  passwordBox.value = pass;
});

copyButton.addEventListener("click",()=>{

  const passwordCopy = passwordBox.value;
  if(!passwordCopy){
    alert("No password to copy! Please generate a password first.");
    return;
  }
  navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Password copied to clipboard!");
    });
     passwordBox.value ="";
});