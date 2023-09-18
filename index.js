const inquirer = require('inquirer');
const fs = require('fs');

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);

  createLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
}

function createLogo(text, textColor, shape, shapeColor) {
  const width = 300;
  const height = 200;

  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${shapeColor}" />
      <text x="${width / 2}" y="${height / 2}" text-anchor="middle" dominant-baseline="middle" font-size="20" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

main();
