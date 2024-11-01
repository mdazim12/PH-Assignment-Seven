import FooterImages from '../../assets/logo-footer.png';
import Newslatter from '../Newslatter/Newslatter'; 

const Footer = () => {
    return (
        <div className="relative bg-[#06091A] pt-52">
           
            <div className="absolute w-1/2 left-1/4 -top-20">
                <Newslatter />
            </div>

            <img className="text-center mx-auto my-10" src={FooterImages} alt="Footer Logo" />

            <div className="grid grid-cols-3 gap-15 container mx-auto">
                <div>
                    <h3 className="text-white text-lg my-3">About Us</h3>
                    <p className="text-gray-200 font-base">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>

                <div className="mx-auto">
                    <h3 className="text-white text-lg my-3">Quick Links</h3>
                    <ul>
                        <li className="list-disc p-2"><a className="text-base text-gray-200" href="">Home</a></li>
                        <li className="list-disc p-2"><a className="text-base text-gray-200" href="">Service</a></li>
                        <li className="list-disc p-2"><a className="text-base text-gray-200" href="">About</a></li>
                        <li className="list-disc p-2"><a className="text-base text-gray-200" href="">Contact</a></li>
                    </ul>
                </div>

                <div>
                <div>
                    <h3 className="text-white text-lg my-3">Subscribe Form</h3>
                    <p className="text-gray-200 font-base">Subscribe to our newsletter for the latest updates.</p>
                    <div className="join my-4">
                        <input className="input input-bordered join-item" placeholder="Inter Your Email" />
                        <button className="btn join-item rounded-r-lg border-none text-base bg-gradient-to-r from-yellow-300 to-pink-500 ">Subscribe</button>
                    </div>
                </div>
                </div>
            </div>
            <p className="text-base mt-10 text-gray-300 text-center py-5 border-t-2 border-gray-800">
                @2024 Your Company All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
