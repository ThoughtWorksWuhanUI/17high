var normalizedPath = require("path").join(__dirname, "task");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
	require("./task/" + file);
});