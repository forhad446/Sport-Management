import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {

    const [data, setData] = useState([])
    const { name } = useParams()

    const services = useLoaderData();
    const servicesData = services.services;

    useEffect(() => {
        const isExit = servicesData.find(data => data.name === name)

        setData(isExit)

    }, [servicesData, name])

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src={data.image}
                        alt=""
                    />
                </div>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        {data.name}
                    </h2>
                </div>
                <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                    {data.shortDescription}
                </p>
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Learn more

                </a>
            </div>
        </div>
    );
};

export default EventDetails;