import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridCells from './GridCells';

export default function ParentGrid() {
    const board = useSelector(state => state.board);
    // const grid = useSelector(state => state.grid);
  
  return (
    <>
      <h3 className="text-box">Count: {board.totalCount}</h3>
      <section className="box-container">
        <GridCells />
        <GridCells />
        <GridCells />
        <GridCells />
        {/* <GridCells bgColor={grid.bgColor}/>
        <GridCells bgColor={grid.bgColor}/> */}
      </section>
    </> 
  )
}

// export default class ParentGrid extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//             clicked: false
//         }
//         this.getTotal = this.getTotal.bind(this);
//     }

//     getTotal() {
//         const clicked = this.state.clicked;
//         let currentTotal = this.state.count;
//         if (clicked) {
//             this.setState({
//                 count: currentTotal - 1,
//                 clicked: false
//             });
//         } else {
//             this.setState({
//                 count: currentTotal + 1,
//                 clicked: true
//             });
//         }
//         console.log(this.state.count);
//     }

//     render() {
//         return (
//             <>
//             {/* console.log(this.props.count); */}
//             <h3 className="text-box">Count: {this.state.count}</h3>
//             <section className="box-container">
//                 {/* <GridCells onClick={this.getTotal}/>
//                 <GridCells onClick={this.getTotal}/>
//                 <GridCells onClick={this.getTotal}/>
//                 <GridCells onClick={this.getTotal}/> */}
//                 <GridCells getTotal={this.getTotal}/>
//                 <GridCells getTotal={this.getTotal}/>
//                 <GridCells getTotal={this.getTotal}/>
//                 <GridCells getTotal={this.getTotal}/>

//             </section>
//             </> 
//         )
//     }
// }