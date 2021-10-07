
function renderTeamMembers(data, role) {
  console.log(data)
  let employees = "";
  for (i=0; i<data.length; i++) {
    employees += `<div class="container">
      <div class="heading">
        <h2>${data[i].name}</h2>
        <h2>${role=='Manager'
          ? `<i class="fa-solid fa-apple-whole"></i>`
          : role=='Engineer'
            ? `<i class="fa-solid fa-glasses"></i>`
            : `<i class="fa-solid fa-graduation-cap"></i>`} ${role}</h2>
      </div>
        <p>ID: ${data[i].id}</p>
        <p>Email: <a href= "mailto:${data[i].email}">${data[i].email}</a></p>
        ${role=='Manager' 
          ? `<p>Office Number: ${data[i].officeNumber}</p>` 
          : role=='Engineer' 
            ? `<p>GitHub: <a href= "https://github.com/${data[i].github}"> ${data[i].github}</a></p>` 
            : `<p>School: ${data[i].school}</p>`}
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="./css/style.css">
      <title>Document</title>
    </head>
    <body>
      <header>
        <h1>${teamName}</h1>
      </header>
      <div class="flex-row">
        ${renderTeamMembers(managers, 'Manager')}
        ${renderTeamMembers(engineers, 'Engineer')}
        ${renderTeamMembers(interns, 'Intern')}
      </div>
    </body>
    </html>`
  }

module.exports = generateHTML;