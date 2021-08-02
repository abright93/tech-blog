const newFormHandler = async function(event) {
  event.preventDefault();

  const postContent = document.querySelector('textarea[name="post-body"]').value;
  const postTitle = document.querySelector('input[name="post-title"]').value;
  
  console.log(postContent);
  console.log(postTitle);
  
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

};

document
.addEventListener('submit', newFormHandler)  
.querySelector('#new-post-form');
  
