var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id'))
let idprofilePublic = urlParams.get('id')

axios
    .get(`http://localhost:3000/api/users/${idprofilePublic}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        // console.log(localStorage.name)
        // console.log(localStorage._id)
        // console.log(response.data)
        // console.log(response.data.artist.genre)

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

        response.data.artist.shows.forEach(show => {
            console.log(show)
            user = document.getElementById('profileShows')
            newUser = document.createElement('div')
            newUser.setAttribute('class', 'container-fluid')
            newUser.innerHTML = `
                   
                        <div class="col-sm-6
                        ">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${show.name}     ${show.type}</h5>
                                    <p class="card-text">${show.place}</p>
                                    <p id="showDuration">${show.duration}      ${show.price} eur</dt>
                                    <p id="showDescription"> ${show.description}</p>
                                    <a href="#" class="btn btn-success">Buy ticket</a>
                                </div>
                            </div>
                        </div> 
                    `
            user.appendChild(newUser)
        })
    })
    .catch(err => { alert('error profile') })


