export default function Inicio(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">IMAGEM DE ATUALIZAÇÕES</h2>
        <div className="bg-gray-200 h-32 flex items-center justify-center">[Imagem]</div>
        <p className="mt-4 font-bold">TEXTO</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">CONTEÚDO DE APOIO</h2>
        <div className="bg-gray-200 h-32 flex items-center justify-center">[Conteúdo]</div>
      </div>
    </div>
  );
};

