import bannerImages from '../../assets/banner-main.png';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';


const Banner = ({ handleBalance }) => {
  return (
    <div className="rounded-lg bg-black mb-52">
      <div
        className="hero md:h-[500px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/9TMS7c5/bg-shadow.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="w-10/12">
            <img className="mx-auto text-center" src={bannerImages} alt="" />
            <h1 className="m-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mb-5 text-[rgba(255, 255, 255, 0.7)]">
              Beyond Boundaries Beyond Limits
            </p>
            <button
              onClick={() => handleBalance('100000000')}
              className="btn bg-[#E7FE29] outline outline-1 outline-white outline-offset-4 m-4"
            >
              Claim Free Credit
            </button>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleBalance: PropTypes.func.isRequired, // Updated to be a function
};

export default Banner;
