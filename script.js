const form = document.querySelector('#form-habits') //form
const nlwSetup = new NLWSetup(form) //criar objeto
const button = document.querySelector('header button')

form.addEventListener('change', save)

button.addEventListener('click', ()=>{
    const today =  new Date().toLocaleString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert('Dia já incluso')
        return
    }
    
    window.alert("Adicionado com Sucesso!")
    nlwSetup.addDay(today)
})

function save() {
    localStorage.setItem('NLWSetup', JSON.stringify(nlwSetup.data)) 
    //guardar local assim que for disparado o change do form
}

const data = JSON.parse(localStorage.getItem('NLWSetup')) || {}//pegar do storage

nlwSetup.setData(data) //guardando o array
nlwSetup.load() //carregando o array