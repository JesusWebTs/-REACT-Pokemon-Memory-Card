import development from "./development";
import production from "./production";

let currentENV = process.env.NODE_ENV;
let envVariables = {};

if (currentENV === "production") {
  envVariables = production;
} else if (currentENV === "development") {
  envVariables = development;
} else {
  console.warn(`Eviroment ${currentENV} dont exist`);
}

export default envVariables;
