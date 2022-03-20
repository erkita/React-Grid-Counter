import React from 'react';
import { useDispatch } from 'react-redux';
import { click } from '../action'

export default function GridCells(props) {
    let bgColor = "white";
    let count = props.count;

    if (count === 1) {
        bgColor = "black";
    } else {
        bgColor = "white";
    }

    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(click(count, props.x, props.y));
    };

    return (
        <>
             <div>
                <div onClick={() => handleClick()} className={"box bg-" + bgColor}></div>
            </div>
        </>
    )
}