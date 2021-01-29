axios
    .get(`http://localhost:3000/api/users/${localStorage._id}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(localStorage.name)
        console.log(localStorage._id)
        console.log(response.data)
        console.log(response.data.artist.genre)

        // let user = document.getElementById('profileName')
        // let newUser = document.createElement().innerHTML = `
        // <dd class="col-md-5">${response.data.name}</dd>` 
        // user.appendChild(newUser)

        let user = document.getElementById('profileName')
        let newUser = document.createElement('dd')
        newUser.innerHTML = response.data.name
        user.appendChild(newUser)

        user = document.getElementById('profileLocation')
        newUser = document.createElement('dd')
        newUser.innerHTML = response.data.location
        user.appendChild(newUser)

        user = document.getElementById('profileBalance')
        newUser = document.createElement('dd')
        newUser.innerHTML = response.data.balance
        user.appendChild(newUser)

       

        // user = document.getElementById('profileLocation')
        // newUser = document.createElement('dd')
        // newUser.innerHTML = response.data.city
        // user.appendChild(newUser)

        if (response.data.artist.genre) {
        user = document.getElementById('artistOK')
        newUser = document.createElement('dd')
        newUser.innerHTML = "An Artist"
        user.appendChild(newUser)

        user = document.getElementById('profileGenre')
        newUser = document.createElement('dd')
        newUser.innerHTML = response.data.artist.genre
        user.appendChild(newUser)

        user = document.getElementById('profileBio')
        newUser = document.createElement('dd')
        newUser.innerHTML = response.data.artist.bio
        user.appendChild(newUser)
        }

        //

    })
    .catch(err => { alert('do not have permission') })

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
    .catch(err => { alert('do not have permission') })


document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})



        // const artists = document.getElementById('artistList')
        // response.data.forEach(artist => {
        //     const newArtist = document.createElement('li')
        //     newArtist.innerHTML = artist
        //     artists.appendChild(newArtist)



