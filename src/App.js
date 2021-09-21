import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'bappi', 'Shuvo','Amor Sunny']
  return (
    <div className="App">
      <ul>{
        nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      <Person name = {nayoks[0]} nayeka="Mousumi"></Person>
      <Person name={nayoks[1]}  nayeka="Cheka"></Person>
      <Person name={nayoks[2]}  nayeka="Kopila"></Person>
      
    </div>
  );
}
 
 

function Person(props) {                       // component
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',    // ei rokom use kora jay 
    margin: '20px',
    borderRadius: '20px'
  }
  return (

    
    <div style={person} >
      <h1>Name: {props.name}</h1>
      <h4>Hero Of: {props.nayeka}</h4>
    </div>
  )
}
function Friend(props){
  console.log(props);
  return (
    <div className="person">
      <h3>Phone:{props.phone} </h3>
      <h5>Address: {props.address}</h5>
    </div>
  )
}

export default App;


/*

      <Friend phone="01700000" address="noakhali"></Friend>
      <Friend phone="01700001" address="rongpur"></Friend>
      <Friend phone="01700002" address="dhaka"></Friend>
      <Friend phone="01700003" address="Jessore"></Friend>
<p id="title">Title</p>
       <Person name = "Rubel" nayeka="Mousumi"></Person>
      <Person name="BappaRaj" nayeka="Cheka"></Person>
      <Person name="Kuber" nayeka="Kopila"></Person>
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>} */
      // properties = props
    // style={person}{
    //   backgroundColor: 'skyblue',
    //   border: '3px solid lightsalmon',         // style diye o use kora jay 
    //   margin: '20px',                          // again class diye o use kora jay
    //   borderRadius: '20px'

    // }