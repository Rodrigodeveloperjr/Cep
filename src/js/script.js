const criandoEstrutura = () => {

    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const form = document.createElement("form")
    const inputText = document.createElement("input")
    const buttonSubmit = document.createElement("button")
    const section = document.createElement("section")

    const estado = document.createElement("p")
    const cidade = document.createElement("p")
    const bairro = document.createElement("p")
    const rua = document.createElement("p")
    const ddd = document.createElement("p")


    div.classList.add("form-box")
    
    form.setAttribute("id", "cep-form")
    inputText.setAttribute("id", "cep-input")
    buttonSubmit.setAttribute("id", "cep-submit")
    section.setAttribute("id", "result")

    estado.setAttribute("id", "estado")
    cidade.setAttribute("id", "cidade")
    bairro.setAttribute("id", "bairro")
    rua.setAttribute("id", "rua")
    ddd.setAttribute("id", "ddd")


    h2.innerText = "Busque um CEP"

    inputText.autocomplete = "off"
    inputText.type = "text"
    inputText.placeholder = "Digite o cep"

    buttonSubmit.type = "submit"
    buttonSubmit.innerText = "Buscar"


    form.append(inputText, buttonSubmit)

    section.append(estado, cidade, bairro, rua, ddd)

    div.append(h2, form, section)

    document.body.append(div)
}

criandoEstrutura()



const cep = document.getElementById("cep-form")
const result = document.getElementById("result")

const estadoForm = document.getElementById("estado")
const cidadeForm = document.getElementById("cidade")
const bairroForm = document.getElementById("bairro")
const ruaForm = document.getElementById("rua")
const dddForm = document.getElementById("ddd")


cep.addEventListener("submit", submit)

async function submit(event) {
    
    event.preventDefault()

    const input = cep[0]
    const inputValue = input.value

    result.style.visibility = "visible"

    const estado = await fetch(`https://viacep.com.br/ws/${inputValue}/json`).then(obj => obj.json()).then(estado => estado.uf).catch(() => {})

    const cidade = await fetch(`https://viacep.com.br/ws/${inputValue}/json`).then(obj => obj.json()).then(cidade => cidade.localidade).catch(() => {})
    
    const bairro = await fetch(`https://viacep.com.br/ws/${inputValue}/json`).then(obj => obj.json()).then(bairro => bairro.bairro).catch(() => {})
    
    const rua = await fetch(`https://viacep.com.br/ws/${inputValue}/json`).then(obj => obj.json()).then(rua => rua.logradouro).catch(() => {})

    const ddd = await fetch(`https://viacep.com.br/ws/${inputValue}/json`).then(obj => obj.json()).then(ddd => ddd.ddd).catch(() => {})
    
    estadoForm.innerText = `Estado: ${estado}`
    cidadeForm.innerText = `Cidade: ${cidade}` 
    bairroForm.innerText = `Bairro: ${bairro}`
    ruaForm.innerText = `Rua: ${rua}`
    dddForm.innerText = `DDD: ${ddd}`
}
