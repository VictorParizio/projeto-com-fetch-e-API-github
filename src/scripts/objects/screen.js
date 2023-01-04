const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                    <p>Seguidores ${user.followers}</p>
                    <p>Seguindo ${user.following}</p>
                </div>
            </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems +=
            `<li>
                <a href="${repo.html_url}" target="_blank">
                ${repo.name}
                    </a>
                    <div>
                    <span><i class="fa fa-code-branch"></i> ${repo.forks}</span>
                    <span><i class="fa fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fa fa-eye"></i> ${repo.watchers}</span>
                    <span><i class="fa fa-microchip"></i> ${repo.language}</span>
                    </div>
                    <p>${repo.description}</p>
                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="repositories section">
                    <h2>Repositórios</h2>
                        <ul>${repositoriesItems}</ul>
                        </div>`
        }

        let eventsItems = ''
        user.events.forEach(event => eventsItems +=
            `<li>
                                ${event.repo.name} - <span class="events">${event.payload.description ?? event.payload.commits[0].message}</span>
                            </li>`
        )

        if (user.events.length > 0) {
            this.userProfile.innerHTML +=
                `<div>
                                    <h2>Últimos Eventos</h2>
                                    <ul>${eventsItems}</ul>
                                </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }