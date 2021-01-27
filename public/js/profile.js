console.log(localStorage.name)
id = localStorage.getItem('_id')
console.log(id)
axios
    .get(`http://localhost:3000/api/users/${id}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(localStorage.name)
        console.log(localStorage._id)
        console.log(response.data)
        
        
        const user = document.getElementById('userProfile')

        const newUser = document.createElement('p')
        newUser.innerHTML = response.data.name
        user.appendChild(newUser)

    })
    .catch(err => { alert('do not have permission') })

    console.log(`'http://localhost:3000/api/users/${localStorage._id}'`)


        // const artists = document.getElementById('artistList')
        // response.data.forEach(artist => {
        //     const newArtist = document.createElement('li')
        //     newArtist.innerHTML = artist
        //     artists.appendChild(newArtist)



