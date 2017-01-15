import { ReflectKey }     from './reflect-key';
import { Provider }       from './provider';
import { Type }           from './type';
import { makeDecorator }  from './decorator';


export interface ModuleDecorator {
  (obj?: Module): any;
}

export interface Module {
  imports?: Module[];
  providers?: Provider[];
  declarations?: Type<any>[];
  exports?: Type<any>[];
}

export const Module : ModuleDecorator =
    <ModuleDecorator>makeDecorator(
      'Module',
      {
        imports: undefined,
        providers: undefined,
        declarations: undefined,
        exports: undefined,
      });
