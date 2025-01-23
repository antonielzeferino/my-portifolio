export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-0"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
        </div>
        <h1 className="text-2xl font-bold mt-4">Carregando...</h1>
      </div>
    </div>
  );
}
