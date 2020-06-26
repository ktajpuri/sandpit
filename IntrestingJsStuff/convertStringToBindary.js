/*
Given a string, convert each charachters to binary and print on soncole.
*/

import { charToBinary } from './binaryHandlers';

const printer = (transformFunction) => (item) => {
  console.log(transformFunction(item))
}

const input = 'ABC';
'ABC'.split('').forEach(printer(charToBinary));