import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="relative h-[calc(100vh-100px)]">
            <img
                src="https://i.ibb.co/wrxymqB/fair-540127-1920.jpg"
                className="absolute  w-full h-full"
                alt=""
            />
            <div className="relative h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
                <div className="">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl sm:leading-none text-center">
                        CELEBRATE YOUR EVENTSTHAT <br /> LASTS LONGER
                    </h2>
                    <p className="max-w-xl mt-4 text-base text-gray-400 md:text-lg text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                        quae.
                    </p>
                    <div className="flex justify-center mt-5">
                        <Link to="/services">
                            <button className="bg-green-500 px-5 py-2 rounded-lg">Our Services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;