const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado😢'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                    <p>${user.followers ?? 'Não possui bio cadastrada 😢'} <i class="fas fa-users"> Seguidores</i></p>
                    <p>${user.following ?? 'Não possui bio cadastrada 😢'} <i class="fas fa-user-friends"> Seguindo</i></p>
                </div>
            </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo =>
            repositoriesItens += `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </li>
            <li>
                <p>🍴 ${repo.forks}</p=>
            </li>
            <li>
                <p>⭐ ${repo.stargazers_count}</p=>
            </li>
            <li>
                <p>👀 ${repo.watchers}</p=>
            </li>
            <li>
                <p>👨‍💻 ${repo.language}</p=>
            </li>`
        )

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section"
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }