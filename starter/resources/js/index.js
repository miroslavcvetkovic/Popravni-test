// ovde raditi zadatak
const divForma = document.querySelector('.form-style');
const forma = document.querySelector('#forma');
const divItemcont = document.querySelector('#item-container');
const item = document.querySelector('.item');
const btnSubmit = document.querySelector('#dodaj');

let unos = [
    {
        id: 0,
        predmet: 'Matematika',
        profesor: 'Jovana Jovanović',
        datum: '21-Jan-2021',
        vreme: '10:30'
    },
    {
        id: 0,
        predmet: 'Engleski',
        profesor: 'Pera Perić',
        datum: '22-Jan-2021',
        vreme: '11:00'
    }
]

const addToDivItemCont = raspored => {
    const addItem = document.createElement('div')
    addItem.className = 'item'
    addItem.innerHTML = `
    <div>
    <p><span>Predmet:</span> ${unos.predmet}</p>
    <p><span>Profesor:</span> ${unos.profesor}</p>
    <p><span>Datum: </span> ${unos.datum}</p>
    <p><span>Vreme: </span> ${unos.vreme}</p>
    <p><button>Obrisi</button></p>
    <p><button>Izmeni Profesora</button></p>
    </div>
    `
    divItemcont.append(addItem)
}

btnSubmit.addEventListener('click', () => {
    const inputPredmet = document.querySelector('#predmet')
    const inputName = document.querySelector('#profesor')
    const inputDatum = document.querySelector('#date')
    const inputVreme = document.querySelector('#time')
    let time = new Date()
    
    let raspored = {
        predmet: inputPredmet.value.trim(),
        profesor: inputName.value.trim(),
        datum: inputDatum.value,
        vreme: inputVreme.value,
    }

})