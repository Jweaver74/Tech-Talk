// Purpose: delete post from dashboard
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  // send the id to the delete route
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });
  // check the response status
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
