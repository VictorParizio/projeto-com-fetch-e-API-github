import { baseUrl, eventsQuantify } from '../variable.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantify}`)
    return await response.json()
}

export { getEvents }