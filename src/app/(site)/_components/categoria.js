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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Categorias</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-4">{categoria.titulo}</h2>
              <p className="text-gray-600 mb-4">{categoria.descricao}</p>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                Ir para Categoria
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }