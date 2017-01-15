import { global } from './global';

import { ReflectKey } from './reflect-key';
import { Type } from './type';
import * as _ from './utils';

const Reflect = global.Reflect;

if (_.isNil(Reflect) || _.isNil(Reflect.getMetadata)) {
  throw 'Reflect.getMetadata not found!';
}

export class Reflector {
  static factory<T>(type: Type<T>): (args: any[]) => T {
    return (...args: any[]) => new type(...args);
  }

  static parameters(type: Type<any>): any[][] {
    return Reflect.getMetadata('design:paramtypes', type);
  }
}
