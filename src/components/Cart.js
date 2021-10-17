import './Modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import CartItem from './CartItem'

const Cart = ({ cart, onCartClick, onAdd, onRemove, onDelete, display }) => {
	let total = 0
	cart.forEach((item) => {
		total += item.price * item.qty
	})
	total = total.toFixed(2)

	return display ? (
		<div className="modal">
			<div className="cart">
				<AiOutlineClose className="close-btn" size={28} onClick={onCartClick} />
				<h1 className="cart-title">Cart</h1>
				<div className="basket">
					{cart.length > 0 ? (
						cart.map((item) => (
							<CartItem key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} />
						))
					) : (
						<h3>There are currently no items in the cart.</h3>
					)}
				</div>
				<h2 className="total">Total: £{total}</h2>
				<button className="black-btn">Checkout</button>
			</div>
		</div>
	) : (
		''
	)
}

export default Cart
