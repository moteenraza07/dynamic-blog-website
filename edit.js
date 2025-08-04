const params = new URLSearchParams(location.search);
const id = params.get("postId");

const posts = JSON.parse(localStorage.getItem("posts") || "[]");

const post = posts[id];
const postDiv = document.getElementById("post");

if (post) {
  let imageDisplay = "";
  if (post.image) {
    imageDisplay = `<img src="${post.image}" alt="Post Image">`;
  }

  postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    ${imageDisplay}
    `;
} else {
  postDiv.textContent = "Post not found";
}
