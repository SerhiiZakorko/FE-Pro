import {
  ageCountCardsArray,
  lagestProjectsArray,
  ourBusinessArrayShort,
  ourBusinessArrayLong,
} from "./scripts/massives.js";
import {
  renderAgeCounter,
  renderLagestProjects,
  renderOurBusinessCards,
} from "./scripts/renderFunctions.js";

const ageCounter = document.querySelector(".age-count");
const lagestProjects = document.querySelector(".our-largest-projects-wrapper");
const ourBusinessShort = document.querySelector(".our-business-short-wrapper");
const ourBusinessLong = document.querySelector(".our-business-long-wrapper");

renderAgeCounter(ageCountCardsArray, ageCounter);
renderLagestProjects(lagestProjectsArray, lagestProjects);
renderOurBusinessCards(ourBusinessArrayShort, ourBusinessShort);
renderOurBusinessCards(ourBusinessArrayLong, ourBusinessLong);
