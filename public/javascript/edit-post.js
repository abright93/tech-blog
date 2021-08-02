const postId = document.querySelector('input[name="post-id"]').value;

console.log(postId);
console.log("testing");

const editFormHandler = async (event) => {
  event.preventDefault();

  const postContent = document.querySelector('textarea[name="post-body"]').value;
  const postTitle = document.querySelector('input[name="post-title"]').value;
  
  console.log(postContent);
  console.log(postTitle);

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);