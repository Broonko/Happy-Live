let urlParams = new URLSearchParams(window.location.search)
var showName = urlParams.get('name')
var showType = urlParams.get('type')

if (showType !== null) {
    axios
        .get(`http://localhost:3000/api/shows?type=${showType}`, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            response.data.forEach(show => {
                user = document.getElementById('shows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                    <div class="card h-100">
                        <img src="${show.photo}" class="card-img-top" alt="...">
                        <div class="card-header border-success text-end"> <a href="#" class="btn btn-success">Buy ticket</a></div>
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
    axios
        .get(`http://localhost:3000/api/shows/name/${showName}`, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            response.data.forEach(show => {
                user = document.getElementById('shows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                <div class="card h-100">
                    <img src="${show.photo}" class="card-img-top" alt="...">
                    <div class="card-header border-success text-end"> <a href="#" class="btn btn-success">Buy ticket</a></div>
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
        .catch(err => { alert('error name') })

    axios
        .get(`http://localhost:3000/api/users?name=${showName}`, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            window.location = `http://localhost:3000/profilePublic.html?id=${response.data[0]._id}`
        })
        .catch(err => { alert('error artist name') })
}
