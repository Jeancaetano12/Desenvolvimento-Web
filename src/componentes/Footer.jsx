import "../Styles.css"

const Footer = () => (
<footer className=" bg-gradient-to-b to-white from-pink-300">
    <div className="relative top-full left-0 w-full h-8 bg-gradient-to-t from-transparent to-[#c48faa] pointer-events-none z-10"></div>
    <div className="mx-auto max-w-screen-x1 p-6" >
        <div className="md:flex md:justify-between">
            <div className="ml-16 mt-2 mb-6 md:mb-0" >
                    <img src="OharaDiscordLogo.jpg" className="h-42 rounded-xl outline-1 md:outline-purple-500 shadow-2xl" alt="Ohara Logo" />
            </div>
            <div className="bg-gradient-to-t to-[#fdb9dc] rounded-2xl grid grid-cols-2 gap-16 sm:gap-16 sm:grid-cols-3 border-4 border-double mb-2">
                <div>
                    <h2 className="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span className="text-transparent font-mono  bg-clip-text bg-purple-800 text-shadow-lg ">Tecnologias</span>🔍</h2>
                    <ul className="text-center font-mono italic max-w-md space-y-1 dark:text-black list-inside[ ]">
                        <li className="mb-4">
                            <a href="https://flowbite.com" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Flowbite</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://tailwindcss.com/" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://react.dev" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">React Framework</a>
                        </li>
                        <li>
                            <a href="https://vite.dev" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Vite</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span className="text-transparent font-mono  bg-clip-text bg-purple-800 text-shadow-lg">Idealizadores</span>🌟</h2>
                    <ul className="text-center max-w-md space-y-1 font-mono italic text-gray-500 list-inside dark:text-black">
                        <li className="mb-4">
                            <a href="https://github.com/Jeancaetano12" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Jean Caetano</a>
                        </li>
                        <li>
                            <a href="https://github.com/Alison-de-Oliveira" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Alison Oliveira</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span className="text-transparent font-mono bg-clip-text bg-purple-800 text-shadow-lg">Repósitorios</span>🖥️</h2>
                    <ul className="text-center max-w-md space-y-1 font-mono italic text-gray-500 list-inside  dark:text-black ">
                        <li className="mb-4">
                            <a href="https://github.com/Jeancaetano12/Desenvolvimento-Web" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Repositório base</a> 
                        </li>
                        <li>
                            <a href="https://vercel.com" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Hospedagem</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-black">© 2025 <a href="https://flowbite.com" className="hover:underline">OharaTeam™</a>. Alguns direitos reservados 😊.
            </span>
        </div>
    </div>
</footer>
);

export default Footer;
