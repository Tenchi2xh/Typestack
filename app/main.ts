// Include bootstrap and the main CSS stylesheet
require("bootstrap.min.css");
require("./stylesheets/main.css");

// Import NPM dependencies
import jquery = require("jquery");

// Import local dependencies
import greeter = require("./scripts/greeter");

jquery(() => {
    jquery('#greet').html(greeter("World"));
})
