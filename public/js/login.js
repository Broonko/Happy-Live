document.getElementById('signup').addEventListener('click', () => {
    axios
        .post('http://localhost:3000/api/auth/signup', {
            name: document.getElementById('signup_name').value,
            email: document.getElementById('signup_email').value,
            password: document.getElementById('signup_password').value
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('email', res.data.email)
            localStorage.setItem('name', res.data.name)
            localStorage.setItem('_id', res.data._id)

            goHome()
        })
        .catch((err) => {
            alert("Wrong data entered or user already registered");
        })
})

document.getElementById('login').addEventListener('click', () => {
    axios
        .post('http://localhost:3000/api/auth/login', {
            email: document.getElementById('login_email').value,
            password: document.getElementById('login_password').value
        })
        .then((res) => {
            if (res.data && res.data.token) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('name', res.data.name)
                localStorage.setItem('_id', res.data._id)

                console.log(res.data)
                goHome()
            } else {
                alert("Wrong data entered")
            }
        })
        .catch((err) => {
            alert("Wrong data entered")
        })
})

function goHome() {
    window.location = "http://localhost:3000/index.html"
}