const normalizedPath = require('path').join(__dirname, 'task');

require('fs').readdirSync(normalizedPath).forEach((file) => {
  require(`./task/${file}`);
});
