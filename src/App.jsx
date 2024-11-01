import { useState } from 'react';
import './App.css';
import Allplayer from './components/Allplayer/Allplayer';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'active',
  });

  const [balance, setBalance] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleBalance = (amount) => {
    const mainBalance = Number(amount) + Number(balance);
    setBalance(mainBalance);
    alert('New Balance Added');
  };

  const handleSelectedPlayer = (ChoosePlayer) => {
    if (selectedPlayer.length >= 6) {
      alert('You cannot add more than 6 players');
      return;
    }

    if (selectedPlayer.some(player => player.id === ChoosePlayer.id)) {
      alert('You cannot select the same player twice');
      return;
    }

    const newBalance = balance - ChoosePlayer.price;
    if (newBalance < 0) {
      alert('Insufficient balance to select this player');
      return;
    }

    setSelectedPlayer([...selectedPlayer, ChoosePlayer]);
    setBalance(newBalance);
    alert(`${ChoosePlayer.name} has been added to your team! New balance: ${newBalance}`);
  };

  const handleDelete = (id) => {
    const remainingPlayers = selectedPlayer.filter(player => player.id !== id);
    const deletedPlayer = selectedPlayer.find(player => player.id === id);

    if (deletedPlayer) {
      setBalance(prevBalance => prevBalance + deletedPlayer.price);
    }
    setSelectedPlayer(remainingPlayers);
    alert(`${deletedPlayer.name} has been removed from your team!`);
  };

  const handleIsActive = (status) => {
    setIsActive({
      cart: status === 'cart',
      status: 'active',
    });
  };

  return (
    <>
      <div className='container mx-auto'>
        <Header balance={balance} />
        <Banner handleBalance={handleBalance} />
        
        <Allplayer
          handleIsActive={handleIsActive}
          isActive={isActive}
          handleSelectedPlayer={handleSelectedPlayer}
          selectedPlayer={selectedPlayer}
          handleDelete={handleDelete}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
