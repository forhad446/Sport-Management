import { NavLink } from "react-router-dom";
import logo from './../../assets/images/logo.png'
import { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { AuthContext } from "../../authentication/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Navbar = () => {
    const [showItem, setShowItem] = useState(true);

    const { user, setUser } = useContext(AuthContext);


    const handleShowItem = () => {
        setShowItem(!showItem)
    }

    return (
        <nav className="text-xl font-bold py-3">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
                <div className="flex justify-center items-center">
                    <img className="w-[60px] h-[60px]" src={logo} alt="" />
                    <h2> <span className="italic tracking-widest font-extrabold">Entertainment</span> <br /> Event Management</h2>
                </div>
                {/* nav item for large device  */}
                <ul className=" justify-center hidden md:flex gap-6">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >Home
                        </NavLink>
                    </li>
                    {
                        user?.email ?
                            <>
                                <li>
                                    <NavLink
                                        onClick={() => {
                                            setUser(null)
                                            signOut(auth)
                                        }}
                                        to='/login'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                        }
                                    >Log Out
                                    </NavLink>
                                </li>
                                {
                                    user?.displayName &&
                                    <li>
                                        <NavLink
                                            to='/profile'
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                            }
                                        >{user?.displayName}
                                        </NavLink>
                                    </li>
                                }
                                <li>
                                    <NavLink
                                        to='/profile'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                        }
                                    >
                                        {user?.photoURL ?
                                            <img className="w-2/4 rounded-full" src={user?.photoURL} alt="" /> :
                                            < RxAvatar className="text-3xl" />}
                                    </NavLink>
                                </li>

                            </>
                            : <><li>
                                <NavLink
                                    to='/login'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                    }
                                >Login
                                </NavLink>
                            </li>
                                <li>
                                    <NavLink
                                        to='/signUp'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                        }
                                    >Sign Up
                                    </NavLink>
                                </li>
                            </>
                    }
                </ul>
                {/* nav item for small device */}
                <div className="text-3xl block md:hidden"
                    onClick={handleShowItem}>
                    {
                        showItem ?
                            <AiOutlineMenu></AiOutlineMenu> :
                            <AiOutlineClose></AiOutlineClose>
                    }
                </div>
            </div>
            {
                !showItem &&
                <div
                    className="absolute block md:hidden z-50 bg-[#000020] text-white w-2/4 h-screen text-center py-6 rounded-md delay-1000">
                    <ul className=" flex justify-center md:hidden flex-col gap-3">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                }
                            >Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                }
                            >Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/signUp'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                }
                            >Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </div>
            }

        </nav>
    );
};

export default Navbar;