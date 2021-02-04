document.getElementById('saveUser').addEventListener('click', () => {
axios
    .put('http://localhost:3000/api/users/me', {
        "name":  document.getElementById('editName').value,
        "email":  document.getElementById('editEmail').value,
        "passwd": document.getElementById('editPassword').value,
        "address": document.getElementById('editAddress').value,
        "location": document.getElementById('editLocation').value,
        "province": document.getElementById('editState').value,
        "zipCode": document.getElementById('editZip').value,
        "country": document.getElementById('editCountry').value,
        "social.web": document.getElementById('editWeb').value,
        "social.youtube": document.getElementById('editYoutube').value,
        "social.facebook": document.getElementById('editFacebook').value,
        "social.twitter": document.getElementById('editTwitter').value,
        "social.instagram": document.getElementById('editInstagram').value,
        "photo": document.getElementById('editPhoto').value
    }, { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        window.location = "http://localhost:3000/profile.html"
    })
    .catch(err => { alert('do not have permission') })
})
