import React, { useState } from 'react'
import GridCells from './GridCells';

// export default function ParentGrid() {
//     let [totalCount, setTotalCount] = useState(0);

//     const countTotal = (m) => {
//         console.log("hi");
//         // if (cellRef.bgColor === "white") {
//         //     setCount(count - 1);
//         //     console.log("was white, decrement")
//         // } else {
//         //     setCount(count + 1);
//         //     console.log("was black, increment")
//         // }
//         setTotalCount(totalCount + m);
//     }

//   return (
//     <>
//       <h3 class="text-box">Count: {totalCount}</h3>
//       <section class="box-container">
//         {/* <GridCells><div onClick={countTotal}></div></GridCells> */}
//         <GridCells onClick={countTotal(GridCells.count)}/>
//         <GridCells/>
//         <GridCells/>
//         <GridCells/>
//         {/* <GridCells onClick={getColor()}/>
//         <GridCells onClick={getColor()}/>
//         <GridCells onClick={getColor()}/>
//         <GridCells onClick={getColor()}/> */}
//       </section>
//     </> 
//   )
// }

export default class ParentGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            clicked: false
        }
        this.getTotal = this.getTotal.bind(this);
    }

    getTotal() {
        const clicked = this.state.clicked;
        let currentTotal = this.state.count;
        if (clicked) {
            this.setState({
                count: currentTotal - 1,
                clicked: false
            });
        } else {
            this.setState({
                count: currentTotal + 1,
                clicked: true
            });
        }
        console.log(this.state.count);
    }

    render() {
        return (
            <>
            {/* console.log(this.props.count); */}
            <h3 className="text-box">Count: {this.state.count}</h3>
            <section className="box-container">
                {/* <GridCells onClick={this.getTotal}/>
                <GridCells onClick={this.getTotal}/>
                <GridCells onClick={this.getTotal}/>
                <GridCells onClick={this.getTotal}/> */}
                <GridCells getTotal={this.getTotal}/>
                <GridCells getTotal={this.getTotal}/>
                <GridCells getTotal={this.getTotal}/>
                <GridCells getTotal={this.getTotal}/>

            </section>
            </> 
        )
    }
}