

const Newslatter = () => {
    return (
        <div className="bg-white p-5 outline outline-3 outline-white outline-offset-8 rounded-lg text-center"
        style={{
            backgroundImage: "url(https://i.ibb.co.com/9TMS7c5/bg-shadow.png)",
            backgroundSize: "cover"
        }}>
            <h3 className="text-black my-3 font-bold text-3xl">Subscribe Form </h3>
            <p className="text-gray-600 font-base">Get the latest updates and news right in your inbox!</p>
            <div className="join my-4">
                <input className="input input-bordered join-item" placeholder="Enter Your Email" />
                <button className="btn join-item rounded-r-lg border-none text-base bg-gradient-to-r from-yellow-300 to-pink-500 sm:w-50%">Subscribe</button>
            </div>
        </div>
    );
};

export default Newslatter;

