/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/

/**
* @description Represents a type that an object is instances of.
*/
export const Type = Function;

export interface Type<T> extends Function {
  new (...args: any[]): T;
}
