const linksSocialMedia = {
  github: 'MayaraDias',
  youtube: 'c/RocketSeat',
  instagram: 'mayaradias62',
  facebook: 'mayara.dias.75033'
}

function changeSocialMediaLinks() {
  for (let li of listaMidias.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      fotoPessoal.src = data.avatar_url
    })
}
getGitHubProfileInfos()
