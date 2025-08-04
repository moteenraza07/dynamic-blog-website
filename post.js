document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("postForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const image = document.getElementById("image");
    const titleError = document.getElementById("titleError");
    const contentError = document.getElementById("contentError");

    if (!title.value.trim()) {
      titleError.textContent = "Please enter a title";
    } else {
      titleError.textContent = "";
    }

    if (!content.value.trim()) {
      contentError.textContent = "Please enter content in the text box";
    } else {
      contentError.textContent = "";
    }

    const imageFile = image.files[0];

    function savePost(imageData) {
      const post = {
        title: title.value.trim(),
        content: content.value.trim(),
        image: image.value.trim(),
      };

      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(post);

      localStorage.setItem("posts", JSON.stringify(posts));
      form.reset();
    }

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function () {
        savePost(reader.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      savePost(null);
    }
  });
});
