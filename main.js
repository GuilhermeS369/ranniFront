const url = "https://ranni-app.herokuapp.com/users"


const newUser = {
    name: "Bob Brown",
    email: "bob@gmail.com",
    phone: "963495981",
    password: "123456789"
}

const UserUpdated = {
    name: "UsuarioEditado",
    email: "editUser@gmail.com",
    phone: "111111111",

}

function getUser() {
    axios.get(url)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
//getUser()

function addNewUser() {
    axios.post(url, newUser)
        .then(response => {
            console.log(response.data)
            alert("OK")
        })
        .catch(error => console.log(error))
}
//addNewUser()

function updateUser() {
    axios.put(`${url}/3`, UserUpdate)
        .then(response => {
            console.log(response.data)
            alert("Update")
        })
        .catch(error => console.log(error))
}
//updateUser()

function deleteUser() {
    axios.delete(`${url}/20`)
        .then(response => {
            console.log(response.data)
            alert("Delete")
        })
        .catch(error => console.log(error))
}
//deleteUser()

function getOneUser() {
    axios.get(`${url}/10`)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
//getOneUser()