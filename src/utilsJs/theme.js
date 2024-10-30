const bodyElement = document.body;
const radioBtn = document.querySelectorAll(".calc__theme_radio");
const brightBtn = document.querySelectorAll(".calc__btn_bright");
const calcTheme = document.querySelector(".calc__theme");
const calcResult = document.querySelector(".calc__result");

radioBtn.forEach((radio) => {
  radio.addEventListener("change", () => {
    radioBtn.forEach((btn) => {
      btn.classList.remove("_active");
    });
    radio.classList.add("_active");
    brightBtn.forEach((btn) => {
      if (radio.value === "green") {
        btn.style.backgroundColor = "#5fdd5f";
        bodyElement.style.backgroundColor = "#ff23";
        calcTheme.style.backgroundColor = "#d6d5d2";
        calcResult.style.color = "#64625d";
        calcResult.style.backgroundColor = "#d6d5d2";
      } else if (radio.value === "red") {
        btn.style.backgroundColor = "#e66161";
        bodyElement.style.backgroundColor = "#00000054";
        calcTheme.style.backgroundColor = "#cdc9c9";
        calcResult.style.backgroundColor = "#cdc9c9";
        calcResult.style.color = "#64625d";
      } else {
        btn.style.backgroundColor = "orange";
        bodyElement.style.backgroundColor = "#e1d4c9";
        calcTheme.style.backgroundColor = "#64625d";
        calcResult.style.backgroundColor = "#64625d";
        calcResult.style.color = "#fff";
      }
    });
  });
});
