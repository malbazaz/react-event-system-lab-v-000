// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {

inputPassword = () =>{
  return console.log("Entering password...")
}

render(){
  return (
<input type="password" onKeyUp={this.inputPassword} />
  )
<<<<<<< HEAD

=======
  
>>>>>>> cc9aee2d83b7defa20d0996b850264b157d10e4d
}
}
