module.exports = require('@oclif/command')

const SQUEEZEIMG = require('../src/commands/start')

SQUEEZEIMG.run()
.catch(require('@oclif/errors/handle'));