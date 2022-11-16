export type EmitterFucn = (...args: any[]) => any

export interface EmitterItemOption {
  once?: boolean
  ctx?: any
  fn: EmitterFucn
}

export interface EmitterOption {
  /**
   * subscription some thing
   * @param name
   * @param fn
   * @param ctx
   */
  on(name: string, fn: EmitterFucn, ctx: any): void

  /**
   * subscription thing but only execute one time
   * @param name
   * @param fn
   * @param ctx
   */
  once(name: string, fn: EmitterFucn, ctx: any): void

  /**
   * execute subscription thing yet
   * @param name
   */
  emit(name: string): void

  /**
   * unsubscribe thing yet
   * @param name
   * @param fn
   * @param ctx
   */
  off(name: string, fn: EmitterFucn, ctx: any): void
}

class Emitter {
  private _events = new Map<string, EmitterItemOption[]>()

  on(name: string, callFn: EmitterFucn, once?: boolean, ctx?: any) {
    const events = this._events || []
    once = once || false

    if (!events.get(name))
      events.set(name, [{ fn: callFn, ctx, once }])

    else
      events.get(name)!.push({ fn: callFn, ctx, once })
  }

  once(name: string, callFn: EmitterFucn, ctx?: any) {
    this.on(name, callFn, true, ctx)
  }

  emit(name: string, ...args: any[]) {
    const events = this._events || []
    const evts = events.get(name)

    if (!evts)
      throw new Error(`you do not subscribe ${name} thing`)

    evts.forEach((v) => {
      v.fn.apply(v.ctx, args)
    })

    // 过滤只执行一次的
    events.set(name, evts.filter(i => !i.once))
  }

  off(name: string, callFn: EmitterFucn) {
    const events = this._events
    const evts = events.get(name)
    const liveEvent = []

    if (!evts)
      throw new Error(`no remove ${name} thing`)

    events.set(name, evts.filter((v) => {
      if (v.fn !== callFn)
        liveEvent.push(v)
      return v.fn !== callFn
    }))

    if (!liveEvent.length)
      this._events.delete(name)
  }
}

const createEmitter = () => new Emitter()

export { createEmitter }
