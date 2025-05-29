import "../Styles.css";
import "../index.css";

export default function Inicio() {
  return (
    
    <div className="relative min-h-screen">
      {/* Div do background com imagem + desfoque */}
      <div 
        className="fixed inset-0 -z-10 bg-[url('/mewtwo.png')] bg-cover bg-center"
      >
        {/* Overlay com desfoque (blur) */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-500/50"></div>
      </div>
      
      <div className="flex flex-col p-4 mt-4">
        <video
        className="w-full h-156 object-cover rounded-lg shadow-2xl dark:shadow-gray-800" 
        src="/OharaHall.mp4"
        autoPlay
        loop
        muted
        playsInline>
        </video>
      </div>

      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-mono leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda">Um paraiso pokémon</h1>
          <p className="mb-8 text-lg font-mono text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white text-shadow-lg/55">Um mundo integrado com mecanicas do minecraft com os jogos de pokémon. Quests, NPC's, puzzles e muito mais!</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16 pt-4 relative z-10">
       
        <div className=" p-0  flex flex-col items-center justify-center text-center">
          <h2 className="mb-8 text-lg font-mono text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white text-shadow-lg/55">Automação de processos!</h2>
          <video
            className="w-164 h-64 object-cover rounded-lg shadow-2xl dark:shadow-gray-800" 
            src="/Automacao.mp4"
            autoPlay
            loop
            muted
            playsInline>
        </video>
          <blockquote className="mt-8 text-xl italic font-semibold text-gray-900 dark:text-white">
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white text-shadow-lg/55">Alêm de capturar pokémons, aqui você tem muito mais possibilidades do que fazer e onde ir!</p>
          </blockquote>
          <img className="mt-8 w-164 h-68 rounded-lg shadow-2xl dark:shadow-gray-800" src="Ciencia.png" alt="image description"></img>
        </div>
        

      
        <div className=" p-0 flex flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-3sxl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda">Tudo isso garantido com a melhor hospedagem<br /></h1>
              <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
               <a href="https://enxadahost.com" target="_blank" rel="noopener noreferrer">
                  <img className="rounded-t-lg" src="enxadahost.png" alt="" />
              </a>
        <div className="p-5" >
            <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Enxadahost – Hospedagem</h5>
                <p className=" text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">A Enxadahost oferece soluções de hospedagem web de alta performance, com planos acessíveis e recursos completos para quem quer manter um site seguro e sempre online. Com suporte técnico ágil, servidores estáveis e interface fácil de usar, somos a escolha ideal para empreendedores e empresas que buscam qualidade e simplicidade na gestão digital.</p>
        </div>
                </div>
        </div>
      </div>
      {/*Linha de Transição transparente*/}
    </div>
  );
}