async function readJson() {
  try {
    config = {
      method: "GET"
    };
    var response = await fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      config
    );
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

var superheroes;
readJson()
  .then(function(data) {
    superheroes = data;
    console.log(superheroes);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

window.onload = function() {
  document.getElementById("superHeroOne").addEventListener("click", function() {
    alert(
      superheroes.members[0].name + " HAVE " + superheroes.members[0].powers[0]
    );
  });

  document.getElementById("superHeroTwo").addEventListener("click", function() {
    alert(
      superheroes.members[1].name + " HAVE " + superheroes.members[1].powers[2]
    );
  });

  document
    .getElementById("superHeroThree")
    .addEventListener("click", function() {
      alert(
        superheroes.members[2].name +
          " HAVE " +
          superheroes.members[2].powers[1]
      );
    });
};
