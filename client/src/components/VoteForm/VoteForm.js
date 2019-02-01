import React, {Component} from 'react';
import './VoteForm.css';

class VoteForm extends Component {
  
 render(){
   return (
    <div id='form'>
      <button id='love'value='1'>Love</button>
      <div></div>
      <button id='hate'value='0'>Hate</button>
    </div>
   )
 }
}

export default VoteForm;