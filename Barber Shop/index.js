const title = document.querySelector("h1");

function myFunction() {
  title.style.opacity = "1";
  title.style.textAlign = "center";
  title.classList.add("main-title_1");
}

const borderNone = () => {
  title.style.border = "none";
};

const borderNone_1 = () => {
  const mainTitle = document.querySelector(".main-title");
  mainTitle.style.border = "none";
};

setTimeout(myFunction, 1600);
setTimeout(borderNone, 3100);
setTimeout(borderNone_1, 1600);

let nav = document.querySelector(".header_ul_item");
const childrenNav = nav.getElementsByClassName("navi");

childrenNav[0].classList.add("navi_color");
let previousElement;
for (const item of childrenNav) {
  item.addEventListener("click", () => {
    if (previousElement) {
      previousElement.classList.remove("navi_color");
      previousElement.classList.add("navi");
    }
    item.classList.remove("navi");
    item.classList.add("navi_color");
    childrenNav[0].classList.remove("navi_color");

    previousElement = item;
  });
}

let form = document.querySelector(".form");
const inputFields = form.getElementsByClassName("form-control");
var btn5 = document.getElementById("form-btn");

for (const item of inputFields) {
  item.addEventListener("blur", (event) => {
    validateForm(event);
    updateButtonState();
  });
}

const setError = (element, message) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = message;
  element.classList.add("invalid");
  element.classList.remove("valid");
};

const setValid = (element) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = "";
  element.classList.remove("invalid");
  element.classList.add("valid");
};

const validateFirstName = (firstName) => {
  if (firstName.value === "") {
    setError(firstName, "Вкажіть ваше ім'я");
  } else {
    setValid(firstName);
  }
};

const validateLastName = (lastName) => {
  if (lastName.value === "") {
    setError(lastName, "Вкажіть ваше прізвище");
  } else {
    setValid(lastName);
  }
};

const validateEmail = (emailField) => {
  const regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if (emailField.value === "") {
    setError(emailField, "Вкажіть ваш поштовий адрес");
  } else if (!regex.test(emailField.value)) {
    setError(emailField, "Ваша почта не є коректною");
  } else {
    setValid(emailField);
  }
};

const validatePhone = (phoneField) => {
  const regex = /^(?:\+38|38)?(?:\d{10}|\d{3}[-\s]\d{2}[-\s]\d{2}[-\s]\d{2})$/;
  if (phoneField.value === "") {
    setError(phoneField, "Введіть ваш номер телефону");
  } else if (!regex.test(phoneField.value)) {
    setError(phoneField, "Неправильний формат номеру телефону");
  } else {
    setValid(phoneField);
  }
};

const updateButtonState = () => {
  const validFields = document.querySelectorAll(".form-control.valid");
  const invalidFields = document.querySelectorAll(".form-control.invalid");
  const checkbox1 = document.querySelector(".checkbox_input");

  const updateButton = () => {
    if (validFields.length >= 4 && checkbox1.checked) {
      console.log(validFields);
      btn5.disabled = false;
    } else {
      btn5.disabled = true;
    }
  };

  validFields.forEach((field) => {
    field.addEventListener("input", () => {
      if (invalidFields.length > 0 && checkbox1.checked) {
        btn5.disabled = true;
      } else if (invalidFields.length < 0 && checkbox1.checked) {
        btn5.disabled = false;
      }
    });
    updateButton();
  });

  checkbox1.addEventListener("change", updateButton);
};

const validateForm = (event) => {
  switch (event.target.id) {
    case "firstName":
      validateFirstName(event.target);
      break;
    case "lastName":
      validateLastName(event.target);
      break;
    case "email":
      validateEmail(event.target);
      break;
    case "phone":
      validatePhone(event.target);
      break;
    default:
      alert("Validation error");
  }
};

var formImage = document.getElementById("formImg");
var formPreview = document.getElementById("formPreview");

formImage.addEventListener("change", () => {
  uploadFile(formImage.files[0]);
});

function uploadFile(file) {
  if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
    alert("дозволено тільки зображення");
    formImage.value = "";
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("файл повинен бути менше 2 мб");
    return;
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    formPreview.innerHTML = `<img src = "${e.target.result}" alt = "Фото">`;
  };
  reader.onerror = function (e) {
    alert("Помилка");
  };
  reader.readAsDataURL(file);
}

function renderForm() {
  const btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    const form = document.querySelector("form");
    btn.addEventListener("click", () => {
      form.classList.add("formActive");
    });
  }
}
renderForm();

function closeForm() {
  const dagger = document.querySelector(".close");
  dagger.addEventListener("click", () => {
    form.classList.remove("formActive");
  });
}

closeForm();
