const postList = document.getElementById("postList");
// create function to load posts
function loadPosts() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (posts.length === 0) {
    postList.textContent = "No posts Yet";
  } else {
    let display = "";

    for (let i = 0; i < posts.length; i++) {
      const currentPost = posts[i];
      // display title, content and id
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
// call the function
loadPosts();
