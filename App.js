import React, {Component} from 'react';
import LoginPage from './loginPage';
import Navigation from './Navigation';
{
/**
 * 
 class App extends Component {
   render() {
     return <Navigation />
   };
 }
 export default App;
 */
}



//instead of class user function

//aisa user karna ab se, dek login me bhi calss use kiy a tune haaa
function App(props) {
  return(
    <Navigation/>
  )
}
export default App