function loadPost ()
{
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res=> res.json())
 .then(data=> displayPost(data) )


}


function displayPost(posts)
{

    // console.log(data);

  const postIDCalling = document.getElementById('posts-container')

    for(const post of posts)
    {
      console.log(post);

    const articales = document.createElement('div')
    articales.classList.add('post')
    articales.innerHTML = `
    
    <h2>User- ${post.userId}</h2>
    <h3>Post: ${post.title}</h3>
    <p>Post Description : ${post.body} </p>
    
    
    `;
              
postIDCalling.appendChild(articales);
    }


}


loadPost()