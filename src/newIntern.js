const internCard = (employee) => {
  return `
  <div class="card">
  <div class="card-header">
      <h3>${employee.name}</h3>
      <h5>Engineer</h5>
  </div>
  <div class="card-body">
  <p class="card-text">Employee ID: ${employee.id}</p>
  <p class="card-text"><a href="mailto:">Email: ${employee.email}</a></p>
  <p class="card-text">School: ${employee.school}</p>
  </div>
</div>
`
}

module.exports = internCard;