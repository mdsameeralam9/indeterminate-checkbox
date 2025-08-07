import type { NestedCheckBoxData } from "./data/types";

export const isArrayAndArrayHasLength = (data?: unknown[]) => {
    return Array.isArray(data) && data.length > 0;
}

export const addInputStatus = (data: NestedCheckBoxData[] | undefined): NestedCheckBoxData[] => {
    if (!isArrayAndArrayHasLength(data)) return [];
    return (data ?? []).map(item => {
        let updatedItem = { ...item, status: Math.random() < 0.5 ? 'unchecked': 'indeterminate' };

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