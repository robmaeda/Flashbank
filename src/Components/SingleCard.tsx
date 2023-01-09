import React, { useState } from 'react';

interface Info {
  info: {
    card_id: number;
    front: string;
    definition: string;
  }
}

const SingleCard = (info: Info) => {
  const frontOfCard = info.info.front;
  const definitionOfCard = info.info.definition;

  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped((flipped) => !flipped);
  }

  return (
    <div className={`singleCard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className='front'>
        <h2 className='text'>Word/Term: {frontOfCard}</h2>
      </div>
      <div className='back'>
        <h2 className='text'>Translation: {definitionOfCard}</h2>
      </div>

    </div>
  );
}

export default SingleCard;