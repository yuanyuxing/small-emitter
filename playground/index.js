const { createEmitter } = require('small-emitter')

const emitter = createEmitter()

// eslint-disable-next-line no-console
emitter.on('test', () => console.log('on click'))

emitter.emit('test')
