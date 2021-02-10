import fetch from "node-fetch";

async function getPlanets(): Promise<void> {
  try {
    const res = await fetch("https://swapi.dev/api/planets/1/");
    const resJson = await res.json();
    console.log(resJson);
  } catch(err) {
    console.error(">>> Catch Error =>", err);
  } finally {
    console.log(">>> Finish")
  }
}

// TODO
// test failure
//  - show that you can catch
// IIFE

getPlanets()
