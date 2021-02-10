import fetch from "node-fetch";

async function getPlanetAndResident(): Promise<void> {
  try {
    console.time("fetch in sequence");
    const planetIndexes = [1, 2, 3, 4, 5, 6];
    planetIndexes.forEach(async (planetIndex) => {
      const planet = await fetch(
        `https://swapi.dev/api/planets/${planetIndex}/`
      ).then((res) => res.json());
      console.log(
        `>>> planet index ${planetIndex} - planet name => ${planet.name}`
      );
    });

    // for (let i = 0; i < planetIndexes.length; i++) {
    //   const planetIndex = planetIndexes[i];
    //   const planet = await fetch(
    //     `https://swapi.dev/api/planets/${planetIndex}/`
    //   ).then((res) => res.json());
    //   console.log(
    //     `>>> planet index ${planetIndex} - planet name => ${planet.name}`
    //   );
    // }

    // const results = await Promise.all(
    //   planetIndexes.map(async (planetIndex) => {
    //     return fetch(`https://swapi.dev/api/planets/${planetIndex}/`)
    //       .then((res) => res.json())
    //       .then((res) => {
    //         console.log(res.name);
    //         return res.name;
    //       });
    //   })
    // );
    // console.log(results);

    console.log(">>> End body of the function");
  } catch (err) {
    console.error(">>> Catch Error =>", err);
  } finally {
    console.log(">>> Finish");
    console.timeEnd("fetch in sequence");
  }
}

getPlanetAndResident();
