export default function Regras() {
  return (
    <div className="relative min-h-screen">
      {/* Div do background com imagem + desfoque */}
      
      <div 
        className="fixed inset-0 bg-scroll -z-10 bg-[url('/Regras.png')] bg-cover bg-center"
      >
        {/* Overlay com desfoque (blur) */}
        
      </div>

      <section className=" ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="text-center p-4 rounded-2xl shadow-2xl bg-red-600/15 mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-mono text-shadow-lg/55 tracking-tight font-extrabold text-gray-900 dark:text-white ">Leia com atenção ⚠️</h2>
            <p className="text-white sm:text-xl font-mono dark:text-white text-shadow-lg/55">Todas as regras listadas aqui abaixo devem ser estritamente seguidas para garantir a diversão e o funcionamento do servidor para todos!</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {/*Regra*/}
            <div className="shadow-lg/55 p-4 justify-center rounded-2xl">
              <h3 className="mb-2 text-xl text-center font-bold dark:text-white text-shadow-lg/55">Mundo 🌎</h3>
              <hr class="w-64 h-1 mx-auto bg-black border-0 rounded-sm dark:bg-black"></hr>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55"><span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">Todos</span> os vilarejos onde existe uma estação de trem são intocaveis, eles são considerados <span className="underline underline-offset-3 decoration-2 decoration-blue-600 dark:decoration-blue-600 text-shadow-lg/55">áreas seguras</span> e por isso é <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">estritamente proibido</span> destruir qualquer bloco ou eliminar algum NPC passivo num raio de <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">120 blocos</span> dessas vilas. Para construir nessas aréas somente sob aprovação dos ADMS, e com finalidade de ser de dominio público.</p>
            </div>
            {/*Regra*/}
            <div className="shadow-lg/55 p-4 rounded-2xl">
              <h3 className="mb-2 text-xl text-center font-bold dark:text-white text-shadow-lg/55">Boa-convivência.1 🕊️</h3>
              <hr class="w-64 h-1 mx-auto bg-black border-0 rounded-sm dark:bg-black"></hr>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É proibido matar propositalmente outro aventureiro dentro dos limites de uma <span className="underline underline-offset-3 decoration-2 decoration-blue-600 dark:decoration-blue-600 text-shadow-lg/55">área segura</span>.</p>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">Todas as plantações comunitárias devem ser replantadas por aquele(s) que a colheu.</p>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">estritamente proibido</span> roubar do inventario ou da base de outro aventureiro.</p>
            </div>
            {/*Regra*/}
            <div className="shadow-lg/55 p-4 rounded-2xl">
              <h3 className="mb-2 text-xl text-center font-bold dark:text-white text-shadow-lg/55">Quests & Puzzles 🎲</h3>
              <hr class="w-64 h-1 mx-auto bg-black border-0 rounded-sm dark:bg-black"></hr>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">estritamente proibido</span> usar de glitchs ou bugs para concluir/ter acesso a quests ou puzzles encontrados ao redor do mundo.</p>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">Em casos de passagem secreta ou mecanismo oculto, <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">o acesso deve ser fechado e mantido em segredo</span>.</p>
            </div>
            {/*Regra*/}
            <div className="shadow-lg/55 p-4 rounded-2xl">
              <h3 className="mb-2 text-xl text-center font-bold dark:text-white text-shadow-lg/55">Economia 💸</h3>
              <hr class="w-64 h-1 mx-auto bg-black border-0 rounded-sm dark:bg-black"></hr>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">Toda a economia desse mundo é baseado em <span className="underline underline-offset-3 decoration-2 decoration-green-600 dark:decoration-green-600 text-shadow-lg/55">esmeraldas</span>.</p>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">Toda transação entre <span className="underline underline-offset-3 decoration-2 decoration-green-600 dark:decoration-green-600 text-shadow-lg/55">jogadores</span> deve ser feita usando como moeda a esmeralda.</p>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">estritamente proibido</span> usar de bugs/glitchs para conseguir esmeraldas.</p>
            </div>
            {/*Regra*/}
            <div className="shadow-lg/55 p-4 rounded-2xl">
              <h3 className="mb-2 text-xl text-center font-bold dark:text-white text-shadow-lg/55">Boa-convivência.2 🕊️</h3>
              <hr class="w-64 h-1 mx-auto bg-black border-0 rounded-sm dark:bg-black"></hr>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">estritamente proibido</span> danificar ou alterar a base/construção de outro jogador.</p>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É necessario deixar pelo menos 1 spawner intocado em construções geradas automaticamente. (se gerado)</p>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">estritamente proibido</span> machucar um pokémon de outro jogador fora de um duelo.</p>
            </div>
            {/*Regra*/}
            <div className="shadow-lg/55 p-4 rounded-2xl">
              <h3 className="mb-2 text-xl text-center font-bold dark:text-white text-shadow-lg/55">Construções 🛠️</h3>
              <hr class="w-64 h-1 mx-auto bg-black border-0 rounded-sm dark:bg-black"></hr>
              <p className="text-gray-500 dark:text-white font-mono text-shadow-lg/55">É <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">estritamente proibido</span> interferir negativamente em uma linha de trem já existente.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}