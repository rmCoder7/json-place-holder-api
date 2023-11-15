function loadData()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>dataload(data))
}

function dataload(data)
{

    const ul = document.getElementById('users-id');

    for(const value of data)
    {
            // console.log(user.name)
        const li = document.createElement('li');
        li.innerText = 'user'
        ul.appendChild(li);

    }


}