import { expect, test } from '@rstest/core';
import { sayHi } from './ind';

test('should sayHi correctly', () => {
  expect(sayHi()).toBe('hi');
});