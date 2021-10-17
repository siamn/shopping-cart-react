const Item = ({ item, onAdd }) => {
	return (
		<div className="product">
			<img className="img" src={item.image} alt={item.name} />
			<div className="details">
				<h3 className="name">{item.name}</h3>
				<h3 className="price">£{item.price}</h3>
			</div>
			<button onClick={() => onAdd(item)}>Add to cart</button>
		</div>
	)
}

export default Item
