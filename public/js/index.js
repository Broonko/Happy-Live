const api = axios.create({
    baseURL: 'https://happy-live.herokuapp.com/api',
    timeout: 1000
})

window.onload = () => {
    let login = document.getElementById('loginh')
    if (localStorage.name !== undefined) {

        const user = document.getElementById('userName')
        const newUser = document.createElement('p')
        newUser.innerHTML = localStorage.name
        user.appendChild(newUser)

        login.innerHTML = "Logout"
        login.setAttribute('class', 'btn rounded-pill mt-5 btn-danger btn-sm')
        login.setAttribute('id', 'Logout')

    } else {

        login.innerHTML = "Login"
        login.setAttribute('class', 'btn rounded-pill mt-5 btn-success btn-sm')
        login.setAttribute('id', 'Loginh')
    }
}

api
    .get('/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
    })
    .catch(err => { alert('error home') })

document.getElementById('loginh').addEventListener('click', () => {
    if (localStorage.name) {

        localStorage.clear()
        window.location.reload()

    } else {
        window.location.href = "login.html"
    }
})

document.getElementById('searchButton').addEventListener('click', () => {
    let search = document.getElementById('searchShow').value

    if (search === 'music') {
        window.location.href = "shows.html"
        localStorage.setItem('searchType', 'music')
    } else {
        if (search === 'comedy') {
            window.location.href = "shows.html"
            localStorage.setItem('searchType', 'comedy')
        } else {
            if (search === 'kids') {
                window.location.href = "shows.html"
                localStorage.setItem('searchType', 'kids')
            } else {
                window.location.href = "shows.html"
                localStorage.setItem('searchName', search)
            }
        }
    }
})
