let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('type'))
let idshowType = urlParams.get('type')

axios
    .get(`http://localhost:3000/api/shows?type=${idshowType}`, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)

        response.data.forEach(show => {
                console.log(show.name)

                user = document.getElementById('Shows')
                newUser = document.createElement('div')
                newUser.setAttribute('class', 'col')
                newUser.innerHTML = `
                    <div class="card h-100">
                        <img src="images/DavidGuetta.jpg" class="card-img-top" alt="...">
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

                // let shows = document.getElementById('showList')
                // let newShow = document.createElement('li')
                // newShow.innerHTML = show.name
                // shows.appendChild(newShow)

                // let shows = document.getElementById('showName')
                // let newShow = document.createElement('dd')
                // newShow.innerHTML = show.name
                // shows.appendChild(newShow)

                // shows = document.getElementById('showType')
                // newShow = document.createElement('dd')
                // newShow.innerHTML = show.type
                // shows.appendChild(newShow)

                // shows = document.getElementById('showPlace')
                // newShow = document.createElement('dd')
                // newShow.innerHTML = show.place
                // shows.appendChild(newShow)
            
        })

    })
    .catch(err => { alert('error shows') })




// document.getElementById('logout').addEventListener('click', () => {
//     localStorage.clear()
//     window.location.reload()
// })

