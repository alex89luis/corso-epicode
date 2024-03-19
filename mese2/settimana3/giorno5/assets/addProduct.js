const salva = document.querySelector('#btn-salva')

salva.addEventListener('click', function (e){

let name = document.querySelector('#nome').value
let brand = document.querySelector('#brand').value
let price = document.querySelector('#prezzo').value
let imageUrl = document.querySelector('#id-url').value
let description = document.querySelector('#textarea').value


let cell = {
    name,
    description,
    brand,
    imageUrl,
    price
}

fetch('https://striveschool-api.herokuapp.com/api/product/',{
    method:'POST',
    headers: {
        'Content-type':'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJmMTJkN2IxMTAwMTkwZTZkZmQiLCJpYXQiOjE3MDk4OTA1NDUsImV4cCI6MTcxMTEwMDE0NX0.QUPl3m6dkNt75nWa50x5uYosAhiYHdS1IvnRqyFjaPo"
        },
        body:JSON.stringify(cell)
        
})
.then(res => res.json())
.then(res => {
    location.href = 'index.html'
})


})