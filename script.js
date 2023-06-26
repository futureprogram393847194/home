let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

document.getElementById("btn1").addEventListener("click", function() {
    window.location.href = "#"; // リンク先のURLを指定します
  });

  document.getElementById("btn2").addEventListener("click", function() {
    window.location.href = "#"; // リンク先のURLを指定します
  });
  
