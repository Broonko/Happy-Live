axios
    .get('http://localhost:3000/api/shows', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)
        console.log(response.data[8].name)
        console.log(response.data[8].description)

        let shows = document.getElementById('showList')
        response.data.forEach(show => {
           let newShow = document.createElement('li')
            newShow.innerHTML = show.name
            shows.appendChild(newShow)

        })

        // shows = document.getElementById('showName0')
        // let newShow = document.createElement('dd')
        // newShow.innerHTML = response.data[8].name
        // shows.appendChild(newShow)

        
        for (let i = 0; i < response.data.length; i++) {
            
            shows = document.getElementById(`showName${i}`)
            let newShow = document.createElement('dd')
            newShow.innerHTML = response.data[i].name
            shows.appendChild(newShow)
            
            shows = document.getElementById(`showDescription${i}`)
            newShow = document.createElement('dd')
            newShow.innerHTML = response.data[i].description
            shows.appendChild(newShow)
        }

      

     


    
      
    })
    .catch(err => { alert('do not have permission') })


// function goShows() {
//     window.location = "http://localhost:3000/shows.html"
// }

// function goArtists() {
//     window.location = "http://localhost:3000/artists.html"
// }