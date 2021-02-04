document.getElementById('createShow').addEventListener('click', () => {
    axios
        .post('http://localhost:3000/api/shows', {
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
            window.location = "http://localhost:3000/profile.html"
        })
        .catch(err => { alert('do not have permission') })
})
