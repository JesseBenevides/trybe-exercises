## Exercícios 1 e 2 - Introdução a React

### 1 - Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app

  <li>⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️</li>


### 2 - Crie uma lista de tarefas simples seguindo os passos abaixo:
<li>insira a função a seguir acima do seu App : </li>

    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }
<li>agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando <strong>npm start</strong>.</li>

<li>por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente <strong>App</strong> .</li>