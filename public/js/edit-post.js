// Purpose: edit post
async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
// send the title and post_text to the post route
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_text = document
    .querySelector('textarea[name="post-text"]')
    .value.trim();
// send the title and post_text to the post route
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // check the response status
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
