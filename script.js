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
  
     //共通のオプション設定
      ScrollReveal({
        reset: true,
        distance: "60px",
        duration: 2000, //2sかけてアニメーション
        delay: 200 /* 0.2s後に発動 */,
      });

      ScrollReveal().reveal(".main-title, .section-title", {
        delay: 200,
        origin: "left",
      });
      ScrollReveal().reveal(".sec-01 .image, .info", {
        delay: 600,
        origin: "bottom",
      });
      ScrollReveal().reveal(".text-box", {
        delay: 700,
        origin: "right",
      });
      ScrollReveal().reveal(".media-icons i", {
        delay: 500,
        origin: "bottom",
        interval: 200,
      });
      ScrollReveal().reveal(".sec-02 .image, .sec-03 .image", {
        delay: 500,
        origin: "top",
      });
      ScrollReveal().reveal(".media-info li", {
        delay: 500,
        origin: "left",
        interval: 200,
      });
