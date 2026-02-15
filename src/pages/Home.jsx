export default function Home({ onEnter }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">🔥 Surya Notes Portal</h1>
        <p className="mb-6">All MCA subjects in one place</p>

        <button
          onClick={onEnter}
          className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
