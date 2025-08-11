import { expect, test } from '@rstest/core';
import { isArrayAndArrayHasLength, addInputStatus } from './util';
import type { NestedCheckBoxDataInterface } from '../data/types';

test('isArrayAndArrayHasLength returns false for undefined', () => {
  expect(isArrayAndArrayHasLength(undefined)).toBe(false);
});

test('isArrayAndArrayHasLength returns false for empty array', () => {
  expect(isArrayAndArrayHasLength([])).toBe(false);
});

test('isArrayAndArrayHasLength returns true for non-empty array', () => {
  expect(isArrayAndArrayHasLength([1, 2, 3])).toBe(true);
});

test('addInputStatus returns empty array for undefined input', () => {
  const result = addInputStatus(undefined);
  expect(result).toEqual([]);
});

test('addInputStatus adds unchecked status to flat items', () => {
  const input: NestedCheckBoxDataInterface[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' }
  ];
  
  const result = addInputStatus(input);
  
  expect(result).toEqual([
    { id: '1', name: 'Item 1', status: 'unchecked' },
    { id: '2', name: 'Item 2', status: 'unchecked' }
  ]);
});

test('addInputStatus adds status to nested items', () => {
  const input: NestedCheckBoxDataInterface[] = [
    {
      id: '1',
      name: 'Parent',
      children: [
        { id: '1.1', name: 'Child 1' },
        { id: '1.2', name: 'Child 2' }
      ]
    }
  ];
  
  const result = addInputStatus(input);
  
  expect(result[0].status).toBe('unchecked');
  expect(result[0].children![0].status).toBe('unchecked');
  expect(result[0].children![1].status).toBe('unchecked');
});