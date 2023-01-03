import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'
import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validdateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPresed = key === 13
    
    if (isEnterKeyPresed) {
        if(validdateEmptyInput(userName)) return
        getUserData(userName)
    }    
})

function validdateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {
    
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}