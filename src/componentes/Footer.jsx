import "../Styles.css"

const Footer = () => (
<footer className="rodape pb-4">
    <div className="relative top-full left-0 w-full h-8 bg-gradient-to-t from-transparent to-[#b3889e] pointer-events-none z-10"></div>
    <div className="mx-auto max-w-screen-x1 p-6 ">
        <div className="md:flex md:justify-between">
            <div className="ml-16 mt-2 mb-6 md:mb-0">
                    <img src="OharaDiscordLogo.jpg" className="h-42 rounded-xl outline-2 md:outline-purple-600" alt="Ohara Logo" />
            </div>
            <div className="gridInfos grid grid-cols-2 gap-16 sm:gap-16 sm:grid-cols-3 outline-2 outline-offset-2 outline-white">
                <div>
                    <h2 className="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-400">Tecnologias</span>🔍</h2>
                    <ul className="text-center max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
                    <h2 className="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-400">Idealizadores</span>🌟</h2>
                    <ul className="text-center max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://github.com/Jeancaetano12" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Jean Caetano</a>
                        </li>
                        <li>
                            <a href="https://github.com/Alison-de-Oliveira" className="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Alison Oliveira</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-400">Repósitorios</span>🖥️</h2>
                    <ul className="text-center max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">OharaTeam™</a>. Alguns direitos reservados 😊.
            </span>
        </div>
    </div>
</footer>
);

export default Footer;
