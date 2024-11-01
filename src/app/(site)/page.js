
export default function Categorias() {
  const categorias = [
    {
      titulo: "Gestão de Resíduos",
      descricao: "Implementar programas de reciclagem e compostagem, além de reduzir o uso de materiais descartáveis.",
    },
    {
      titulo: "Redução de emissões",
      descricao: "Promover o uso de transportes alternativos, como bicicletas e caronas, além de investir em veículos elétricos para a frota da empresa.",
    },
    {
      titulo: "Uso sustentável de recursos",
      descricao: "Adotar práticas para reduzir o consumo de água e outros recursos naturais, como sistemas de captação de água da chuva e uso de materiais reciclados.",
    },
    {
      titulo: "Redução do desperdício de alimentos",
      descricao: "Nos refeitórios corporativos, implementar programas para minimizar o desperdício de alimentos, como doação de excedentes e compostagem.",
    },
  ];

  return (
    <span>
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-center p-6">
    <h2 className="text-2xl text-gray-400">Olá!</h2>
    <h1 className="text-5xl font-bold text-white my-4">Você tem <span className="text-pink-500">26000</span> pontos!</h1>
    <div className="flex items-center justify-center mb-6">
      <img src="/logo.png" alt="EcoCorp Logo" className="h-24 w-24" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-400">SALDO DE PONTOS</h3>
    <p className="text-5xl font-bold text-white mt-4">26000</p>
    <p className="text-xl text-gray-400 mb-10">Resgate alguma bonificação com seus pontos!</p>
    <div className="bg-pink-700 p-6 rounded-md w-full max-w-md flex flex-col justify-center items-center">
      <p className="text-white text-2xl font-semibold mb-3">Parabéns!</p>
      <p className="text-gray-200 text-lg text-center mb-6">
        Você acumulou jiksdajdiks000 pontos ajudando o meio ambiente! Resgate agora prêmios incríveis com seus pontos.
      </p>
      <button className="bg-pink-600 text-white font-bold text-xl px-6 py-3 rounded-md hover:bg-pink-500">
        RESGATAR AGORA
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-center py-10 text-white">
      <h1 className="text-3xl font-bold text-white mb-6">Categorias</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {categorias.map((categoria, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col justify-between text-left border border-gray-700"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white mb-4">{categoria.titulo}</h2>
              <p className="text-gray-300">{categoria.descricao}</p>
            </div>
            <button className="bg-gray-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600 mt-auto">
              Resgatar +200
            </button>
          </div>
        ))}
      </div>
    </div>
    </span>
  );
}