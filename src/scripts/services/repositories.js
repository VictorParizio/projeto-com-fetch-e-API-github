import { baseUrl, repositoriesQuantify } from '../variable.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantify}`)
    return await response.json()
}

export { getRepositories }