const postList = document.getElementById("postList");

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (posts.length === 0) {
    postList.textContent = "No posts Yet";
  } else {
    let display = "";

    for (let i = 0; i < posts.length; i++) {
      const currentPost = posts[i];

      display += `<div>
      <h3>${currentPost.title}</h3>
      <p>${currentPost.content}</p>
      <p>${currentPost.id}</p>
      <div>
      `;
    }

    postList.innerHTML = display;
  }
}

loadPosts();
