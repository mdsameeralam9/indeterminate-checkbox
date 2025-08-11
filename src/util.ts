import type { NestedCheckBoxDataInterface } from "./data/types";

export const isArrayAndArrayHasLength = (data?: unknown[]) => {
    return Array.isArray(data) && data.length > 0;
}

export const addInputStatus = (data: NestedCheckBoxDataInterface[] | undefined): NestedCheckBoxDataInterface[] => {
    if (!isArrayAndArrayHasLength(data)) return [];
    return (data ?? []).map(item => {
        let updatedItem = { ...item, status: 'unchecked' };

        if (isArrayAndArrayHasLength(item.children)) {
            const updatedChildren = addInputStatus(item.children);
            updatedItem = { ...updatedItem, children: updatedChildren };
        }
        return updatedItem;
    });
}

export const inputStatus = {
    'checked': true,
    'unchecked': false,
    "indeterminate": 'indeterminate'
}