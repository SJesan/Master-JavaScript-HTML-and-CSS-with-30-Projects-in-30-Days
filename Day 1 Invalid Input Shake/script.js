const message = document.getElementById("massage");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const val = input.value.trim();
    if (val === "") {
    message.classList.remove("hidden");

    input.classList.add("shake");

    setTimeout(() => {
      input.classList.remove("shake");
      message.classList.add("hidden");
    }, 500);
  }


else{
     message.classList.add("hidden");
     input.value = "";
     alert("Valied Input")
}
});


