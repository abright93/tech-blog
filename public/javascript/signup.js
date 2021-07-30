const signupFormHandler = async function(event) {
    event.preventDefault();
  
const passwordEl = document.querySelector("#password-input-signup");
const usernameEl = document.querySelector("#username-input-signup");
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({ 
        username, password }),
      
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard-routes");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);