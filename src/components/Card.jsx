//Se destructura product desde la App.jsx para traer las propiedades de la api en la card

function Card({ product }) {
  return (
    <div className="shadow-lg w-80 h-[80%-] rounded border-4 border-red-400 hover:scale-95 duration-300 bg-slate-50">
      <header className="">
        <img
          className="rounded"
          src={product.artwork["480x480"]}
          alt={product.title}
        />
      </header>
      <div className="text-justify p-2">
        <h2 className="py-1">
          <span className="font-bold">Title:</span> {product.title}
        </h2>
        <p className="py-2">
          <span className="font-bold">Mood:</span> {product.mood}
        </p>
        <p className="py-2">
          <span className="font-bold">Genre:</span> {product.genre}
        </p>
      </div>
      <div>
        <button className="bg-red-300 rounded py-1 px-2 mb-3 font-bold text-lg hover:bg-pink-600 hover:text-slate-50 duration-300 ml-[80%]">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
