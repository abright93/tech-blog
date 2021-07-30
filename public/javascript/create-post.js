const newFormHandler = async function(event) {
    event.preventDefault();
  
const body = document.querySelector('textarea[name="post-body"]').value;
const title = document.querySelector('input[name="post-title"]').value;
    
const token = localStorage.getItem("token");
    await fetch(`/api/post-routes`, {
      method: "POST",
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    });
  
    document.location.replace("/dashboard-routes");
  };
  
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);