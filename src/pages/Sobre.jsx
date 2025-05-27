export default function Sobre() {
  return (
    
    <div className="relative min-h-screen">
      {/* Div do background com imagem + desfoque */}
      <div className="relative bottom-full left-0 w-full h-4 bg-gradient-to-t from-transparent to-[#b3889e] pointer-events-none z-10"></div>
      <div 
        className="fixed inset-0 -z-10 bg-[url('/mewtwo.png')] bg-cover bg-center"
      >
        {/* Overlay com desfoque (blur) */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-500/50"></div>
      </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap pb-16 pt-4 pl-8 relative z-10">

         {/* Coluna da Esquerda */}
        <div className="p-0 flex flex-col items-center justify-center text-center">
          <img class="h-112 max-w-3xl rounded-lg shadow-2xl dark:shadow-gray-800 mb-8" src="ohara-sobre.png" alt="image description"></img>

        <figure class="max-w-screen-md mx-auto text-center">
            <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>

          <blockquote>
                  <p class="text-4xl italic font-medium text-gray-900 dark:text-white">"No nosso servidor, você vai encontrar cidades, ginásios, e quests para interagir nesse gigantesco mundo que construimos bloco a bloco, dedicamos muitos esforços para trazer a essência dos jogos para o mundo quadrado, baseado no jogo Fire-RED da franquia pokémon, adaptamos seus visuais para algo mais quadrado e com um toque a mais de personalidade, envolto de uma história própria e acontecimentos distintos, esperamos trazer uma experiência de aventuras e batalhas nesse novo mundo!"</p>
          </blockquote>

             <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <img class="w-26 h-26 rounded-full" src="/squirtle-icon.png" alt="profile picture"/>

              <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-white dark:divide-white">

                  <cite class="pe-3 text-3xl font-mono text-gray-900 dark:text-white">Jean Caetano</cite>
                  <cite class="ps-3 text-sm font-mono text-gray-500 dark:text-white">Roteirista</cite>

              </div>
            </figcaption>
        </figure>
          
        </div>

      {/* Coluna da Direita */}
    <div className="p-0 flex flex-col items-center justify-center text-center">
      <section class=" ">
            <div class="py-2 px-2 mx-auto max-w-screen-sm lg:py-16 lg:px-6 ">
              <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h1 class="text-3sxl font-mono italic   leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda">NOSSA EQUIPE</h1>
              </div> 

         {/* Primeiro Banner */}

      <div class="grid gap-2 mb-6 lg:mb-16 md:grid-cols-1">
          
          <div class="items-center rounded-lg border-gray-500 shadow-2xl sm:flex">
                <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/gengar-icon.png" alt="Bonnie Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-3xl font-mono font-bold underline tracking-tight text-gray-900 dark:text-white text-shadow-black">
                        Alison de Oliveira
                    </h3>
                        <p class="mt-3 mb-4 font-mono font-bold text-gray-500 dark:text-white ">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                </div>
          </div> 

          {/* Segundo Banner */}

          <div class="items-center rounded-lg border-gray-500 shadow-2xl sm:flex">
                <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/squirtle-icon.png" alt="Jese Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-3xl font-mono font-bold tracking-tight underline text-gray-900 dark:text-white text-shadow-black">
                        Jean Caetano
                    </h3>
                        <p class="mt-3 mb-4 font-mono font-bold text-gray-500 dark:text-white">Jese drives the technical strategy of the flowbite platform and brand.</p>
              </div>
          </div>

          {/* Terceiro Banner */}

          <div class="items-center rounded-lg border-gray-500 shadow-2xl sm:flex">
                <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="eevee-icon.png" alt="Michael Avatar"/>
                </a>
              <div class="p-5">
                    <h3 class="text-3xl font-mono font-bold tracking-tight underline text-gray-900 dark:text-white text-shadow-black">
                       Livia Mel Machado
                    </h3>
                        <p class="mt-3 mb-4 font-mono font-bold text-gray-500 dark:text-white">Michael drives the technical strategy of the flowbite platform and brand.</p>
              </div>
          </div> 

            {/* Quarto Banner */}

            <div class="items-center rounded-lg border-gray-500 shadow-2xl sm:flex">
                  <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="pikachu-icon.png" alt="Sofia Avatar"/>
                  </a>
               <div class="p-5">
                    <h3 class="text-3xl font-mono font-bold tracking-tight underline text-gray-900 dark:text-white text-shadow-black">
                       Jefferson Rodrigues
                    </h3>
                        <p class="mt-3 mb-4 font-mono font-bold text-gray-500 dark:text-white">Lana drives the technical strategy of the flowbite platform and brand.</p>
                  
                   </div>
               </div>  
            </div>  
        </div>
      </section>
  </div>
      </div>
      {/*Linha de Transição transparente*/}
    </div>
  );
}
