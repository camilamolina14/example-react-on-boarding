import React from 'react';

class COMP_NAME extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.UpdateName = this.UpdateName.bind(this);
    this.testclick = this.testclick.bind(this);
  }

  UpdateName(event) {
    this.setState({name: event.target.value});
  }
  
  testclick(event) {
    alert("El nombre digitado es: "+ this.state.name);
  }
  
  componentDidMount() {  
    console.log('Método componentDidMount');
  }   
 
  shouldComponentUpdate() {  
    console.log('Método shouldComponentUpdate');
    return true;
  }  

  componentDidUpdate() {  
    console.log('Método componentDidUpdate')  
  }  
  componentWillUnmount() {  
    console.log('Método componentWillUnmount');
  }  

  render() {
    return (
      <div>        
        Digite su nombre: <input type="text" value={this.state.name} onChange={this.UpdateName} /><br/>        
        <h2>{this.state.name}</h2>
        <input type="button" value="Presione aquí" onClick={this.testclick} />
      </div>
    );
  }
}

export default COMP_NAME;