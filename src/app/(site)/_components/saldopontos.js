export default function SaldoPontos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center p-6">
      <h2 className="text-2xl text-gray-400">Olá!</h2>
      <h1 className="text-5xl font-bold text-white my-4">Você tem <span className="text-pink-500">26000</span> pontos!</h1>
      <div className="flex items-center justify-center mb-6">
        <img src="/logo.png" alt="EcoCorp Logo" className="h-16 w-16" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-400">SALDO DE PONTOS</h3>
      <p className="text-5xl font-bold text-white mt-4">26000</p>
      <p className="text-xl text-gray-400 mb-10">Resgate alguma bonificação com seus pontos!</p>
      <div className="bg-pink-700 p-6 rounded-md w-full max-w-md flex flex-col justify-center items-center">
        <p className="text-white text-2xl font-semibold mb-3">Parabéns!</p>
        <p className="text-gray-200 text-lg text-center mb-6">
          Você acumulou 2000 pontos ajudando o meio ambiente! Resgate agora prêmios incríveis com seus pontos.
        </p>
        <button className="bg-pink-600 text-white font-bold text-xl px-6 py-3 rounded-md hover:bg-pink-500">
          RESGATAR AGORA
        </button>
      </div>
    </div>
  );
}