const managerCard = (element) => {
 console.log('Manager begins')
  return `
  <div class="card">
  <div class="card-header">
      <h3>${element.getName()}</h3>
      <h5>Manager</h5>
  </div>
  <div class="card-body">
  <p class="card-text">Employee ID: ${element.getId()}</p>
  <p class="card-text"><a href="mailto:">Email: ${element.getEmail()}</a></p>
  <p class="card-text">Office Number: ${element.getOfficeNumber()}</p>
  </div>
</div>
`
}

module.exports = managerCard;