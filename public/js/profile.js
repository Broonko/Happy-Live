api
    .get('/users/me', { headers: { token: localStorage.getItem('token') } })
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

        user = document.getElementById('profileBalance')
        newUser = document.createElement('dd')
        newUser.setAttribute('class', 'd-flex justify-content-start fs-6 fw-normal')
        newUser.innerHTML = `${response.data.balance}&ensp;<div class="d-flex"><img src="images/star.png"/></div>`
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


        if (response.data.artist.genre) {
            user = document.getElementById('artistOK')
            newUser = document.createElement('dd')
            newUser.innerHTML = "An Artist"
            user.appendChild(newUser)

            newUser = document.createElement('dd')
            newUser.innerHTML = `<a href="createShow.html">Create a Show</a>`
            user.appendChild(newUser)

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

            response.data.artist.shows.forEach(show => {
                user = document.getElementById('profileShows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                <div class="card h-100">
                    <img src="${show.photo}" class="card-img-top" alt="...">
                    <div class="card-header border-success text-end"><a href="" class="btn btn-warning">Live stream</a></div>
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
            })
        }
    })
    .catch(err => { alert('error profile') })

api
    .get('/purchases', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        response.data.forEach((purchase, i) => {
            let buy = document.getElementById('profilePurchases')
            let newBuy = document.createElement('div')
            newBuy.setAttribute('class', 'col')
            newBuy.innerHTML = `
            <div class="card h-100">
                <img src="${purchase.show.photo}" class="card-img-top" alt="...">
                <div class="card-header border-danger text-end"><a href="showLive${i}.html" class="btn btn-danger">Watch</a></div>
                    <div class="card-body">
                        <p><h5 class="card-title">${purchase.show.name}</h5></p>
                        <p class="card-text">${purchase.show.date}</p>
                        <p class="card-text">Place: ${purchase.show.place}</p>
                        <p id="showDuration">Duration: ${purchase.show.duration} min&emsp;&ensp;Price: ${purchase.show.price} eur</dt>
                        <p id="showDescription"> ${purchase.show.description}</p>
                    </div>
                </div>
            </div>
          `
            buy.appendChild(newBuy)
        })
    })
    .catch(err => { alert('error profilePurchases') })

document.getElementById('buttonDeposit').addEventListener('click', () => {

    api
        .get('/users/me', { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            deposit = document.getElementById('amountDeposit').value
            newBalance = parseInt(deposit)
            newBalance += response.data.balance

            api
                .put('/users/me', { balance: newBalance }, { headers: { token: localStorage.getItem('token') } })
                .then(response => {
                    window.location.href = "profile.html"
                })
                .catch(err => { alert('error update deposit') })
        })
        .catch(err => { alert('error deposit') })
})
