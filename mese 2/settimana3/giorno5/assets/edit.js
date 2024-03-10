let url = new URLSearchParams(location.search)
let id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
    method:'GET',
    headers: {
        'Content-type':'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJmMTJkN2IxMTAwMTkwZTZkZmQiLCJpYXQiOjE3MDk4OTA1NDUsImV4cCI6MTcxMTEwMDE0NX0.QUPl3m6dkNt75nWa50x5uYosAhiYHdS1IvnRqyFjaPo"
        },
        
})

.then(res => res.json())
.then(telefono =>{

    let name = document.querySelector('#nome')
    let brand = document.querySelector('#brand')
    let price = document.querySelector('#prezzo')
    let imgUrl = document.querySelector('#id-url')

    name.value =  telefono.name
    brand.value = telefono.brand
    price.value = telefono.price
    imgUrl.value = telefono.imgUrl

})

const salva = document.querySelector('#btn-salva')

salva.addEventListener('click',function(){

    let name = document.querySelector('#nome').value
    let brand = document.querySelector('#brand').value
    let price = document.querySelector('#prezzo').value
    let imgUrl = document.querySelector('#id-url').value

    let telefono = {
        name,
        brand,
        price,
        imgUrl
    }

    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJmMTJkN2IxMTAwMTkwZTZkZmQiLCJpYXQiOjE3MDk4OTA1NDUsImV4cCI6MTcxMTEwMDE0NX0.QUPl3m6dkNt75nWa50x5uYosAhiYHdS1IvnRqyFjaPo"
        },
        body:JSON.stringify(telefono)
    })

    .then(res => res.json())
    .then(res => {

        

        location.href = 'index.html'

    })
        
    

})

let deleteBtn = document.querySelector('#btn-delete')

deleteBtn.addEventListener('click',function(){

    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJmMTJkN2IxMTAwMTkwZTZkZmQiLCJpYXQiOjE3MDk4OTA1NDUsImV4cCI6MTcxMTEwMDE0NX0.QUPl3m6dkNt75nWa50x5uYosAhiYHdS1IvnRqyFjaPo"
        }
    })
    .then(res => res.json())
    .then(eliminato => {
        location.href = 'index.html'
    })
    
})

