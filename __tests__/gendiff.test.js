/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../gendiff.js';
// import { Linter } from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('gendiff_plain.json', () => {
  const dataExpectedFile = fs.readFileSync(`${__dirname}/../__fixtures__/exp_plain.txt`, 'utf-8');
  const diff = genDiff('./__fixtures__/plainf1.json', './__fixtures__/plainf2.json');
  expect(diff).toEqual(dataExpectedFile);
});

test('gendiff_plain.yml', () => {
  const dataExpectedFile = fs.readFileSync(`${__dirname}/../__fixtures__/exp_plain.txt`, 'utf-8');
  const diff = genDiff('./__fixtures__/plainf1.yml', './__fixtures__/plainf2.yml');
  expect(diff).toEqual(dataExpectedFile);
});

test('gendiff_nested.json', () => {
  const dataExpectedFile = fs.readFileSync(`${__dirname}/../__fixtures__/exp_nested.txt`, 'utf-8');
  const diff = genDiff('./__fixtures__/nestedf1.json', './__fixtures__/nestedf2.json');
  expect(diff).toEqual(dataExpectedFile);
});

test('gendiff_nested.yml', () => {
  const dataExpectedFile = fs.readFileSync(`${__dirname}/../__fixtures__/exp_nested.txt`, 'utf-8');
  const diff = genDiff('./__fixtures__/nestedf1.yml', './__fixtures__/nestedf2.yml');
  expect(diff).toEqual(dataExpectedFile);
});
