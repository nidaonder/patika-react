import './App.css';

const name = 'Nida';
const surname = 'Onder Diril';
const isLoggedIn = true;

function App(){
  return (
    <>
      <h1>
        {isLoggedIn ? `Benim adim ${name} soyadim ${surname}` : `Giris yapmadiniz!`}
      </h1>
    </>
  )
};

export default App;