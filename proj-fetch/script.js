const albumsURL = "https://jsonplaceholder.typicode.com/photos";
const btn = document.querySelector(".get-img");
const target = document.querySelector(".imgs");
const imgsArr = [];

const getImg = () => {
  fetch(albumsURL)
    .then((data) => data.json())
    .then((result) => result.slice(1, 20).map((el) => imgsArr.push(el.url)));
  return imgsArr;
};
getImg();
btn.addEventListener("click", () => {
  target.innerHTML = "";
  imgsArr.map((el) => (target.innerHTML += `<img src=${el} alt="">`));
});
