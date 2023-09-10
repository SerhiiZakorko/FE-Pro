const url = "https://dummyjson.com/posts";
const urlPost = "https://dummyjson.com/posts/add";
const formPost = document.querySelector("form");
const message = document.querySelector(".message")
const target = document.querySelector(".target");

getCards(url);

function render(array) {
  target.innerHTML = "";
  array.map((el) => {
    target.innerHTML += `<div class= 'card'>
                            <button class="del-btn" data=${el.id}>-X-</button>
                            <h3>${el.title}</h3>
                            <p>${el.body}</p>
                        </div>`;

    const delBtns = document.querySelectorAll(".del-btn");
    delBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const cardID = e.target.getAttribute("data");
        delCard(cardID);
      })
    );
  });
}

function getCards(link) {
  fetch(link)
    .then((response) => response.json())
    .then((data) => render(data.posts));
}

function postCard(link) {
  const userID = document.querySelector('.user-Id')
  const postTitle = document.querySelector('.post-title')
  const postText = document.querySelector('.post-text')
  userID.value === '' || postTitle.value === '' || postText.value === '' 
  ? message.innerHTML = `<p>All fields are requaired</p>`
  : fetch(link, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((data) => message.innerText = `${JSON.stringify(data)} is posted`);
  getCards(url);
}

function delCard(id) {
  let url = `https://dummyjson.com/posts/${id}`;
  fetch(url, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => message.innerHTML = `<p>${JSON.stringify(data.title)}</p>
                                        <p>isDeleted: ${JSON.stringify(data.isDeleted)}</p>
                                        <p>deletedOn: ${JSON.stringify(data.deletedOn)}</p>`);
}

formPost.onsubmit = (e) => {
  e.preventDefault();
  let formData = new FormData(formPost);
  newPost = Object.fromEntries(formData);
  postCard(urlPost);
};
