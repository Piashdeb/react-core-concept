import logo from './logo.svg';
import './App.css';

function App() {

 const number = 5555;
 const singer = {
   name: 'Dr. Mahfuz',
   job: 'Singer'
 }
 const singer2 = {
   name: 'Eva Rahman',
   job: 'kokil konthi gaan er pakhi'
 }

 const singerStyle = {
   backgroundColor: 'red',
   color:'white'
 }


  return (
    <div className="App">
      <header className="App-header">

        <h3>Yo Yo react MAMA!!!</h3>
        <p>Happy Happy react</p>
        <div className="container">
          <h3>this is inside my container</h3>
          <h4>My nunmber is: {number}</h4>
          <p>Singer is : {singer.name + '' + singer.job}</p>
          <p style ={singerStyle}  >Real Singer: {singer2.job} </p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
