export default function ComoJogar() {
  
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

      <section className="">
        <figure className="max-w-screen-md mx-auto text-center">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"No nosso mundo tudo foi pensado para ser jogado no estilo Role-Play, ou seja, tente ser você mesmo e interaja com o mundo com bom senso."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img className="w-26 h-26 rounded-full" src="squirtle-icon.png" alt="profile picture"></img>
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-mono text-gray-900 dark:text-white">Jean Caetano</cite>
            <cite className="ps-3 font-mono text-sm text-gray-500 dark:text-white">Roteirista</cite>
          </div>
          </figcaption>
        </figure>
      </section>

      <div className="flex flex-col p-4 mt-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-mono leading-none text-gray-900 md:text-2xl lg:text-5xl dark:text-white texto-com-borda texto-com-borda">Por onde começar?</h1>
        </div>

        <div className=" ">

          
        </div>


      </div>
      
















    </div>
  );
}