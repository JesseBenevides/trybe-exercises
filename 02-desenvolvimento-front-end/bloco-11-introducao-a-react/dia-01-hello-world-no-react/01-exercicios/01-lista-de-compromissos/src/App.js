import './App.css';

const createTask = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Estudar o conteúdo de React', 'Fazer os exercícios', 'Participar das mentorias', 'Tirar as dúvidas', 'Praticar novamente'];

function App() {
  return <ul>{taskList.map((task) => createTask(task))}</ul>
}

export default App;
