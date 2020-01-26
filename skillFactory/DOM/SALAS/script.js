var usuarios = [
  {
    nombre: "nico",
    mail: "nico@gmail.com",
    edad: 21
  },
  {
    nombre: "servio luvoni",
    mail: "geek@hotmail.com",
    edad: 58
  },
  {
    nombre: "Mario Bros",
    mail: "sorry@castle.com",
    edad: 12
  },
  {
    nombre: "ben",
    mail: "alien@outlook.com",
    edad: 10
  }
];

document.addEventListener("DOMContentLoaded", function() {
  cargarUsuariosPredeterminados(usuarios);
  document
    .getElementById("formulario")
    .addEventListener("submit", function(evento) {
      evento.preventDefault();
      clickeado();
      evento.target.reset();
    });
});

function cargarUsuariosPredeterminados(usuarios) {
  usuarios.forEach(asignarLista);
}

function asignarLista(lista) {
  if (lista.edad > 13) {
    const tabla = document.getElementById("tabla1");
    const fila = document.createElement("tr");
    const erase = document.createElement("button");
    erase.setAttribute("id", lista.nombre);

    const celda1 = document.createElement("td");
    const celda2 = document.createElement("td");
    const celda3 = document.createElement("td");

    celda1.textContent = lista.nombre;
    fila.appendChild(celda1);
    celda2.textContent = lista.mail;
    fila.appendChild(celda2);
    celda3.textContent = lista.edad;
    fila.appendChild(celda3);
    erase.addEventListener("click", function() {
      tabla.removeChild(fila);
    });
    erase.textContent = "Borrar";

    fila.appendChild(erase);
    tabla.appendChild(fila);
  } else {
    const tabla = document.getElementById("tabla2");
    const fila = document.createElement("tr");
    const erase = document.createElement("button");
    const celda1 = document.createElement("td");
    const celda2 = document.createElement("td");
    const celda3 = document.createElement("td");

    celda1.textContent = lista.nombre;

    fila.appendChild(celda1);
    celda2.textContent = lista.mail;
    fila.appendChild(celda2);
    celda3.textContent = lista.edad;
    fila.appendChild(celda3);
    erase.textContent = "Borrar";
    erase.addEventListener("click", function() {
      tabla.removeChild(fila);
    });
    fila.appendChild(erase);
    tabla.appendChild(fila);
  }
}
function clickeado() {
  usuarios = [];
  const name = document.getElementById("nombre").value;
  const ce = document.getElementById("email").value;
  const age = document.getElementById("edad").value;
  usuarios.push({ nombre: name, mail: ce, edad: age });

  cargarUsuariosPredeterminados(usuarios);
}
