import React, {} from 'react'
import ParentGrid from './components/ParentGrid';
import './index.css'

// function App() {
//   return (
//     <>
//       <div>
//         <ParentGrid />
//       </div>
//     </> 
//   )
// }

// export default App;

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ParentGrid />
            </div>
        );
    }
}