const engineerCard = (element)=> {
  return `
  <div class="card">
  <div class="card-header">
      <h3>${element.getName()}</h3>
      <h5>Engineer</h5>
  </div>
  <div class="card-body">
  <p class="card-text">Employee ID: ${element.getId()}</p>
  <p class="card-text"><a href="mailto:">${element.getEmail()}</a></p>
  <p class="card-text"><a href="github.com/${element.getGithub()}">${element.getGithub()}\'s Github</a></p>
  </div>
  </div>
`
}

module.exports = engineerCard;