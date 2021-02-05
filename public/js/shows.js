var showName = localStorage.searchName
var showType = localStorage.searchType
localStorage.removeItem('searchName')
localStorage.removeItem('searchType')

if (showType !== null) {
    api
        .get(`/shows?type=${showType}`, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            response.data.forEach(show => {
                user = document.getElementById('shows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                    <div class="card h-100">
                        <img src="${show.photo}" class="card-img-top" alt="...">
                        <div class="card-header border-success text-end"> <a class="btn btn-success">Buy ticket</a></div>
                            <div class="card-body">
                                <p><h5 class="card-title">${show.name}</h5></p>
                                <p class="card-text">${show.date}</p>
                                <p class="card-text">Place: ${show.place}</p>
                                <p id="showDuration">Duration: ${show.duration}&emsp;&ensp;Price: ${show.price} eur</dt>
                                <p id="showDescription"> ${show.description}</p>
                            </div>
                        </div>
                    </div>
                    `
                user.appendChild(newUser)
            })
        })
        .catch(err => { alert('error shows type') })
}

if (showName !== null) {
    api
        .get(`/shows/name/${showName}`, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            response.data.forEach(show => {
                user = document.getElementById('shows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                <div class="card h-100">
                    <img src="${show.photo}" class="card-img-top" alt="...">
                    <div class="card-header border-success text-end"> <button id="${show._id}" class="btn btn-success">Buy ticket</button></div>
                        <div class="card-body">
                            <p><h5 class="card-title">${show.name}</h5></p>
                            <p class="card-text">${show.date}</p>
                            <p class="card-text">Place: ${show.place}</p>
                            <p id="showDuration">Duration: ${show.duration}&emsp;&ensp;Price: ${show.price} eur</dt>
                            <p id="showDescription"> ${show.description}</p>
                        </div>
                    </div>
                </div>
                `
                user.appendChild(newUser)
                // `buyTicket${i}`

                var ticket = document.getElementById(show._id)
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
        .catch(err => { alert('error show name') })

    api
        .get(`/users?name=${showName}`, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            response.data.forEach(show => {
                user = document.getElementById('shows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                <div class="card h-100">
                    <img src="${show.photo}" class="card-img-top" alt="...">
                    <div class="card-header border-success text-end"> <button id="${show._id}" class="btn btn-warning">Go to Profile</button></div>
                        <div class="card-body">
                            <p><h5 class="card-title">${show.name}</h5></p>
                            <p class="card-text">Type: ${show.artist.genre}</p>
                            <p class="card-text">Location: ${show.location}</p>
                            <p class="card-text">Bio: ${show.artist.bio}</p>
                        </div>
                    </div>
                </div>
                `
                user.appendChild(newUser)

                document.getElementById(show._id).addEventListener("click", function () {
                    window.location = `http://localhost:3000/profilePublic.html?id=${show._id}`
                })
            })

        })
        .catch(err => { alert('error artist name') })
}
