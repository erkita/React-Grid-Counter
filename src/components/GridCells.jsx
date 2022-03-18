import React, { useState } from 'react';
import ParentGrid from './ParentGrid';

// export default function GridCells(props) {
//     let [bgColor, setBgColor] = useState("white");
//     let [count, setCount] = useState(0);

//     const handleClick = () => {
//         if (bgColor === "white") {
//             setBgColor("black");
//         } else {
//             setBgColor("white");
//         }
//     }

//     const countClick = () => {
//         if (bgColor === "white") {
//             setCount(-1);
//             console.log("white, decrement")
//         } else {
//             setCount(1);
//             console.log("black, increment")
//         }
//         console.log(count);
//         props.onClick();
//     }


//   return (
//     <>
//         <body>
//             <div onClick={() => { handleClick(); countClick();}} class={"box bg-" + bgColor}></div>
//         </body>
//     </>
//   )
// }


export default class GridCells extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "white",
            count: 0
        };
    }

    handleClick() {
        let bgColor = this.state.bgColor;
        if (bgColor === "white") {
            this.setState({
                bgColor: "black",
                count: 1
            });
        } else {
            this.setState({
                bgColor: "white",
                count: 0
            });
        }
        // this.props.getTotal();
        // console.log(this.state.count);
    }

  render() {
        return (
            <>
                {/* <ParentGrid count={this.state.count}/> */}
                <div>
                    <div onClick={this.handleClick.bind(this)} className={"box bg-" + this.state.bgColor}></div>
                </div>
            </> 
        )
    }
}