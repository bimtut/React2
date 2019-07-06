import React, {Component} from 'react';
import Greeting from './componentGreeting';

const trainerName = ['Tama', 'telo'];

class Profile extends Component {
  render () {
    return (
      <div>
        <Greeting name={trainerName} />
      </div>
    );
  }
}

export default Profile;
