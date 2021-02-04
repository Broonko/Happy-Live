const api = axios.create({
    baseURL: 'https://happy-live.herokuapp.com',
    timeout: 1000
})

document.getElementById('saveUser').addEventListener('click', () => {
    console.log(document.getElementById('editWeb').value)
    api
        .put('/users/me', {
            "name": document.getElementById('editName').value,
            "email": document.getElementById('editEmail').value,
            "passwd": document.getElementById('editPassword').value,
            "photo": document.getElementById('editPhoto').value,
            "address": document.getElementById('editAddress').value,
            "location": document.getElementById('editLocation').value,
            "province": document.getElementById('editState').value,
            "zipCode": document.getElementById('editZip').value,
            "country": document.getElementById('editCountry').value,
            "social.web": document.getElementById('editWeb').value,
            "social.youtube": document.getElementById('editYoutube').value,
            "social.facebook": document.getElementById('editFacebook').value,
            "social.twitter": document.getElementById('editTwitter').value,
            "social.instagram": document.getElementById('editInstagram').value
        }, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            window.location = "http://localhost:3000/profile.html"
        })
        .catch(err => { alert('do not have permission') })
})

api
    .get('http://localhost:3000/api/users/me', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        if (response.data.name !== undefined) document.getElementById('editName').value = response.data.name
        document.getElementById('editEmail').value = response.data.email
        document.getElementById('editPassword').value = response.data.password
        if (response.data.photo !== undefined) document.getElementById('editPhoto').value = response.data.photo
        if (response.data.address !== undefined) document.getElementById('editAddress').value = response.data.addresss
        if (response.data.location !== undefined) document.getElementById('editLocation').value = response.data.location
        if (response.data.state !== undefined) document.getElementById('editState').value = response.data.state
        if (response.data.zip !== undefined) document.getElementById('editZip').value = response.data.zip
        if (response.data.country !== undefined) document.getElementById('editCountry').value = response.data.country
        if (response.data.web !== undefined) document.getElementById('editWeb').value = response.data.social.web
        if (response.data.youtube !== undefined) document.getElementById('editYoutube').value = response.data.social.youtube
        if (response.data.facebook !== undefined) document.getElementById('editFacebook').value = response.data.social.facebook
        if (response.data.twitter !== undefined) document.getElementById('editTwitter').value = response.data.social.twitter
        if (response.data.instagram !== undefined) document.getElementById('editInstagram').value = response.data.social.instagram


    })
    .catch(err => { alert('do not have permission') })