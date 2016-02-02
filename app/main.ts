// Include bootstrap and the main CSS stylesheet
require("bootstrap.min.css");
require("./stylesheets/main.css");

// Import NPM dependencies
import jquery = require("jquery");
import three = require("three");

// Import local dependencies
import threeExample = require("./scripts/threeExample");

jquery(() => {
    jquery('#container').append(threeExample(800, 600));
});
