function Card({ product }) {
  
  
  return (
    <div>
      <header>
        <img src={product.artwork["150x150"]} alt={product.title} />
      </header>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.genre}</p>
      </div>
      <div>
        <button>
          Buy
        </button>
      </div>
    </div>
  )
}

export default Card