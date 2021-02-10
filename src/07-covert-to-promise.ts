// https://github.com/ljharb/util.promisify/blob/main/implementation.js

import fs from "fs";
import path from "path";

fs.readFile(
  path.resolve(__dirname, "01-use-promise.ts"),
  { encoding: "utf-8" },
  (err, res) => {
    if (err) {
      console.error("ERROR =>", err);
    } else {
      console.log("SUCCESS =>", res);
    }
  }
);

// ------

function promisify(fn: Function): (...args: any[]) => Promise<any> {
  return function (...args: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      fn(...args, (err: unknown, res: unknown) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };
}

const readFileP = promisify(fs.readFile);
// readFileP(path.resolve(__dirname, "01-use-promise.ts"), {
//   encoding: "utf-8",
// }).then((res) => console.log("SUCCESS PROMISE=>", res));

// ------
function callbackify(
  promiseFn: (...args: any[]) => Promise<any>
): (...args: any[]) => void {
  return function (...args: any[]) {
    const promiseArgs = args.slice(0, args.length - 1);
    const callback = args[args.length - 1];
    promiseFn(...promiseArgs)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err, null);
      });
  };
}

const readFilePC = callbackify(readFileP);
// readFilePC(
//   path.resolve(__dirname, "01-use-promise.ts"),
//   { encoding: "utf-8" },
//   (err: Error, res: any) => {
//     if (err) {
//       console.error("ERROR CB =>", err);
//     } else {
//       console.log("SUCCESS CB =>", res);
//     }
//   }
// );
