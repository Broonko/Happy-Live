axios
    .get('http://localhost:3000/api/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)
        console.log(localStorage.name)

        const user = document.getElementById('userName')
        const newUser = document.createElement('p')
        newUser.innerHTML = localStorage.name
        user.appendChild(newUser)

        // const artists = document.getElementById('artistList')
        // response.data.forEach(artist => {
        //     const newArtist = document.createElement('li')
        //     newArtist.innerHTML = artist
        //     artists.appendChild(newArtist)

        // })
    })
    .catch(err => { alert('error home') })


// document.getElementById('loginh').addEventListener('click', () => {
//     // localStorage.clear()
//     window.location = "http://localhost:3000/login.html"
// })

document.getElementById('loginh').addEventListener('click', () => {
    // localStorage.clear()
    window.location = "http://localhost:3000/login.html"
})

document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})




// function goShows() {
//     window.location = "http://localhost:3000/shows.html"
// }