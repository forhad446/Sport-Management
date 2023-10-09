import { Link } from "react-router-dom";

const Events = ({ event }) => {
    const { name, shortDescription, image, price, buttonLabel } = event;
    return (
        // backgroundImage: `url(${image})`, backgroundSize: 'cover',
        <>
            <div className="">

                <div className="">
                    <div
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <img
                                src={image}
                                className="object-cover w-full h-48"
                                alt=""
                            />
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        {name}
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        {shortDescription.slice(0,100)}
                                    </p>
                                    <div className="flex justify-between mt-4">
                                        <Link to={`/${name}`}>
                                            <button className="bg-green-600 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white">
                                                {buttonLabel}
                                            </button></Link>
                                        <p>
                                            {price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Events;