import { useEffect, useState } from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './Allplayer.css';
import PropTypes from 'prop-types';

const Allplayer = ({ handleIsActive, isActive, handleSelectedPlayer, selectedPlayer, handleDelete }) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);

  useEffect(() => {
    fetch('Player.json')
      .then(res => res.json())
      .then(data => setAvailablePlayers(data))
      .catch(error => console.error("Error fetching players:", error));
  }, []);

  return (
    <div className="mb-52">
      <div className="flex justify-between">
        <div>
          <h3 className="text-3xl font-bold">Available Players </h3>
        </div>

        <div>
          <button
            onClick={() => handleIsActive('cart')}
            className={`btn m-2 font-bold ${isActive.cart ? 'active' : ''}`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActive('status')}
            className={`btn m-2 font-bold ${!isActive.cart ? 'active' : ''}`}
          >
            Selected <span>{selectedPlayer.length}</span>
          </button>
        </div>
      </div>

      <div>
        {isActive.cart ? (
          <div className='grid grid-cols-3'>
            {availablePlayers.map(player => (
              <Available
                key={player.id}
                availablePlayer={player}
                handleSelectedPlayer={handleSelectedPlayer}
              />
            ))}
          </div>
        ) : (
          <Selected 
            selectedPlayer={selectedPlayer}
            handleDelete={handleDelete}
            handleIsActive={handleIsActive} // Pass the function here
          />
        )}
      </div>
    </div>
  );
};

Allplayer.propTypes = {
  handleIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.shape({
    cart: PropTypes.bool.isRequired,
    status: PropTypes.string,
  }).isRequired,
  handleSelectedPlayer: PropTypes.func.isRequired,
  selectedPlayer: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Allplayer;
