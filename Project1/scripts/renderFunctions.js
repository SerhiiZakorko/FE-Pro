export function renderAgeCounter(arr, target) {
  target.innerHTML = "";
  const ageCountCard = arr.map(
    (item) =>
      (target.innerHTML += `<div class="age-count-card">
          <div class="age-count-card-title"><h3>${item.count}</h3></div>
          <div class="age-count-card-descr-1"><p>${item.title}</p></div>
          <div class="age-count-card-descr-2"><p>${item.text}</p></div>
          </div>`)
  );
}

export function renderLagestProjects(arr, target) {
  target.innerHTML = "";
  const lagestProject = arr.map(
    (item) =>
      (target.innerHTML += `<div class="our-largest-projects-card">
          <img src="${item.photo}" alt="Card-img" />
          <div class="our-largest-projects-card-descr">
          <div class="our-largest-projects-card-divider"></div>
          <div class="our-largest-projects-card-title">${item.title}</div>
          <div class="our-largest-projects-card-text">${item.text}</div>
        </div>
        </div>`)
  );
}

export function renderOurBusinessCards(arr, target) {
  target.innerHTML = "";
  const lagestProject = arr.map(
    (item) =>
      (target.innerHTML += `<div class="our-business-card">
          <img src="${item.image}" alt="business-logo" />
          <div class="our-business-card-title">
            ${item.title}
          </div>
        </div>`)
  );
}
