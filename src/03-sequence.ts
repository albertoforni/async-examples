import fetch from "node-fetch";

async function getPlanetAndResident(): Promise<void> {
  try {
    console.time("fetch in sequence");
    const planet1 = await fetch("https://swapi.dev/api/planets/1/").then(res => res.json());
    const resident1 = await fetch("http://swapi.dev/api/people/1/").then(res => res.json());
    console.log(planet1);
    console.log(resident1);
  } catch(err) {
    console.error(">>> Catch Error =>", err);
  } finally {
    console.log(">>> Finish")
    console.timeEnd("fetch in sequence");
  }
}

getPlanetAndResident();
