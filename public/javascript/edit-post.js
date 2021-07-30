const editFormHandler = async function(event) {
    event.preventDefault();

const bodyEl = document.getElementById('post-body');
const titleEl = document.getElementById('post-title');
const postId = document.getElementById('post-id')   
    
    fetch("/api/post/" + postId.value, {
        method: "put", 
        body: JSON.stringify({
            title: titleEl.value,
            body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard-routes");
        })
        .catch(err => console.log(err))
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);
