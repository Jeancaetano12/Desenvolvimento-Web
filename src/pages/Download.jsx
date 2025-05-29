export default function Download() {
  return (
          <div className="relative min-h-screen">
         {/* Div do background com imagem + desfoque */}
           <div className="relative bottom-full left-0 w-full h-4 bg-gradient-to-t from-transparent to-[#b3889e] pointer-events-none z-10"></div>
          <div 
        className="fixed inset-0 -z-10 bg-[url('/mewtwo.png')] bg-cover bg-center">
          {/* Overlay com desfoque (blur) */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-500/50"></div>
          </div>


           {/*Titulo*/}
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-mono leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda">Como Jogar?</h1>
          <p className="mb-8 text-lg font-mono text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white text-shadow-lg/55">Siga as instruções abaixo para verificar as depedências que você vai precisar para jogar conosco!</p>
        </div>

           {/*Primeira Instrução*/}
       <div className=" box gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 bo">
          <img className="mt-8 h-auto max-w-xl rounded-lg shadow-2xl dark:shadow-gray-800" src="Download1.png" alt="" />
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-mono text-gray-900 dark:text-white text-shadow-lg/55">
               Minecraft:
            </h2>
            <p className="mb-6 font-mono text-gray-500 md:text-lg dark:text-white text-shadow-lg/55 text-justify">
              Primeiro passo você precisa ter o Minecraft original para conseguir se conectar ao servidor e para acessar a plataforma de modificações. Você pode adquirir o <span class="underline underline-offset-3 decoration-2 decoration-emerald-400 dark:decoration-emerald-500"><a href="https://www.minecraft.net/pt-br" target="_blank" rel="noopener noreferrer" >Minecraft</a> </span> no link abaixo.</p>
          <button type="button" class="text-white bg-gradient-to-r from-emerald-700 to-emerald-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"> <a href="https://www.minecraft.net/pt-br" target="_blank" rel="noopener noreferrer">Comprar Minecraft</a> </button>        
        </div>   
      </div>

         {/*Seta Animada*/}

        <div className=" mx-auto place-items-center ">
             <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white border-2 rounded-4xl size-6 animate-bounce " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19V5m0 14-4-4m4 4 4-4"/>
            </svg>
        </div>

          {/*Segunda Instrução*/}
       <div className=" box gap-2 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="mt-8 h-auto max-w-xl rounded-lg shadow-2xl dark:shadow-gray-800" src="Download2.png" alt="" />
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-mono text-gray-900 dark:text-white text-shadow-lg/55">
              CurseForge:
            </h2>
            <p className="mb-6 font-mono text-gray-500 md:text-lg dark:text-white text-shadow-lg/55 text-justify">
            <span class="underline underline-offset-3 decoration-2 decoration-yellow-500 dark:decoration-yellow-500"><a href="https://www.curseforge.com/minecraft" target="_blank" rel="noopener noreferrer" >CurseForge</a></span>  é o aplicativo de terceiros usado para instalar e gerenciar mods e texturas em geral. No nosso caso você vai precisar dele para prosseguir para o proximo passo.
            </p>
          <button type="button" class="text-white bg-gradient-to-r from-yellow-700 to-yellow-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"> <a href="https://www.curseforge.com/minecraft" target="_blank" rel="noopener noreferrer">Baixar CurseForge</a> </button>
        </div>
      </div>  

          {/*Seta Animada*/}

        <div className=" mx-auto place-items-center ">
             <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white border-2 rounded-4xl size-6 animate-bounce " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19V5m0 14-4-4m4 4 4-4"/>
            </svg>
        </div>

          {/*Terceira Instrução*/}
      <div className="box gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="mt-8 h-auto max-w-xl rounded-lg shadow-2xl dark:shadow-gray-800 " src="Download3.png" alt="" />
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-mono text-gray-900 dark:text-white text-shadow-lg/55">
               ModPack:
            </h2>
            <p className="mb-6 font-mono text-gray-500 md:text-lg dark:text-white text-shadow-lg/55 text-justify">
              🚫Novidades em Breve🚫
            </p>
          <button type="button" class="text-white bg-gradient-to-r from-blue-800 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"> <a href="">Download</a> </button>
        </div>
      </div>

    </div>
  );
}