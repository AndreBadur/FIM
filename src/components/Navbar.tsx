export default function Navbar() {
    return (
        <div className="bg-gray-700 flex items-center justify-between h-14 px-4">
            <a href="/home">
                <img src="/sample.png" alt="Logo" className="h-9 w-9" />
            </a>
            <div className="flex items-center">
                <div className="flex-1 text-center pr-4">
                    <h1 className="font-bold text-white text-sm">
                        NOME DA FAZENDA
                    </h1>
                </div>
                <img
                    src="/user-account.png"
                    alt="Usuário"
                    className="h-9 w-9"
                />
            </div>
        </div>
    )
}

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false)

//     return (
//         <>
//             {/* Navbar */}
//             <div className="bg-gray-700 flex items-center justify-between h-14 px-4 relative z-20">
//                 <div className="flex items-center">
//                     {/* Botão hamburguer */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="text-white focus:outline-none mr-4"
//                     >
//                         <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                         </svg>
//                     </button>

//                     {/* Logo */}
//                     <a href="/home">
//                         <img src="/sample.png" alt="Logo" className="h-9 w-9" />
//                     </a>
//                 </div>

//                 {/* Título + ícone do usuário */}
//                 <div className="flex items-center">
//                     <div className="flex-1 text-center pr-4">
//                         <h1 className="font-bold text-white text-sm">
//                             NOME DA FAZENDA
//                         </h1>
//                     </div>
//                     <img
//                         src="/user-account.png"
//                         alt="Usuário"
//                         className="h-9 w-9"
//                     />
//                 </div>
//             </div>

//             {/* Menu lateral (sidebar) */}
//             {menuOpen && (
//                 <div className="fixed top-0 left-0 h-full z-10">
//                     <Menu />
//                 </div>
//             )}
//         </>
//     )
// }
