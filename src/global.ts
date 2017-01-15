declare var global: any;

export interface Global {
  Reflect: any;
}

const _global: Global = global;

export { _global as global };
