import { Type } from './type';

interface BaseProvider {
  provide: any;
}

export interface TypeProvider extends Type<any> {}


export interface ValueProvider extends BaseProvider { useValue: any; }

export interface ClassProvider extends BaseProvider { useClass: any; }

export type Provider = TypeProvider | ValueProvider | ClassProvider | any[];
