// Figure out what environment is running and then return the appropriate credentials

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
