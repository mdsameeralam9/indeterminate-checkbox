import { expect, test } from '@rstest/core';
import type { NestedCheckBoxDataInterface } from '../data/types';

// Mock the hook logic for testing
const createMockState = (): NestedCheckBoxDataInterface[] => [
  {
    id: '1',
    name: 'Electronics',
    status: 'unchecked',
    children: [
      { id: '1.1', name: 'Laptops', status: 'unchecked' },
      { id: '1.2', name: 'Phones', status: 'unchecked' }
    ]
  }
];

const updateChild = (data: NestedCheckBoxDataInterface[], isChecked: boolean): NestedCheckBoxDataInterface[] => {
  return data.map(item => ({
    ...item,
    status: isChecked ? 'checked' : 'unchecked',
    children: item.children ? updateChild(item.children, isChecked) : undefined
  }));
};

const updateParentStatus = (parent: NestedCheckBoxDataInterface) => {
  if (!parent.children || parent.children.length === 0) {
    return parent.status;
  }

  const allChecked = parent.children.every(child => child.status === 'checked');
  const allUnchecked = parent.children.every(child => child.status === 'unchecked');

  if (allChecked) return 'checked';
  if (allUnchecked) return 'unchecked';
  return 'indeterminate';
};

test('updateChild sets all children to checked', () => {
  const data = createMockState()[0].children!;
  const result = updateChild(data, true);
  
  expect(result.every(item => item.status === 'checked')).toBe(true);
});

test('updateChild sets all children to unchecked', () => {
  const data = createMockState()[0].children!;
  const result = updateChild(data, false);
  
  expect(result.every(item => item.status === 'unchecked')).toBe(true);
});

test('updateParentStatus returns checked when all children checked', () => {
  const parent: NestedCheckBoxDataInterface = {
    id: '1',
    name: 'Parent',
    status: 'unchecked',
    children: [
      { id: '1.1', name: 'Child1', status: 'checked' },
      { id: '1.2', name: 'Child2', status: 'checked' }
    ]
  };
  
  const result = updateParentStatus(parent);
  expect(result).toBe('checked');
});

test('updateParentStatus returns unchecked when all children unchecked', () => {
  const parent: NestedCheckBoxDataInterface = {
    id: '1',
    name: 'Parent',
    status: 'checked',
    children: [
      { id: '1.1', name: 'Child1', status: 'unchecked' },
      { id: '1.2', name: 'Child2', status: 'unchecked' }
    ]
  };
  
  const result = updateParentStatus(parent);
  expect(result).toBe('unchecked');
});

test('updateParentStatus returns indeterminate when children have mixed status', () => {
  const parent: NestedCheckBoxDataInterface = {
    id: '1',
    name: 'Parent',
    status: 'unchecked',
    children: [
      { id: '1.1', name: 'Child1', status: 'checked' },
      { id: '1.2', name: 'Child2', status: 'unchecked' }
    ]
  };
  
  const result = updateParentStatus(parent);
  expect(result).toBe('indeterminate');
});