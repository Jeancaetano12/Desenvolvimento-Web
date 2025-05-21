import "../Styles.css"

const Footer = () => (
<footer class="rodape p-4 sm:p-6 ">
    <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                    <img src="OharaDiscordLogo.jpg" class="mr-3 h-24 rounded-xl outline-2 md:outline-purple-600" alt="FlowBite Logo" />
            </div>
            <div class="gridInfos grid grid-cols-2 gap-16 sm:gap-16 sm:grid-cols-3 outline-2 outline-offset-2 outline-white">
                <div>
                    <h2 class="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-400">Tecnologias</span>🔍</h2>
                    <ul class="text-center max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://flowbite.com" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Flowbite</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://tailwindcss.com/" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://react.dev" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">React Framework</a>
                        </li>
                        <li>
                            <a href="https://vite.dev" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Vite</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-400">Idealizadores</span>🌟</h2>
                    <ul class="text-center max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://github.com/Jeancaetano12" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Jean Caetano</a>
                        </li>
                        <li>
                            <a href="https://github.com/Alison-de-Oliveira" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Alison Oliveira</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-400">Repósitorios</span>🖥️</h2>
                    <ul class="text-center max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://github.com/Jeancaetano12/Desenvolvimento-Web" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Repositório base</a> 
                        </li>
                        <li>
                            <a href="https://vercel.com" class="hover:underline after:content-['_↗']" target="_blank" rel="noopener noreferrer">Hospedagem</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">OharaTeam™</a>. Alguns direitos reservados 😊.
            </span>
        </div>
    </div>
</footer>
);

export default Footer;
