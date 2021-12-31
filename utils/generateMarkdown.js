// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = license => {
//   license = license.map(itemLicense => "* " + itemLicense)
//   return license.join(' \n')
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, licenses, credits} = data
  return `
  # ${title}


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

  ## Credits
  ${credits}

  ## Licenses
  ${licenses}
`;
}

module.exports = generateMarkdown;
