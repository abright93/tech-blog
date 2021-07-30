const deletePostHandler = async function(event) {
    console.log("clicked", event)
    event.preventDefault();
    const postId = document.getElementById('post-id')

    fetch("/api/post-routes/" + postId.value, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/dashboard-routes");
    })
    .catch(err => console.log(err))
}

document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);
