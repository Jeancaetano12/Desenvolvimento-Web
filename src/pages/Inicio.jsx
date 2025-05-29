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


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16 pt-4 relative z-10">
       
        <div className=" p-0  flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-bold mb-4">IMAGEM DE ATUALIZAÇÕES</h2>
          <img className="h-auto max-w-xl rounded-lg shadow-2xl dark:shadow-gray-800" src="mewtwo.png" alt="image description"></img>
          <blockquote className="mt-8 text-xl italic font-semibold text-gray-900 dark:text-white">
              <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <img className="mt-8 h-auto max-w-xl rounded-lg shadow-2xl dark:shadow-gray-800" src="mewtwo.png" alt="image description"></img>
        </div>
        

      
        <div className=" p-0 flex flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-3sxl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda">Melhor Site de Host <br />
                <span className="text-[#fa70a0] texto-com-borda">ENXADA #1</span></h1>
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