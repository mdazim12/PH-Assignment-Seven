import { BsCoin } from "react-icons/bs";
import logo from '../../assets/logo.png'
import PropTypes from 'prop-types'


const Header = ({balance}) => {
    return (
        <div>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Shedule</a></li>
                            <li className=""><a> <span>{balance}</span> Coin <BsCoin /></a> </li>
                        </ul>
                    </div>
                    <a href="#" className="text-xl"><img src={logo} /></a>
                </div>
                <div className=" navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        <li className="mx-2"><a href="#">Home</a></li>
                        <li className="mx-2"><a href="#">Fixture</a></li>
                        <li className="mx-2"><a href="#">Teams</a></li>
                        <li className="mx-2"><a href="#">Shedule</a></li>
                        <li className="mx-2"><a className="border-2 border-gray-200 font-bold" href="#"> <span>{balance}</span> Coin <BsCoin /></a> </li>
                    </ul>
                </div>

            </div>


        </div>
    );
};

Header.propTypes = {
    balance: PropTypes.number,
}


export default Header;