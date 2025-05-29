import "../Styles.css";

const Footer = () => (
  <footer
    className="bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/Footer-BG.png')" }}
  >
    <div className="relative left-0 w-full h-8 bg-gradient-to-t from-transparent to-[#c48faa] pointer-events-none z-10"></div>
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="md:flex md:justify-between flex-col md:flex-row">
        <div className=" box bg-white/70 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-4 border-double p-4 w-full">
          {/* Coluna 1 */}
          <div>
            <h2 className="mb-3 text-center font-extrabold text-gray-900 dark:text-white text-lg md:text-xl lg:text-2xl">
              <span className="text-transparent font-mono bg-clip-text bg-pink-500 text-shadow-2xs">
                Tecnologias
              </span>{" "}
              🔍
            </h2>
            <ul className="text-center font-mono italic text-gray-700 dark:text-black space-y-2">
              <li>
                <a
                  href="https://flowbite.com"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flowbite
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Framework
                </a>
              </li>
              <li>
                <a
                  href="https://vite.dev"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div>
            <h2 className="mb-3 text-center font-extrabold text-gray-900 dark:text-white text-lg md:text-xl lg:text-2xl">
              <span className="text-transparent font-mono bg-clip-text bg-pink-500 text-shadow-2xs">
                Idealizadores
              </span>{" "}
              🌟
            </h2>
            <ul className="text-center font-mono italic text-gray-700 dark:text-black space-y-2">
              <li>
                <a
                  href="https://github.com/Jeancaetano12"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jean Caetano
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Alison-de-Oliveira"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alison Oliveira
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h2 className="mb-3 text-center font-extrabold text-gray-900 dark:text-white text-lg md:text-xl lg:text-2xl">
              <span className="text-transparent font-mono bg-clip-text bg-pink-500 text-shadow-2xs">
                Repositórios
              </span>{" "}
              🖥️
            </h2>
            <ul className="text-center font-mono italic text-gray-700 dark:text-black space-y-2">
              <li>
                <a
                  href="https://github.com/Jeancaetano12/Desenvolvimento-Web"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório base
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  className="hover:underline after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hospedagem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="sm:flex sm:items-center sm:justify-between text-center">
        <span className="text-sm text-gray-500 dark:text-black">
          © 2025{" "}
          <a href="https://flowbite.com" className="hover:underline">
            OharaTeam™
          </a>
          . Alguns direitos reservados 😊.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
