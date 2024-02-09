import './App.css';
import User from './components/User'

function App(){
  return (
    <>
      <User 
      name='Nida' 
      surname='Onder Diril' 
      age={28} 
      // isLoggedIn = {true}
      friends={['Ayse', 'Fatma', 'Mehmet']}
      address={
        {
          title: 'Atasehir/Istanbul',
          zip: 347555
        }
      } />
      
    </>
  )
};

export default App;