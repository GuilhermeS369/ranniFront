const url = "https://ranni-app.herokuapp.com/users/1"

function getUser(){
    axios.get(url)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.log(error))
}

getUser()