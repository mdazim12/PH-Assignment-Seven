import PropTypes from 'prop-types'
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";




const Available = ({ availablePlayer,handleSelectedPlayer }) => {
    
    const {name,picture,country,player_type,batting_type,price} = availablePlayer;

    return (
        
        <div className='grid grid-cols-3'>
            
                <div className="card bg-base-100 w-96 shadow-xl m-3">
                    <figure>
                        <img className='w-[300px] h-[300px] object-cover'
                            src={picture}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><FaUser /></span>
                            <h2 className="card-title text-2xl">{name} </h2>
                        </div>

                        <div className='flex justify-between my-2'>
                            <div className='flex items-center gap-2 text-xl'>
                                <h3><FaFlag /></h3>
                                <h3> {country}</h3>
                            </div>

                            <div>
                                <span className='border-2 px-2 py-1 rounded-lg'>{player_type}</span>
                            </div>
                        </div>

                        <div className="divider m-0"></div>
                        
                        <h3 className='text-lg font-bold '>Rating</h3>

                        <div className='flex justify-between'>
                            <h3 className='font-medium'>Bating Type:</h3>
                            <h3 className='font-medium'>{batting_type}</h3>
                        </div>
                        
                        <div className="card-actions justify-between">
                            <div className="font-medium">Price : {price}</div>
                            <div className="font-medium">
                                <button onClick={()=> handleSelectedPlayer(availablePlayer)} className='btn btn-sm hover:bg-[#e7fe29]'>Choose Player</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
    );
};

Available.propTypes = {
    availablePlayer: PropTypes.object.isRequired,
    handleSelectedPlayer: PropTypes.array.isRequired,
};



export default Available;
