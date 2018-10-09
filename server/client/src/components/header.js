import React, { Component } from 'react';

class Header extends Component {
  
  render() {
    return (
        <div className="container">
            <select>
                <option>Select a breed</option>
                <option value="Beagle">Beagle</option>
                <option value="Boxer">Boxer</option>
                <option value="Bulldog">Bulldog</option>
                <option value="Corgi">Corgi</option>
                <option value="Dachshund">Dachshund</option>
                <option value="German-Shepherd">German Shepherd</option>
                <option value="Golden-Retriver">Golden Retriever</option>
                <option value="Husky">Husky</option>
                <option value="Labrador-Retriever">Labrador Retriever</option>
                <option value="Poodle">Poodle</option>
                <option value="Pug">Pug</option>
                <option value="Rottweiler">Rottweiler</option>
                <option value="Terrier">Terrier</option>
            </select>
        </div>
    );
  }
}

export default Header;