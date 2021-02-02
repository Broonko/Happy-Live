var urlParams = new URLSearchParams(window.location.search);
let idprofilePublic = urlParams.get('id')

axios
    .get(`http://localhost:3000/api/users/${idprofilePublic}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data.artist.shows)
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

        user = document.getElementById('profileBalance')
        user.innerHTML = ''

        user = document.getElementById('profileGenre')
        newUser = document.createElement('dd')
        newUser.innerHTML = response.data.artist.genre
        user.appendChild(newUser)

        user = document.getElementById('profileBio')
        newUser = document.createElement('dd')
        newUser.innerHTML = response.data.artist.bio
        user.appendChild(newUser)

        response.data.artist.shows.forEach((show, i) => {
            user = document.getElementById('profileShows')
            newUser = document.createElement('div')
            newUser.setAttribute('class', 'col')
            newUser.innerHTML = `
                <div class="card h-100">
                    <img src="images/DavidGuetta.jpg" class="card-img-top" alt="...">
                    <div class="card-header border-success text-end"> <button id="buyTicket${i}" class="btn btn-success">Buy ticket</button></div>
                        <div class="card-body">
                            <p><h5 class="card-title">${show.name}</h5></p>
                            <p class="card-text">${show.date}</p>
                            <p class="card-text">Place: ${show.place}</p>
                            <p id="showDuration">Duration: ${show.duration} min&emsp;&ensp;Price: ${show.price} eur</dt>
                            <p id="showDescription"> ${show.description}</p>
                        </div>
                    </div>
                </div>
                `
            user.appendChild(newUser)

            var ticket = document.getElementById(`buyTicket${i}`)
            ticket.addEventListener('click', () => {
                    console.log("hola" + show._id)
                    ticket.innerHTML = ('Purchased')
                    ticket.setAttribute('class', 'btn btn-danger')
                    // ticket.setAttribute('id', `purchased${i}`)

                axios 
                    .post('http://localhost:3000/api/purchases', {
                        "show": show._id
                    }, { headers: { token: localStorage.getItem('token') } })
                    .then(response => {
                        response.json(response)
                    })
                    .catch(err => { alert('error buy ticket') })
            })
        })
        //     response.data.artist.shows.forEach((show, i) => {
        // })
    })
    .catch(err => { alert('error profile') })
