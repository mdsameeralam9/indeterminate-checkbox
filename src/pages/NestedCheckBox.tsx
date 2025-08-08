import { Fragment, useState } from 'react';
import type { NestedCheckBoxData } from '../data/types';
import { isArrayAndArrayHasLength } from '../util';
import CheckBox from '../components/CheckBox';

interface NestedCheckBoxProps {
    data: NestedCheckBoxData[]
}

type checboxState = Record<string, boolean>

const NestedCheckBox: React.FC<NestedCheckBoxProps> = ({ data }) => {

    const renderTree = (dataTree: NestedCheckBoxData) => {
        return (
            <div className='renderTreeWrap'>
                {dataTree?.map(item => {
                    const { id = "", name = "", children = [], status = false } = item;

                    return (
                        <div className="itemWrap" key={id}>
                            <CheckBox label={name} status={status} id={id}/>
                            {isArrayAndArrayHasLength(children) &&
                                <div className="itemChildrenWrap" style={{paddingLeft: "1rem"}}>
                                    {renderTree(children)}
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='nestedCheckBoxComponent'>{renderTree(data)}</div>
    )
}

export default NestedCheckBox