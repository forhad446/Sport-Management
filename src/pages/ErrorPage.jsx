import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Page Not Found</p>
                    <p className="md:text-lg lg:text-xl text-gray-600 mt-8">Sorry, the page you are looking for could not be found.</p>
                    <Link to="/" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150" title="Return Home">
                        <span>Return Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;