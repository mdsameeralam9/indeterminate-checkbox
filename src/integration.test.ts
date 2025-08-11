import { expect, test } from '@rstest/core';
import { nestedCheckboxData } from './data/checkboxData';
import { addInputStatus } from './util/util';
import type { NestedCheckBoxDataInterface } from './data/types';

// Integration test simulating the full checkbox workflow
const simulateCheckboxInteraction = (
  data: NestedCheckBoxDataInterface[],
  targetId: string,
  isChecked: boolean
): NestedCheckBoxDataInterface[] => {
  const updateTree = (nodes: NestedCheckBoxDataInterface[]): NestedCheckBoxDataInterface[] => {
    return nodes.map(node => {
      if (node.id === targetId) {
        const updateChildren = (children?: NestedCheckBoxDataInterface[]): NestedCheckBoxDataInterface[] | undefined => {
          if (!children) return children;
          return children.map(child => ({
            ...child,
            status: isChecked ? 'checked' : 'unchecked',
            children: updateChildren(child.children)
          }));
        };
        
        return {
          ...node,
          status: isChecked ? 'checked' : 'unchecked',
          children: updateChildren(node.children)
        };
      }
      
      if (node.children) {
        const updatedChildren = updateTree(node.children);
        const allChecked = updatedChildren.every(child => child.status === 'checked');
        const allUnchecked = updatedChildren.every(child => child.status === 'unchecked');
        
        return {
          ...node,
          children: updatedChildren,
          status: allChecked ? 'checked' : allUnchecked ? 'unchecked' : 'indeterminate'
        };
      }
      
      return node;
    });
  };
  
  return updateTree(data);
};

test('full application workflow - initialize data', () => {
  const initializedData = addInputStatus([...nestedCheckboxData]);
  
  expect(initializedData.length).toBe(nestedCheckboxData.length);
  expect(initializedData.every(item => item.status === 'unchecked')).toBe(true);
});

test('full application workflow - check parent updates children', () => {
  const initialData = addInputStatus([...nestedCheckboxData]);
  const updatedData = simulateCheckboxInteraction(initialData, '1', true);
  
  const electronics = updatedData.find(item => item.id === '1');
  expect(electronics!.status).toBe('checked');
  expect(electronics!.children!.every(child => child.status === 'checked')).toBe(true);
});

test('full application workflow - partial child selection creates indeterminate parent', () => {
  const initialData = addInputStatus([...nestedCheckboxData]);
  let updatedData = simulateCheckboxInteraction(initialData, '1.1', true);
  
  const electronics = updatedData.find(item => item.id === '1');
  expect(electronics!.status).toBe('indeterminate');
});

test('checkbox data integrity after multiple operations', () => {
  let data = addInputStatus([...nestedCheckboxData]);
  
  // Check Electronics
  data = simulateCheckboxInteraction(data, '1', true);
  
  // Uncheck Laptops
  data = simulateCheckboxInteraction(data, '1.1', false);
  
  // Check Clothing
  data = simulateCheckboxInteraction(data, '2', true);
  
  const electronics = data.find(item => item.id === '1');
  const clothing = data.find(item => item.id === '2');
  
  expect(electronics!.status).toBe('indeterminate');
  expect(clothing!.status).toBe('checked');
});