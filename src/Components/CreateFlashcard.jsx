import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';

const CreateFlashcard = () => {
  const [front, setFront] = useState('');
  const [definition, setDefinition] = useState('');
  const [allCards, setAllCards] = useState([]);

  const [changeFront, setChangeFront] = useState('');
  const [newDef, setNewDef] = useState('');

  const [deleteFront, setDeleteFront] = useState('');

  const firstLoad = () => {
    fetch('http://localhost:3000/api/')
      .then(res => res.json())
      .then((data) => {
        setAllCards(data);
      })
  }

  const saveCard = () => {
    if (front !== '' && definition !== '') {
      fetch('http://localhost:3000/api/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        front: front,
        definition: definition
      })
    })
      .then(res => res.json())
      .then((data) => {
        setAllCards(data);
        setFront('');
        setDefinition('');
      })
    }
  }

  const updateCard = () => {
    if (changeFront !== '' && newDef !== '') {
      fetch('http://localhost:3000/api/card', {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        front: changeFront,
        definition: newDef
      })
    })
      .then(res => res.json())
      .then((data) => {
        setAllCards(data);
        setChangeFront('');
        setNewDef('');
      })
    }
  }

  const deleteCard = () => {
    if (deleteFront !== '') {
      fetch('http://localhost:3000/api/card', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        front: deleteFront,
      })
    })
      .then(res => res.json())
      .then((data) => {
        setAllCards(data);
        setDeleteFront('');
      })
    }
  }

  
  const cardsArr = [];
  for (let i = 0; i < allCards.length; i++) {
    cardsArr.push(<SingleCard info={allCards[i]}/>);
  }

  useEffect(() => {
    firstLoad();
  }, []);

  return (
    <div className='cfc'>
      <div className='title'>
        <h1>Flashbank</h1>
      </div>

      <div className='addEntry'>
        <h2>Add Words/Terms</h2>
        <input placeholder='Enter your Word/Term here...' value={front} onChange={e => setFront(e.target.value)}></input>
        <input placeholder='Translation' value={definition} onChange={e => setDefinition(e.target.value)}></input>
        <button onClick={saveCard}>Create</button>
      </div>
        

      <div className='updateEntry'>
        <h2>Update Words/Terms</h2>
        <input placeholder='Word/Term to be updated...' value={changeFront} onChange={e => setChangeFront(e.target.value)}></input>
        <input placeholder='New Translation' value={newDef} onChange={e => setNewDef(e.target.value)}></input>
        <button onClick={updateCard}>Update</button>
      </div>
        
      <div className='cardsDisplay'>{cardsArr}</div>

      <div className='deleteEntry'>
        <h2>Delete Words/Terms</h2>
        <input placeholder='Word/Term to be deleted...' value={deleteFront} onChange={e => setDeleteFront(e.target.value)}></input>
        <button onClick={deleteCard}>Delete</button>
      </div>
        
    </div>
  )
}

export default CreateFlashcard;