// src/App.js
import "./App.css";
import Contacts from "./contacts.json";
import { useState } from 'react'


function App() {

//console.clear()

const styleImg = {
  width: "50px",
  height: "auto"
}

const [contactsLeft, setContactsLeft] = useState(Contacts.slice(5))
const [contacts, setContacts] = useState(Contacts.slice(0,5))


const addRandomContact = () => {
  var randomContact = contactsLeft[Math.floor(Math.random()*contactsLeft.length)];
  console.log(randomContact.name)
  setContacts([randomContact, ...contacts])
}


const sortAlphabetically = () => {
  const sortedContactsAlpha = contacts.sort((a, b) => a.name.localeCompare(b.name))
  setContacts([...sortedContactsAlpha])
}

const sortPopularity = () => {
  const sortedContactsPop = contacts.sort((a, b) => b.popularity - a.popularity)
  setContacts([...sortedContactsPop])
}

const deleteContact = (id) =>{
  const contactsNotRemoved = contacts.filter(contactEl => contactEl.id !== id);
 setContacts([...contactsNotRemoved])
}


return <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addRandomContact}>Add random Contact</button>
    <button onClick={sortAlphabetically}>Sort names alphabetically</button>
    <button onClick={sortPopularity}>Sort highest popularity</button>
    <table>
      <thead>
      <tr>
          <th>Pictures</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>WonEmmy</th>
          <th>WonOscar</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map(element => {  
        const id = element.id
        const popularity = Math.round(element.popularity * 100) / 100
        return <tr key={element.id} > 
                <td><img  style={styleImg} src={element.pictureUrl} alt="CelebrityPicture"></img></td>
                <td><p> { element.name } </p></td>
                <td><p> { popularity } </p></td>
                <td>{element.wonEmmy === true && <p>🏆</p>}</td>
                <td>{element.wonOscar === true && <p>🏆</p>}</td>
                <td><button onClick={() => deleteContact(id)}>Delete</button></td>
            </tr>
          })}
        </tbody>
    </table>
      </div>;
}
export default App;
