document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("eliminar").addEventListener("click", eliminarItem);
  document.getElementById("agregar").addEventListener("click", agregarItem);
});

function eliminarItem() {
  const lista = document.getElementById("list");
  const items = document.getElementsByClassName("elements");
  lista.removeChild(items[items.length - 1]);
}

function agregarItem() {
  const lista = document.getElementById("list");
  const li = document.createElement("li");
  li.classList.add("elements");
  li.innerText = "hola";
  lista.appendChild(li);
}

function valider() {
  var a = document.code_postal.cp.value.split("@");
  if (a[0].length < 3) {
    alert("Ingrese un nombre de minimo 3 cifras");
    return false;
  }
  if (document.code_postal.cp.value.length == 0) {
    alert("Ingrese un nombre");
    return false;
  }
  var rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (document.code_postal.cp.value.match(rex)) {
    alert("ES VALIDO");
    return true;
  } else {
    alert("Falta @ o .com");
    return false;
  }
}
