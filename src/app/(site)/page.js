

export default function PontosPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-xl p-12 w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold">Olá!</h1>
        <p className="text-4xl font-bold mt-6">Você tem <strong>26000 pontos!</strong></p>
        <div className="mt-8">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">SALDO DE PONTOS</h2>
            <p className="text-5xl font-bold mt-4"><strong>26000</strong></p>
            <p className="mt-4 text-lg font-bold">Resgate alguma bonificação com seus pontos!</p>
          </div>
          <div className="bg-pink-200 mt-8 p-6 rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Parabéns!</h3>
              <p className="text-base font-bold mt-2">
                Você acumulou <strong>26000 pontos</strong> ajudando o meio ambiente! Resgate agora prêmios incríveis com seus pontos.
              </p>
            </div>
            <button className="bg-pink-600 text-white rounded-lg px-6 py-3 font-bold hover:bg-pink-700">
              RESGATAR AGORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoriasPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Categorias</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <CategoriaCard
            titulo="Gestão de Resíduos"
            descricao="Implementar programas de reciclagem e compostagem, além de reduzir o uso de materiais descartáveis."
          />
          <CategoriaCard
            titulo="Redução de emissões"
            descricao="Promover o uso de transportes alternativos, como bicicletas e caronas, além de investir em veículos elétricos para a frota da empresa."
          />
          <CategoriaCard
            titulo="Uso sustentável de recursos"
            descricao="Adotar práticas para reduzir o consumo de água e outros recursos naturais, como sistemas de captação de água da chuva e uso de materiais reciclados."
          />
          <CategoriaCard
            titulo="Redução do desperdício de alimentos"
            descricao="Nos refeitórios corporativos, implementar programas para minimizar o desperdício de alimentos, como doação de excedentes e compostagem."
          />
        </div>
      </div>
    </div>
  );
}

function CategoriaCard({ titulo, descricao }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full sm:w-64">
    <h3 className="text-xl font-bold mb-4">{titulo}</h3>
    <p className="text-gray-600 mb-6">{descricao}</p>
    <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">
      Ir para Categoria
    </button>
  </div>
  );
}