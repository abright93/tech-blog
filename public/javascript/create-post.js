async function createPostHandler(event) {
  event.preventDefault();
  const body = document.querySelector("#post-body").value.trim();
  const title = document.querySelector("#post-title").value.trim();
  
  if (body) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert(response.statusText); 
    }
  }
}

document
.addEventListener("click", createPostHandler)
.querySelector("#create-post-btn");