import './Modal.css'
import { RiAddCircleLine } from 'react-icons/ri'
import { RiIndeterminateCircleLine } from 'react-icons/ri'
import { RiDeleteBinLine } from 'react-icons/ri'

const CartItem = ({ item, onAdd, onRemove, onDelete }) => {
	return (
		<div className="cart-grid">
			<img className="img-cart" src={item.image} alt={item.name} />
			<p>{item.name}</p>
			<p>£{item.price}</p>
			<div>
				<RiAddCircleLine className="icon add" size="28px" onClick={() => onAdd(item)} />
				<span className="qty">{item.qty}</span>
				<RiIndeterminateCircleLine className="icon remove" size="28px" onClick={() => onRemove(item)} />
				<RiDeleteBinLine className="icon remove" size="28px" onClick={() => onDelete(item)} />
			</div>
		</div>
	)
}

export default CartItem
