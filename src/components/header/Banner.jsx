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

                        Entertainment event management involves the planning, coordination, and execution of various entertainment-related events and activities. These events are designed to provide enjoyment, leisure, and cultural experiences to attendees. Entertainment event managers work behind the scenes to create memorable moments for their audiences.
                    </p>
                    <div className="flex justify-center mt-5">
                        <Link to="/services">
                            <button className="bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white">Our Services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;