import 'reflect-metadata';
declare var global: any

const Reflect = global.Reflect;

import { Injectable } from '../src/injectable';

class Test {

}

class Test2 {

}


@Injectable({ providers: [Test, Test2] })
class Test3 {
  constructor(test: Test, test2: Test2){}
}
