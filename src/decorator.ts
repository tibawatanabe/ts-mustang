import { global } from './global';
import { Type }   from './type';
import * as _     from './utils';

const Reflect = global.Reflect;

interface TypeDecorator {
  <T extends Type<any>>(type: T): T;
  annotations: any[];
}

export function makeDecorator(name: string, props: {[name: string]: any}) : any {
  let metadataCtor = makeMetadataCtor(props);

  function DecoratorFactory(args: {[name: string]: any}) {

    if (this instanceof DecoratorFactory) {
      // this is called when invoked with new (i.e new `(<any>DecoratorFactory)(decoratorArgsOrType)`)
      metadataCtor.call(this, args);
      return this;
    }

    // contains args invoked in `metadataCtor`
    const newAnnotation = new (<any>DecoratorFactory)(args);

    const allAnnotations = _.isFunction(this) && _.isArray(this.annotations) ? this.annotations : [];

    allAnnotations.push(newAnnotation);

    const TypeCtor : TypeDecorator = <TypeDecorator>function TypeDecorator(type: Type<any>) {

      const annotations = Reflect.getOwnMetadata('annotations', type) || [];
      annotations.push(newAnnotation);

      console.log(annotations);

      Reflect.defineMetadata('annotations', annotations, type);

      return type;
    }

    TypeCtor.annotations = allAnnotations;

    return TypeCtor;
  }

  DecoratorFactory.prototype.toString = () => `@${name}`;

  return DecoratorFactory;
}

function makeMetadataCtor(props: {[name: string]: any}) : any {
  return function metadataCtor(args: {[name: string]: any}) {
    // assigning default values or values from decorator invocation (.ie @MyDecorator({ myProp: someValue }))
    for (let key in props) {
      this[key] = args && args[key] ? args[key] : props[key];
    }
  }
}
