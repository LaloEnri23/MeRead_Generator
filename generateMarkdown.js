// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return "";
    }
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`;
  
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "None") {
    return "";
  } else {
    return "";
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `https://opensource.org/licenses/${license}`;
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return "";
  }
  return `## License
  This project is licensed under the ${license} license.`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
 
  ## Table of Contents
  * [Installation](#installation)
  * [Info](#Projects Information)
  * [contact](#contact)
  * [Contributing](#contributing)
  * [License](#license) 
  * [motivation](#motivation)
  * [email](#contact)
  ----

  ## Installation
  ${data.installation}

  ## motivation
  ${data.motivation}

  ## Projects Information
  ${data.projects}

  ## Contribution
  ${data.contribution}

  ## License
    ${renderLicenseBadge(data.license)}
  * 
  ## Contact
  ${data.email}
  
[Read Me Github link](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;