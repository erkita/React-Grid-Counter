import React, {} from 'react'
import GridCells from './GridCells';
// import '../index.css'

export default function ParentGrid() {
  return (
    <>
      <div class="text-box">Count:</div>
      <div class="box-container">
        <GridCells/>
        <GridCells/>
        <GridCells/>
        <GridCells/>
      </div>
    </> 
  )
}