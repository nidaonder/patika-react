import { useState} from "react";

function App() {
  const [name, setName] = useState('Nida');
  const [age, setAge] = useState(28);
  const [friends, setFriends] = useState(['Ahmet', 'Mehmet']); // array state
  const [address, setAddress] = useState({ title: 'Istanbul', zipCode: 34400 })

  return (
    <div className="App">
    <h1>Merhaba {name}!</h1>
    <h2>{age}</h2>
    <button onClick={() => setName('Nidoş')}>Change name!</button>
    <button onClick={() => setAge(18)} >Change age!</button>

    <hr/>

    <h2>Friends</h2>
    {friends.map((friend, index) => (
      <div key={index}>{friend}</div>
    ))}

      <br></br>

      <button onClick={() => setFriends([...friends, 'Ayşe'])} >Add new friend</button>

      <h2>Address</h2>
      <div>
        {address.title} {address.zipCode}
      </div>

      <br></br>

      <button onClick={() => setAddress({ ...address, title: 'Samsun'})} >Change the Address</button>

    </div>
  );
}

export default App;
