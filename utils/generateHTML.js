
function renderTeamMembers(data, role) {
  console.log(data)
  let employees = "";
  for (i=0; i<data.length; i++) {
    employees += `<div>
      <h2>${data[i].name}</h2>
      <h2>${role}</h2>
      <p>ID: ${data[i].id}</p>
      <p>Email: <a href= "mailto:${data[i].email}">${data[i].email}</a></p>
      ${role=='Manager' ? `<p>Office Number: ${data[i].officeNumber}</p>` : ``}
      ${role=='Engineer' ? `<p>GitHub: <a href= "https://github.com/${data[i].github}"> ${data[i].github}</a></p>` : ``}
      ${role=='Intern' ? `<p>School: ${data[i].school}</p>` : ``}
    </div>`;
  }
  return employees
}

function generateHTML(teamName, managers, engineers, interns) {
  console.log(managers)
  console.log(engineers)
  console.log(interns)
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <header>
        <h1>${teamName}</h1>
      </header>
      <div>
        ${renderTeamMembers(managers, 'Manager')}
        ${renderTeamMembers(engineers, 'Engineer')}
        ${renderTeamMembers(interns, 'Intern')}
      </div>
    </body>
    </html>`
  }

module.exports = generateHTML;