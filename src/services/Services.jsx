import { useEffect, useState } from "react";
import Events from "../pages/Events";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])


    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h1
                    className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="text-green-500">Entertainment</span> Services
                </h1>
                <p className="text-base text-gray-700 md:text-lg">
                    Timely is event management website for Entertainment events can help organizations better plan, promote and manage more Entertainment events in many ways:
                </p>
            </div>
            <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                {
                    services.map(event => <Events
                        event={event}
                        key={event.id}
                    ></Events>)
                }
            </div>
        </div>
    );
};

export default Services;