import { useState } from "react";
import { nestedCheckboxData } from "../data/checkboxData";
import type { NestedCheckBoxDataInterface } from "../data/types";
import { addInputStatus } from "../util";
import type { CheckboxStatus } from "../data/types";

// Update all children recursively
const updateChild = (
  data: NestedCheckBoxDataInterface[] = [],
  isChecked: boolean
): NestedCheckBoxDataInterface[] => {
  return data.map((item) => {
    const updatedItem: NestedCheckBoxDataInterface = {
      ...item,
      status: isChecked ? "checked" : "unchecked",
      children: item.children
        ? updateChild(item.children, isChecked)
        : undefined,
    };
    return updatedItem;
  });
};

// Update parent status based on children
const updateParentStatus = (
  parent: NestedCheckBoxDataInterface | null
): CheckboxStatus | undefined => {
  if (!parent || !parent.children || parent.children.length === 0){
    return parent?.status as CheckboxStatus | undefined;
  }

  const allChecked = parent.children.every(
    (child) => child.status === "checked"
  );
  const allUnchecked = parent.children.every(
    (child) => child.status === "unchecked"
  );

  if (allChecked) return "checked";
  if (allUnchecked) return "unchecked";
  return "indeterminate";
};

const useMutation = () => {
  const [checkBoxState, setCheckBoxState] = useState<
    NestedCheckBoxDataInterface[]
  >(addInputStatus([...nestedCheckboxData]));

  const updateCheckState = (isChecked: boolean, id: string) => {
    const updateTree = (
      nodes: NestedCheckBoxDataInterface[],
      selectedId: string,
      isTrue: boolean
    ): NestedCheckBoxDataInterface[] => {
      return nodes.map((node) => {
        if (node.id === selectedId) {
          // Update this node and all its children
          const updatedNode: NestedCheckBoxDataInterface = {
            ...node,
            status: isTrue ? "checked" : "unchecked",
            children: node.children
              ? updateChild(node.children, isTrue)
              : undefined,
          };
          return updatedNode;
        }

        // Recursively update children
        let updatedChildren = node.children
          ? updateTree(node.children, selectedId, isTrue)
          : undefined;

        // After updating children, update this node's status
        const updatedStatus = updatedChildren
          ? updateParentStatus({ ...node, children: updatedChildren })
          : node.status;

        return {
          ...node,
          children: updatedChildren,
          status: updatedStatus,
        };
      });
    };

    setCheckBoxState((prev) => updateTree(prev, id, isChecked));
  };

  return { checkBoxState, updateCheckState };
};

export default useMutation;
