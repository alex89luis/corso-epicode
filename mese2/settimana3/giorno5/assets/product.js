fetch('https://striveschool-api.herokuapp.com/api/product/',{
    method:'GET',
    headers: {
        'Content-type':'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJmMTJkN2IxMTAwMTkwZTZkZmQiLCJpYXQiOjE3MDk4OTA1NDUsImV4cCI6MTcxMTEwMDE0NX0.QUPl3m6dkNt75nWa50x5uYosAhiYHdS1IvnRqyFjaPo"
        },
        
})
.then(res => res.json())
.then( cell => {

console.log(cell);

for(let telefono of cell){
    let card = generaClone()

    let nome = card.querySelector('#nome')
    let descrizione = card.querySelector('#descrizione')
    let img = card.querySelector('#img')
    let editBtn = card.querySelector('#btn-modifica')
    

    nome.innerText = telefono.name
    descrizione.innerText = telefono.description
    img.src = telefono.imageUrl
    editBtn.href = `edit.html?id=${telefono._id}`




    document.querySelector('.row').append(card)
}

})




function generaClone(){
    
    let template = document.querySelector('.t-content')
    let clone = template.content.cloneNode(true)
    
    return clone;
}