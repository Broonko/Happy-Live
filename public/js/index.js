// http://localhost:3000/shows.html?type=${artist.id}

// axios
// .get('http://localhost:3000/api/shows', { headers: { token: localStorage.getItem('token') } })
// .then(response => {
//     console.log(response.data)

//     // let shows = document.getElementById('navMusic')
//     // shows.setAttribute('href', `http://localhost:3000/shows.html?type=${artist.id}`)
// })
// .catch(err => { alert('error indexshows') })


axios
    .get('http://localhost:3000/api/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)

        if (localStorage.name !== undefined) {
            console.log(localStorage.name)

            const user = document.getElementById('userName')
            const newUser = document.createElement('p')
            newUser.innerHTML = localStorage.name
            user.appendChild(newUser)

            let login = document.getElementById('loginh')
            login.innerHTML = "Logout"
            login.setAttribute('class', 'btn mt-5 btn-danger') 
            login.setAttribute('id', 'Logout')
        } else {

            let login = document.getElementById('loginh')
            login.innerHTML = "Login"
            login.setAttribute('class', 'btn mt-5 btn-success') 
            login.setAttribute('id', 'Loginh')


        }

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
// document.getElementById('logout').addEventListener('click', () => {
//     localStorage.clear()
//     window.location.reload()
// })




// function goShows() {
//     window.location = "http://localhost:3000/shows.html"
// }