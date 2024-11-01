import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline } from "react-icons/md";

const Selected = ({ selectedPlayer, handleDelete, handleIsActive }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Selected Player (<span>{selectedPlayer.length}</span>/6) </h2>

      <div className=''>
        {selectedPlayer.map(singlePlayer => (
          <div className='flex items-center justify-between p-3 border-2 border-gray-200 my-4 rounded-md' key={singlePlayer.id}>
            <div className='flex items-center gap-4'>
              <div className='w-14'>
                <img className='w-full rounded-lg object-cover' src={singlePlayer.picture} alt={singlePlayer.name} />
              </div>

              <div>
                <h3 className='text-lg font-bold text-black'>{singlePlayer.name}</h3>
                <h4>{singlePlayer.batting_type}</h4>
              </div>
            </div>

            <div>
              <button onClick={() => handleDelete(singlePlayer.id)} className='text-2xl text-red-500'>
                <MdOutlineDeleteOutline />
              </button>
            </div>
          </div>
        ))}
      </div>

    
      {selectedPlayer.length < 6 && (
        <button onClick={() => handleIsActive('cart')} className='btn bg-[#e7fe29] mt-4'>
          Add More Players
        </button>
      )}
    </div>
  );
};

Selected.propTypes = {
  selectedPlayer: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleIsActive: PropTypes.func.isRequired, // New prop type
};

export default Selected;
