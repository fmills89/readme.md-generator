// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generatebadges = BadgeArr => {
  BadgeArr = BadgeArr.map(itemBadge => {
    if (itemBadge !== "None") {
      return "![Licenses](https://img.shields.io/static/v1?label=License&message=" + itemBadge + "&color=BLUE)"
    }
  });
  return BadgeArr.join('')
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `See more details about licenses <a href='https://choosealicense.com/licenses/'>here.</a>`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {
  if (license) {
    return `This application is covered by ${license} .\n`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, licenses, contributing, tests, username, email} = data
  return `
  # ${title}

  ${generatebadges(licenses)}

  ## Description
  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributing}

  ## Licenses
  ${renderLicenseSection(licenses)}
  ${renderLicenseLink(licenses)}

  ## Tests
  ${tests}

  ## Questions
  Have questions? \n
  
  GitHub: [${username}](https://www.github.com/${username}) \n
  Email: ${email}
`;
}

module.exports = generateMarkdown;
