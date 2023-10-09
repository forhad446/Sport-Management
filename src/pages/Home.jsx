import Faq from "../components/FAQ/Faq";
import Feauture from "../components/feauture/Feauture";
import Banner from "../components/header/Banner";
import Services from "../services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <hr
                className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-75 dark:opacity-100" />
            <Faq></Faq>
            <hr
                className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-75 dark:opacity-100" />
            <Feauture></Feauture>
        </div>
    );
};

export default Home;