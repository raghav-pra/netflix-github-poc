var TimeoutScheduler = require("./TimeoutScheduler");

// Retained for backwards compatibility
function ASAPScheduler() {
    return TimeoutScheduler.call(this, 1);
}

module.exports = ASAPScheduler;
