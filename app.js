const names = document.querySelector("#name")
const zipCode = document.querySelector("#zip")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const submitBtn = document.querySelector("#form")
const tbody = document.querySelector("#tbody")

document.addEventListener("DOMContentLoaded", display())
submitBtn.addEventListener("submit", (e)=>{
    e.preventDefault()
    addToTable()
    checkWhiteSpace()
    clearFields()
})
    
names.addEventListener("blur", ()=>{
    validatenames(this)
})
zipCode.addEventListener("blur", ()=>{
    validatezipcode(this)
})
email.addEventListener("blur", ()=>{
    validateemail(this)
})
phone.addEventListener("blur", ()=>{
    validatephone(this)
})

function validatenames(){
    const re = /^[a-zA-z]{2,10}$/
    if(!re.test(names.value)){
         names.classList.add("is-invalid")
    }
    else{
        names.classList.remove("is-invalid")
        names.style.borderColor = "green"
    }
}
function validatezipcode(){
    const re = /^[0-9]{5}(-[0-9]{4})?$/
    if(!re.test(zipCode.value)){
        zipCode.classList.add("is-invalid")
    }
    else{
        zipCode.classList.remove("is-invalid")
        zipCode.style.borderColor = "green"
    }
}
function display(){
    let tasks
    localStorage.getItem("details")===null? tasks=[]:tasks=JSON.parse(localStorage.getItem("details"))
    console.log(tasks)
    tasks.forEach((detail)=>{
        console.log(detail)
        let output=""
        output += ` <tr>
                    <td>${detail.names}</td>
                    <td>${detail}</td>
                    <td>${detail}</td>
                    <td>${detail}</td>
                    </tr>
                    `
        tbody.innerHTML += output
    })
    localStorage.setItem("details", JSON.stringify(tasks))
}
function validateemail(){
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/
    if(!re.test(email.value)){
        email.classList.add("is-invalid")
    }
    else{
        email.classList.remove("is-invalid")
        email.style.borderColor = "green"
    }
}
function validatephone(){
    const re = /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/
    if(!re.test(phone.value)){
        phone.classList.add("is-invalid")
    }
    else{
        phone.classList.remove("is-invalid")
        phone.style.borderColor="green"
    }
    
}

function checkWhiteSpace(){
    if(phone.value === ""){
        phone.classList.add("is-invalid")
    }
    if(email.value === ""){
        email.classList.add("is-invalid")
    }
    if(names.value === ""){
        names.classList.add("is-invalid")
    }
    if(zipCode.value === ""){
        zipCode.classList.add("is-invalid")
    }
}

function addToTable(){

    const addedNames = names.value
    const addedZipcode = zipCode.value
    const addedEmail = email.value
    const addedPhone = phone.value

    let output=""
    output += ` <tr>
                <td>${addedNames}</td>
                <td>${addedZipcode}</td>
                <td>${addedEmail}</td>
                <td>${addedPhone}</td>
                </tr>
                `
    tbody.innerHTML += output

    const details ={addedNames, addedZipcode, addedEmail, addedPhone}
    const trappedDetails = displayTrapped()
    const data = [...trappedDetails, details]
    })
    saveToLocalStorage(data)
}
function clearFields(){
    names.value= ""
    names.style.borderColor="#ddd"
    zipCode.value= ""
    zipCode.style.borderColor="#ddd"
    email.value= ""
    email.style.borderColor="#ddd"
    phone.value= ""
    phone.style.borderColor="#ddd"
    
}
function saveToLocalStorage(data){
    let tasks
    localStorage.getItem("details") === null?tasks=[] :tasks=JSON.parse(localStorage.getItem("details")) 
    tasks.push(data)
    localStorage.setItem("details", JSON.stringify(tasks))
}
function displayTrapped(){
    let tasks
    localStorage.getItem("details") === null?tasks=[] :tasks=JSON.parse(localStorage.getItem("details")) 
}


