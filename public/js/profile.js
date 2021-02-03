// var urlParams = new URLSearchParams(window.location.search);
// let idArtist = urlParams.get('id') 

axios
    .get('http://localhost:3000/api/purchases', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        
        response.data.forEach((purchase, i) => {
            console.log(purchase)
            let buy = document.getElementById('profilePurchases')
            let newBuy = document.createElement('div')
            newBuy.setAttribute('class', 'col')
            newBuy.innerHTML = `
                <div class="card h-100">
                    <img src="${purchase.show.photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <div class="card-header border-danger text-end"> <a href="http://localhost:3000/showLive${i}.html" class="btn btn-danger">Watch</a></div>
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
        newUser.setAttribute('class', 'd-flex justify-content-center')
        newUser.innerHTML = `${response.data.balance}&ensp;<div class="d-flex"><img src="images/s.png"/></div>`
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
                user = document.getElementById('profileShows')
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




        // const artists = document.getElementById('artistList')
        // response.data.forEach(artist => {
        //     const newArtist = document.createElement('li')
        //     newArtist.innerHTML = artist
        //     artists.appendChild(newArtist)



