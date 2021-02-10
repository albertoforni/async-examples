import fetch from "node-fetch";

function getPlanets(): void {
  fetch("https://swapi.dev/api/planets/1/")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(">>> Catch Error =>", err);
    });
}

// TODO:
// test failure

getPlanets();
