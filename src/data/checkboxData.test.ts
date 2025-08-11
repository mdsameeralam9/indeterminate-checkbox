import { expect, test } from '@rstest/core';
import { nestedCheckboxData } from './checkboxData';

test('nestedCheckboxData has correct structure', () => {
  expect(Array.isArray(nestedCheckboxData)).toBe(true);
  expect(nestedCheckboxData.length).toBeGreaterThan(0);
});

test('each top-level item has required properties', () => {
  nestedCheckboxData.forEach(item => {
    expect(typeof item.id).toBe('string');
    expect(typeof item.name).toBe('string');
    expect(item.id.length).toBeGreaterThan(0);
    expect(item.name.length).toBeGreaterThan(0);
  });
});

test('nested items have proper id hierarchy', () => {
  const electronics = nestedCheckboxData.find(item => item.name === 'Electronics');
  expect(electronics).toBeDefined();
  expect(electronics!.id).toBe('1');
  
  const laptops = electronics!.children?.find(item => item.name === 'Laptops');
  expect(laptops).toBeDefined();
  expect(laptops!.id).toBe('1.1');
  
  const gaming = laptops!.children?.find(item => item.name === 'Gaming Laptops');
  expect(gaming).toBeDefined();
  expect(gaming!.id).toBe('1.1.1');
});

test('all categories have children', () => {
  nestedCheckboxData.forEach(category => {
    expect(Array.isArray(category.children)).toBe(true);
    expect(category.children!.length).toBeGreaterThan(0);
  });
});