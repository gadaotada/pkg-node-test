const os = require('os');

const osCheck = os.hostname()
const realHost = "DESKTOP-GU5MJKD";

function shouldRun () {
    if (osCheck === realHost) {
        return true;
    } else {
        return false
    }
};

module.exports = {
    shouldRun
};