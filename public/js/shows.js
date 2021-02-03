let urlParams = new URLSearchParams(window.location.search)
var showName = urlParams.get('name')
var showType = urlParams.get('type')

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
    .catch(err => { alert('error shows') })

axios
    .get(`http://localhost:3000/api/shows/name/${showName}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        // console.log(response.data.id)
        // if (response.data.length === 0) {
        //     window.location = http://localhost:3000/profilePublic.html?id=${artist.id}
        // }
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
    .catch(err => { alert('error home') })

axios
    .get(`http://localhost:3000/api/users?name=${showName}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data[0].artist.shows)

        window.location = `http://localhost:3000/profilePublic.html?id=${response.data[0]._id}`

        // response.data.artist.forEach(show => {
        //     console.log(showName)
        //     console.log(show.name)
        //     console.log(show.shows.place)
           
                // user = document.getElementById('shows')
                // newUser = document.createElement('div')
                // newUser.setAttribute('class', 'col')
                // newUser.innerHTML = `
                // <div class="card h-100">
                //     <img src="${show.photo}" class="card-img-top" alt="...">
                //     <div class="card-header border-success text-end"> <a href="#" class="btn btn-success">Buy ticket</a></div>
                //         <div class="card-body">
                //             <p><h5 class="card-title">${show.name}</h5></p>
                //             <p class="card-text">${user.date}</p>
                //             <p class="card-text">Place: ${show.place}</p>
                //             <p id="showDuration">Duration: ${show.duration}&emsp;&ensp;Price: ${show.price} eur</dt>
                //             <p id="showDescription"> ${show.description}</p>
                //         </div>
                //     </div>
                // </div>
                // `
                // user.appendChild(newUser)
            
        // })
    })
    .catch(err => { alert('error home') })
