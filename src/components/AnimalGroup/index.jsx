import React from 'react';
import { useParams } from 'react-router-dom';
import { animalArray } from '../../data/animals'; // Assuming this is where your animal data is

const AnimalGroup = () => {
  const { groupName } = useParams(); // Get the group name from the URL

  // Filter the animals based on the group
  const animalsInGroup = animalArray.filter(animal => animal.group.toLowerCase() === groupName.toLowerCase());

  return (
    <div>
      <h1>{groupName} Group</h1>
      <div>
        {animalsInGroup.length > 0 ? (
          animalsInGroup.map(animal => (
            <div key={animal.name}>
              <h2>{animal.name}</h2>
              <img src={getImageUrl(animal.image)} alt={animal.name} />
              <p>{animal.shortDescription}</p>
            </div>
          ))
        ) : (
          <p>No animals found in this group.</p>
        )}
      </div>
    </div>
  );
};

export default AnimalGroup;
