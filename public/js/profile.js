// var urlParams = new URLSearchParams(window.location.search);
// let idArtist = urlParams.get('id') 

axios
    .get('http://localhost:3000/api/users/me', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        // console.log(localStorage.name)
        // console.log(localStorage._id)
        // console.log(response.data)
        // console.log(response.data.artist.genre)

        // let user = document.getElementById('profileName')
        // let newUser = document.createElement().innerHTML = `
        // <dd class="col-md-5">${response.data.name}</dd>` 
        // user.appendChild(newUser)

            // const userL = document.getElementById('userName')
            // const newUserL = document.createElement('p')
            // newUserL.innerHTML = response.data.name
            // user.appendChild(newUserL)

        let user = document.getElementById('profilePhoto')
        user.setAttribute('src', `${response.data.photo}`)

        user = document.getElementById('profileName')
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

        if (response.data.artist.genre) {
            user = document.getElementById('artistOK')
            newUser = document.createElement('dd')
            newUser.innerHTML = "An Artist"
            user.appendChild(newUser)

            newUser = document.createElement('dd')
            newUser.innerHTML = `<a href="http://localhost:3000/createShow.html">Create a Show</a>`
            user.appendChild(newUser)

            user = document.getElementById('profileGenre')
            newUser = document.createElement('dd')
            newUser.innerHTML = response.data.artist.genre
            user.appendChild(newUser)

            user = document.getElementById('profileBio')
            newUser = document.createElement('dd')
            newUser.innerHTML = response.data.artist.bio
            user.appendChild(newUser)

            response.data.artist.shows.forEach(show => {
                console.log(show)
                user = document.getElementById('profileShows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                    <div class="card h-100">
                        <img src="${show.photo}" class="card-img-top" alt="...">
                        <div class="card-header border-success text-end"> <a href="#" class="btn btn-success">Buy ticket</a></div>
                            <div class="card-body">
                                <p><h5 class="card-title">${show.name}</h5></p>
                                <p class="card-text">Place: ${show.place}</p>
                                <p id="showDuration">Duration: ${show.duration}&emsp;&ensp;Price: ${show.price} eur</dt>
                                <p id="showDescription"> ${show.description}</p>
                            </div>
                        </div>
                    </div>
                  `
                user.appendChild(newUser)
            })

        }
    })
    .catch(err => { alert('error profile') })




        // const artists = document.getElementById('artistList')
        // response.data.forEach(artist => {
        //     const newArtist = document.createElement('li')
        //     newArtist.innerHTML = artist
        //     artists.appendChild(newArtist)



