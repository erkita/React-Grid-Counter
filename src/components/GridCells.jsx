import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clicked, decrement, increment, unclicked } from '../action'

export default function GridCells(props) {
    const grid = useSelector(state => state.grid);
    const dispatch = useDispatch();
    let bgColor = grid.bgColor;

    const handleClick = () => {
        if (bgColor === "white") {
            dispatch(clicked());
            dispatch(increment());
        } else {
            dispatch(unclicked());
            dispatch(decrement());
        }
    };

    return (
        <>
             <div>
                <div onClick={() => handleClick()} className={"box bg-" + bgColor}></div>
                {/* <div className={"box bg-" + bgColor}></div> */}
            </div>
        </>
    )
}


// export default class GridCells extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bgColor: "white",
//             count: 0
//         };
//     }

//     handleClick() {
//         let bgColor = this.state.bgColor;
//         if (bgColor === "white") {
//             this.setState({
//                 bgColor: "black",
//                 count: 1
//             });
//         } else {
//             this.setState({
//                 bgColor: "white",
//                 count: 0
//             });
//         }
//         this.props.getTotal();
//         // console.log(this.state.count);
//     }

//   render() {
//         return (
//             <>
//                 {/* <ParentGrid count={this.state.count}/> */}
//                 <div>
//                     <div onClick={this.handleClick.bind(this)} className={"box bg-" + this.state.bgColor}></div>
//                 </div>
//             </> 
//         )
//     }
// }