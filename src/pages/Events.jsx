
const Events = ({ event }) => {
    const { name, shortDescription, image } = event;
    console.log(name);
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${image})`, backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 min-h-[300px] relative bg-opacity-75 bg-[#000020]">

                <div className="bg-[#797983] text-white absolute bottom-0 left-0 min-h-[100px] w-full flex flex-col justify-center">
                    <p className="max-w-xs mx-auto mb-2 ">
                        {shortDescription}
                    </p>
                    <a
                        href="/"
                        className=""
                    >
                        Read more
                    </a>
                </div>
            </div>
        </>
    );
};

export default Events;