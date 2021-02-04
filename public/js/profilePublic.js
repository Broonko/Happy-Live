let urlParams = new URLSearchParams(window.location.search);
var idprofilePublic = urlParams.get('id')

api
    .get(`/users/${idprofilePublic}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        let user = document.getElementById('profilePhoto')
        user.setAttribute('src', `${response.data.photo}`)

        user = document.getElementById('profileName')
        let newUser = document.createElement('dd')
        newUser.setAttribute('class', 'fs-6 fw-normal')
        newUser.innerHTML = response.data.name
        user.appendChild(newUser)

        user = document.getElementById('profileLocation')
        newUser = document.createElement('dd')
        newUser.setAttribute('class', 'fs-6 fw-normal')
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
        newUser.setAttribute('class', 'fs-6 fw-normal')
        newUser.innerHTML = response.data.artist.genre
        user.appendChild(newUser)

        user = document.getElementById('profileBio')
        newUser = document.createElement('dd')
        newUser.setAttribute('class', 'fs-6 fw-normal')
        newUser.innerHTML = response.data.artist.bio
        user.appendChild(newUser)

        user = document.getElementById('web')
        user.setAttribute('href', `${response.data.social.web}`)

        user = document.getElementById('youtube')
        user.setAttribute('href', `${response.data.social.youtube}`)

        user = document.getElementById('facebook')
        user.setAttribute('href', `${response.data.social.facebook}`)

        user = document.getElementById('twitter')
        user.setAttribute('href', `${response.data.social.twitter}`)

        user = document.getElementById('instagram')
        user.setAttribute('href', `${response.data.social.instagram}`)

        response.data.artist.shows.forEach((show, i) => {
            user = document.getElementById('profileShows')
            newUser = document.createElement('div')
            newUser.setAttribute('class', 'col')
            newUser.innerHTML = `
                <div class="card h-100">
                    <img src="${show.photo}" class="card-img-top" alt="...">
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
                var showPrice = show.price
                ticket.innerHTML = ('Purchased')
                ticket.setAttribute('class', 'btn btn-danger')

                api
                    .get('/users/me', { headers: { token: localStorage.getItem('token') } })
                    .then(response => {
                        if (response.data.balance > showPrice) {
                            var newBalance = (response.data.balance - showPrice)

                            api
                                .post('/purchases', {
                                    "show": show._id
                                }, { headers: { token: localStorage.getItem('token') } })
                                .then(response => {
                                    api
                                        .put('/users/me', { balance: newBalance }, { headers: { token: localStorage.getItem('token') } })
                                        .then(response => {
                                        })
                                        .catch(err => { alert('error update deposit') })
                                })
                                .catch(err => { alert('no enough money') })
                        } else { alert('Not enough money') }
                    })
                    .catch(err => { alert('error buy ticket') })
            })
        })
    })
    .catch(err => { alert('error profile public') })
