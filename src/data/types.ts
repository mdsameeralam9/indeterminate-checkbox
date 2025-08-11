export interface NestedCheckBoxDataInterface {
    id: string;
    name: string;
    status?:string;
    children?: NestedCheckBoxDataInterface[];
}

export type CheckboxStatus = "checked" | "unchecked" | "indeterminate";