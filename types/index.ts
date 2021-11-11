
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
