const engineerCard = (employee) => {
  return `
  <div class="card">
  <div class="card-header">
      <h3>${employee.name}</h3>
      <h5>Engineer</h5>
  </div>
  <div class="card-body">
  <p class="card-text">Employee ID: ${employee.id}</p>
  <p class="card-text"><a href="mailto:">${employee.email}</a></p>
  <p class="card-text"><a href="github.com/${employee.getGithub}">${employee.name}\'s Github</a></p>
  </div>
  </div>
`
}

module.exports = engineerCard;