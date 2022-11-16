import { describe, expect, test } from 'vitest'

import { createEmitter } from '@yyxing/small-emitter'

describe('Emitter test', () => {
  test('emitt on test', () => {
    let num = 0
    const emitter = createEmitter()
    emitter.on('test', () => { num++ }, false)

    emitter.emit('test')
    emitter.emit('test')
    emitter.emit('test')
    emitter.emit('test')

    expect(num).toBe(4)
  })

  test('emitt once test', () => {
    let num = 0
    const emitter = createEmitter()
    emitter.once('test', () => { num++ })

    emitter.emit('test')
    expect(num).toBe(1)

    emitter.emit('test')
    expect(num).toBe(1)
  })

  test('emitt off test', () => {
    let num = 0
    const emitter = createEmitter()
    const fn = () => { num++ }

    emitter.once('test', fn)

    emitter.emit('test')
    expect(num).toBe(1)

    emitter.off('test', fn)

    try {
      emitter.emit('test')
    }
    catch (error: any) {
      expect(error.message).toContain('you do not subscribe test thing')
    }

    expect(num).toBe(1)
  })
})

