document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const id = Number(params.get("postId"));

  const posts = JSON.parse(localStorage.getItem("posts") || "[]");

  const post = posts[id];
  const postDiv = document.getElementById("post");
  const editButton = document.getElementById("edit");

  function showPost() {
    if (!post) {
      postDiv.textContent = "post was not found";
      editButton.style.display = "none";
      return;
    }
    postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    ${post.image}
    `;
  }

  editButton.addEventListener("click", () => {
    postDiv.innerHTML = `
    <input id="editTitle" value="${post.title}">
    <div id="titleError"></div>
    <textarea id="editContent">${post.content}</textarea>
    <div id="contentError"></div>
    <button id="saveButton">Save</button>
    `;

    document.getElementById("saveButton").addEventListener("click", () => {
      const newTitle = document.getElementById("editTitle").value.trim();
      const newContent = document.getElementById("editContent").value.trim();
      const titleError = document.getElementById("titleError");
      const contentError = document.getElementById("contentError");
      if (!newTitle) {
        titleError.textContent = "please enter a title";
      } else {
        titleError.textContent = "";
      }
      if (!newContent) {
        contentError.textContent = "please enter content";
      } else {
        contentError.textContent = "";
      }
      posts[id].title = newTitle;
      posts[id].content = newContent;
      localStorage.setItem("posts", JSON.stringify(posts));
      showPost();
    });
  });
});
