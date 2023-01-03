import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'
import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPresed = key === 13

    if (isEnterKeyPresed) {
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}