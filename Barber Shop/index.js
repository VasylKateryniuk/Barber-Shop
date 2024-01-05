let teg = document.querySelector(".header_ul_item");

function addStyle() {
  for (let i = 0; i < teg.children.length; i++) {
    let a = teg.children[i];
    a.addEventListener("click", (event) => {
      for (let j = 0; j < teg.children.length; j++) {
        teg.children[j].children[0].style.color = "";
        teg.children[j].children[0].style.textDecorationLine = "";
      }
      event.target.style.color = "#af9c8e";
      event.target.style.textDecorationLine = "underline";
    });
  }
}

addStyle();
