import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleNameOnChange = this.handleNameOnChange.bind(this);

    this.state = {
      name: '',
      email: '',
      tec: '',
      textArea: ''
    }
  }


  handleNameOnChange({ target }) {
    this.setState({ name: target.value });
  }

  render() {
    return (
      <div>
        <h2>Meu Formulário</h2>
        <form className="form">
          <label>Nome: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameOnChange}/>

          <label>Email: </label>
          <input type="email" name="email"/>

          <label>Tecnologia: </label>
          <select>
            <option selected value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>

          <label>Sobre você: </label>
          <textarea></textarea>

        </form>
      </div>
    )
  }
}

export default Form;