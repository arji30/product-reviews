import React from "react";
import { signOut } from "next-auth/react";
import { hostUrl } from "@/lib/variables";

interface NavbarProps {
    username: string | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {

    async function handleLogout() {
        await signOut({callbackUrl: hostUrl});
    }

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">ProductReviews</div>
        {username && (
            <div className="text-white flex items-center">
            <p className="px-2 py-2">{username}</p>
            <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={handleLogout}
            >
                Logout
            </button>
            </div>
        )}
        </nav>
    );
};

export default Navbar;