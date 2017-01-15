import { ReflectKey }     from './reflect-key';
import { Provider }       from './provider';
import { makeDecorator }  from './decorator';


export interface InjectableDecorator {
  (obj?: Injectable): any;
}

export interface Injectable {
  providers?: Provider[];
}

export const Injectable : InjectableDecorator =
    <InjectableDecorator>makeDecorator('Injectable', { providers: undefined });
