function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


const wrapper = document.getElementById('burger_icon')

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open")
})