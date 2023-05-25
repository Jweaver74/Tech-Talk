// Purpose: edit user information
async function editFormHandler(event) {
  event.preventDefault();

  let username = document.querySelector('input[name="username"]').value.trim();
  if (username.length) username = '"username": "' + username + '"';
  let email = document.querySelector('input[name="email"]').value.trim();
  if (email.length) email = '"email": "' + email + '"';
  let password = document.querySelector('input[name="password"]').value.trim();
  if (!password.length) {
    alert("You must enter your password to make changes.");
    return;
  } else {
    password = '"password": "' + password + '"';
  }
  // get the user id from the url
  const id = document.querySelector('input[name="user-id"]').value.trim();

  let userUpdate =
    "{" + [username, email, password].filter((value) => value).join(", ") + "}";
  userUpdate = JSON.parse(userUpdate);
// send the title and post_text to the post route
  const response = await fetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(userUpdate),
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
  .querySelector(".edit-user-form")
  .addEventListener("submit", editFormHandler);
