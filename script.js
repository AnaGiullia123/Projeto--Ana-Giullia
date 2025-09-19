let tamanhoFonte = 16;
let contrasteAtivo = false;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function alternarContraste() {
  contrasteAtivo = !contrasteAtivo;
  if (contrasteAtivo) {
    document.body.classList.add("alto-contraste");
  } else {
    document.body.classList.remove("alto-contraste");
  }
}

function resetar() {
  tamanhoFonte = 16;
  document.body.style.fontSize = "16px";
  contrasteAtivo = false;
  document.body.classList.remove("alto-contraste");
}
