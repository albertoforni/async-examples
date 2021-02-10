import fetch from "node-fetch";

async function getPlanetAndResident(): Promise<void> {
  try {
    console.time("fetch in sequence");
    const [planet1, resident1] = await Promise.all([
      fetch("https://swapi.dev/api/planets/1/").then((res) => res.json()),
      fetch("http://swapi.dev/api/people/1/").then((res) => res.json()),
    ]);
    console.log(planet1);
    console.log(resident1);
  } catch (err) {
    console.error(">>> Catch Error =>", err);
  } finally {
    console.log(">>> Finish");
    console.timeEnd("fetch in sequence");
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#

getPlanetAndResident();
