/**
 * test single quotes
 */
import * as fs from 'fs';

/**
 * "no-require-imports": false,
 */
import path = require('path');
const path2 = require('path');

/**
 * tests "array-type": false,
 */
type ArrType = (string | number)[];

/**
 * tests "no-bitwise": false,
 */
let foo: number = ~'1';
foo++;



/**
 * tests "no-empty-interface": false,
 */
export interface IFoo {
  bar: string;
}
export interface IBar extends IFoo { }

/**
 * tests: "interface-name": false
 */
export interface SomeInterface extends IBar { }

/**
 * tests "no-angle-bracket-type-assertion": false,
 */
const bar = <SomeInterface>{};
bar.bar = '';

/**
 * "object-literal-sort-keys": false,
 */
interface Alpha {
  a: any;
  b: any;
}

const alpha: Alpha = {
  b: null,
  a: null,
};



/** allow consecutive blank lines */


/** test "no-empty": false */
const noop = () => {};


export class MyClass {
  private _myvar: string; /** test "variable-name": false */
}

/**
 * test "no-use-before-declare": false
 */
export interface IMyClass extends MyClass {

}

/**
 * test "no-string-literal": false
 */
const myc = new MyClass();
myc['_myvar'] = '';

/**
 * tests "no-namespace": false
 */
export namespace MyNamespace {
  export const Prop: number = 1;
}

