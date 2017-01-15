import { stringify } from './utils';

const globalRegistry = new ReflectRegistry();

export class ReflectKey {

  static get(token: Object): ReflectKey {
    return globalRegistry.get(token);
  }

  constructor(
    public token: Object,
    public id: number
  ) {}

  get displayName(): string {
    return stringify(this.token);
  }
}

class ReflectRegistry {
  private entries = new Map<Object, ReflectKey>();

  get(token: Object): ReflectKey {
    if (token instanceof ReflectKey) {
      return token
    };

    if (this.entries.has(token)) {
      return this.entries.get(token);
    }

    const newKey = new ReflectKey(token, this.count());
    this.entries.set(token, newKey);
    return newKey;
  }

  private count() {
    return this.entries.size;
  }
}
