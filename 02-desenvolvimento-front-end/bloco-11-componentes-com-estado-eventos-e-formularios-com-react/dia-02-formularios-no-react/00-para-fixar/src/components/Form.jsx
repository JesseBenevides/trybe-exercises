import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      tecnology: 'react',
      aboutMe: ''
    }
  }


  handleChange({ target }) {
    const {name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h2>Meu Formulário</h2>
        <form className="form">
          <label>Nome: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

          <label>Email: </label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>

          <label>Escolha sua Tecnologia: </label>
          <select name="tecnology" value={this.state.tecnology} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>

          <label>Sobre você: </label>
          <textarea name="aboutMe" value={this.state.aboutMe} onChange={this.handleChange}></textarea>

        </form>
      </div>
    )
  }
}

export default Form;