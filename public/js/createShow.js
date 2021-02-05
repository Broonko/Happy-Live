const api = axios.create({
    baseURL: 'https://happy-live.herokuapp.com',
    timeout: 1000
})
var picker = new Pikaday({ field: document.getElementById('datepicker') });

document.getElementById('createShow').addEventListener('click', () => {
    api
        .post('/shows', {
            "name": document.getElementById('createName').value,
            "type": document.getElementById('createType').value,
            "date": document.getElementById('datepicker').value,
            "place": document.getElementById('createPlace').value,
            "duration": document.getElementById('createDuration').value,
            "price": document.getElementById('createPrice').value,
            "description": document.getElementById('createDescription').value,
            "photo": document.getElementById('createPhoto').value
        }, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            window.location.href = "profile.html"
        })
        .catch(err => { alert('do not have permission') })
})
