const inquirer = require('inquirer');
// const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const managers = [];
const engineers = []
const interns = []

function writeToFile(fileName, managers, engineers, interns) {
  // fs.writeFile(fileName, 
    generateHTML(managers, engineers, interns)
    // , err => {
    // if (err) throw err;

    console.log(`HTML file generated! Check out ${fileName} to see output!`)
  // });
}

function teamBuilder() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'control',
      message: 'What would you like to do?',
      choices: [
        'Add an engineer', 
        'Add an intern', 
        'Finished building team'
      ]
    }
  ])
  .then((answers) => {
    switch(answers.control) {
      case 'Add an engineer':
        newEmployee('engineer');
        break;
      case 'Add an intern':
        newEmployee('intern');
        break; 
      case 'Finished building team':
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'fileName',
              message: 'What do you want to name this file? Default is team.html',
              default: 'team.html'
            }
          ])
          .then((answers) => {
            writeToFile(answers.fileName, managers, engineers, interns)
          })
          .catch((error) => {
              console.log(error);
          });
        break;
      default:
        break;
    }
  })
  .catch((error) => {
    console.log(error)
  });
}

function newEmployee(type) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the ${type}'s name?`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the ${type}\'s id?`,
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('You need to enter an id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the ${type}\'s email address?`,
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter an email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'roleSpecific',
        message: 'What is the manager\'s office number?',
        validate: roleSpecificInput => {
          if (roleSpecificInput) {
            return true;
          } else {
            console.log('You need to enter an office number!');
            return false;
          }
        },
        when: type == 'manager'
      },
      {
        type: 'input',
        name: 'roleSpecific',
        message: 'What is the engineer\'s Github username?',
        validate: roleSpecificInput => {
          if (roleSpecificInput) {
            return true;
          } else {
            console.log('You need to enter a Github username!');
            return false;
          }
        },
        when: type == 'engineer'
      },
      {
          type: 'input',
          name: 'roleSpecific',
          message: 'What is the interns\'s school?',
          validate: roleSpecificInput => {
            if (roleSpecificInput) {
              return true;
            } else {
              console.log('You need to enter a school!');
              return false;
            }
          },
          when: type == 'intern'
        }
    ])
    .then ((answers) => {
      switch(type) {
        case 'manager':
          const manager = new Manager(answers.name, answers.id, answers.email, answers.roleSpecific);
          managers.push(manager)
          console.log(managers)
          break;
        case 'engineer':
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.roleSpecific);
          engineers.push(engineer)
          console.log(engineers)
          break;
        case 'intern':
          const intern = new Intern(answers.name, answers.id, answers.email, answers.roleSpecific);
          interns.push(intern)
          console.log(interns)
        default:
          break;
      }
      teamBuilder()
    })
    .catch((error) => {
      console.log(error)
    });
}; 

function init() {
  console.log('Please enter a manager for your team')
  newEmployee('manager')
};

init();