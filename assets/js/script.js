const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const endereço = document.getElementById("endereço");
const sabores = document.getElementById("sabores");
const telefone = document.getElementById("telefone");

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const endereçoValue = endereço.value;
  const saboresValue = sabores.value;

  if (usernameValue === "") {
    setErrorFor(username, "Faltou seu nome :(");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Preencha o e-mail");
  } else {
    setSuccessFor(email);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "Por favor, digite seu telefone.");
  } else {
    setSuccessFor(telefone);
  }

  if (endereçoValue === "") {
    setErrorFor(endereço, "Sem seu endereço, a pizza não chega até você :(");
  } else {
    setSuccessFor(endereço);
  }

  if (saboresValue === "") {
    setErrorFor(sabores, "Informe os sabores desejados.");
  } else {
    setSuccessFor(sabores);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
