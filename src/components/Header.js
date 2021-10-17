import { FaShoppingBasket } from 'react-icons/fa'

const Header = ({ cart, onCartClick }) => {
	let total = 0

	cart.forEach((item) => {
		total += item.qty
	})

	return (
		<div className="header">
			<h1 className="title">
				Shopping Cart
				<div className="basket-badge">
					<FaShoppingBasket className="basket-icon" onClick={onCartClick} /> {total}
				</div>
			</h1>
		</div>
	)
}

export default Header
