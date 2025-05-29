export default function Comunidade() {
  return (
    
    <div className="relative min-h-screen">
      {/* Div do background com imagem + desfoque */}
      <div 
        className="fixed inset-0 -z-10 bg-[url('/mewtwo.png')] bg-cover bg-center"
      >
        {/* Overlay com desfoque (blur) */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-500/50"></div>
      </div>
      
         <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex justify-center items-center">
          <img src="Ohara-Comunidade.png" alt="" className=" mx-auto" />
         </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap pb-16 pt-4 pl-8 relative z-10">

         {/* Coluna da Esquerda */}
        <div className="p-0 flex flex-col items-center justify-center text-center">

              <figure className="max-w-screen-md mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>

          <blockquote>
                  <p className="text-4xl italic font-medium text-gray-900 dark:text-white text-shadow-lg/55 ">O Ohara é uma comunidade virtual feita para quem ama games e também tem sede de conhecimento. Aqui, unimos diversão e aprendizado em um ambiente acolhedor, dinâmico e cheio de possibilidades.</p>
          </blockquote>

             <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <img className="w-26 h-26 rounded-full" src="/gengar-icon.png" alt="profile picture"/>

              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-white dark:divide-white">

                  <cite className="pe-3 text-3xl font-mono text-gray-900 dark:text-white">Alison de Oliveira </cite>
                  <cite className="ps-3 text-sm font-mono text-gray-500 dark:text-white"></cite>

              </div>
            </figcaption>
        </figure>
      
        </div>

      {/* Coluna da Direita */}
       <div className="p-0 flex flex-col items-center justify-center text-center">

            <div className="p-0 flex flex-col items-center justify-center text-center">

             <p className="mb-8 text-lg font-mono text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white text-shadow-lg/55">
              Um lugar acolhedor criado para ser um ponto de interação virtual para as mais diversas atividades,jogar a estudar</p>
              <button type="button" class="text-white bg-gradient-to-r from-purple-700 to-blue-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-8"> <a href="https://discord.gg/8Gn9QW7P9t" target="_blank" rel="noopener noreferrer">Discord</a> </button>
             <img className="h-112 max-w-3xl rounded-lg shadow-2xl dark:shadow-gray-800 mb-8" src="Discord.png" alt="image description"></img>
              
        </div>

        
          <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex justify-center items-center">
            
         </div>



      </div>

      

  </div>

          <div className="flex justify-center mt-12 mb-12">
            <p className="p-final text-4xl italic font-mono text-gray-900 dark:text-white text-shadow-lg/55 ">VEM JOGAR COM A GENTE!!</p>
          </div>
   
    </div>
  );
}