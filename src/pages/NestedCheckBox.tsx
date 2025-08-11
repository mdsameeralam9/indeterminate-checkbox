import type { FC, ReactNode } from 'react';
import type { NestedCheckBoxDataInterface } from '../data/types'; // Ensure this type exists and is exported in ../data/types
import { isArrayAndArrayHasLength } from '../util';
import CheckBox from '../components/CheckBox';
import useMutation from '../hooks/useMutation';

const NestedCheckBox: FC = () => {
    const { checkBoxState, updateCheckState } = useMutation();

    const updateCheckBoxState = (isChecked: boolean = false, id: string = ''): void => {
        updateCheckState(isChecked, id);
    };

    const renderTree = (dataTree: NestedCheckBoxDataInterface[]): ReactNode => (
        <div className="renderTreeWrap">
            {dataTree?.map(({ id = '', name = '', children = [], status = '' }: NestedCheckBoxDataInterface) => (
                <div className="itemWrap" key={id}>
                    <CheckBox
                        label={name}
                        id={id}
                        status={status}
                        updateCheckBoxState={(e: React.ChangeEvent<HTMLInputElement>) =>
                            updateCheckBoxState(e.target.checked, id)
                        }
                    />
                    {isArrayAndArrayHasLength(children) && (
                        <div className="itemChildrenWrap" style={{ paddingLeft: '1rem' }}>
                            {renderTree(children)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    return <div className="nestedCheckBoxComponent">{renderTree(checkBoxState)}</div>;
};

export default NestedCheckBox;
