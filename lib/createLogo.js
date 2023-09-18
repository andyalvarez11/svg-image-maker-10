const fs = require('fs');

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

module.exports = createLogo;
