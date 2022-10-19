const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


//Llamado a la api

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    
})

const fetchData = async () => {
    try {
        const res = await fetch('api_cards_landing.json')
        const data = await res.json()
        console.log(data)
        pintarCards(data)

        
    } catch (error) {
        console.log(error)
    }
}

//Hacer visible la información

const pintarCards = data => {
    data.forEach(gatos => {
        templateCard.getElementById('nombre').textContent = gatos.nombre
        templateCard.getElementById('edad').textContent = gatos.edad
        templateCard.getElementById('sexo').textContent = gatos.sexo
        templateCard.getElementById('color').textContent = gatos.color
        templateCard.getElementById('este').textContent = gatos.esterilizado
        templateCard.getElementById('vacu').textContent = gatos.vacunado
        templateCard.getElementById('dis').textContent = gatos.discapacidad
        templateCard.getElementById('salu').textContent = gatos.estado
        

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)
}
