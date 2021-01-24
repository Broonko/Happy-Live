axios
    .get('http://localhost:3000/api/posts', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response)
        const posts = document.getElementById('posts')
        response.data.forEach(post => {
            const newPost = document.createElement('li')
            newPost.innerHTML = post.title
            posts.appendChild(newPost)
        })
    })
    .catch(err => { alert('do not have permission') })

document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})