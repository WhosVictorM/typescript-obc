interface GithubUserResponse {
    id: number,
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
    message?: "Not Found"
}

interface GithubRepoResponse{
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user: GithubUserResponse = await response.json()

  if (user.message) {
    alert('Usuário não encontrado!');
  } else {
    users.push(user)

		alert(
      `O usuário ${user.login} foi salvo.\n` +
      `\nid: ${user.id}` +
      `\nlogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}
      \n------------------------`
    )
  }
}

async function showUser(username:string) {
    const user = users.find(user => user.login.toLowerCase() === username.toLowerCase())

    if (typeof user === "undefined") {
        alert("User not found!")
    } else {
        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()

        let message = `ID: ${user.id}
            \nLogin: ${user.login}
            \nName: ${user.name}
            \nBio: ${user.bio}
            \nPublic Repositories: ${user.public_repos}
            \n------------------------`
            
        repos.forEach(repo => {
            message += `\nName: ${repo.name}
                \nDescription: ${repo.description}
                \nStars: ${repo.stargazers_count}
                \nIs it a Fork: ${repo.fork ? 'Yes' : 'No'}
                \n------------------------`
        })

        alert(message);
    }
    
}

function showAllUsers() {
    let message = "Users:\n"

    users.forEach(user => {
        message += `\n${user.login}`
    })

    alert(message)
}

function showReposTotal() {
    const reposTotal = users.reduce((accumulator, user) => accumulator + user.public_repos, 0)

    alert(`There is a ${reposTotal} total public repositories.`)
}

function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0,5)
    let message = (`Top 5 users with more public repositories`)
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositories.`
    })

    alert(message)

}

async function main() {
    await fetchUser('isaacpontes')
    await fetchUser('whosvictorm')
    await fetchUser('sellucas')
    await fetchUser('lucasqueirogaa')
    await fetchUser('frans203')
    await fetchUser('LeDragoX')
  
    await showUser('whosvictorm')
    await showUser('sellucas')
  
    showAllUsers()
    showReposTotal()
    showTopFive()
  }
  
  main()