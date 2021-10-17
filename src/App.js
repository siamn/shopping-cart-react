import Items from './components/Items'
import Header from './components/Header'
import { useState } from 'react'
import Cart from './components/Cart'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { originalItems } from './itemData'
import Filter from './components/Filter'

function App() {
	const [ items, setItems ] = useState([ ...originalItems ])
	const [ cart, setCart ] = useState([])

	const addItem = (product) => {
		const cartItem = cart.find((item) => item.id === product.id)
		if (cartItem) {
			setCart(cart.map((item) => (item.id === cartItem.id ? { ...cartItem, qty: cartItem.qty + 1 } : item)))
		} else {
			setCart([ ...cart, { ...product, qty: 1 } ])
		}
	}

	const deleteItem = (product) => {
		setCart(cart.filter((item) => item.id !== product.id))
	}

	const incQty = (product) => {
		setCart(cart.map((item) => (item.id === product.id ? { ...product, qty: product.qty + 1 } : item)))
	}

	const decQty = (product) => {
		setCart(
			cart.map((item) => (item.id === product.id && item.qty > 1 ? { ...product, qty: product.qty - 1 } : item))
		)
	}

	const [ displayCart, setDisplay ] = useState(false)

	const onCartClick = () => {
		setDisplay(!displayCart)
	}

	const sortPrice = (ascendingOrder) => {
		if (ascendingOrder) {
			setItems([ ...items ].sort((a, b) => a.price - b.price))
		} else {
			setItems([ ...items ].sort((a, b) => b.price - a.price))
		}
	}

	const [ showFilter, setShowFilter ] = useState(false)

	const onFilterClick = () => {
		setShowFilter(!showFilter)
	}

	const filterItems = (arrayOfFilters) => {
		console.log(arrayOfFilters)
		setItems([ ...originalItems ].filter((item) => arrayOfFilters.includes(item.type)))
		console.log('hello')
	}

	const onReset = () => {
		setItems([ ...originalItems ])
	}

	return (
		<div className="container">
			<div className="content">
				<Header cart={cart} onCartClick={onCartClick} />
				<NavBar sortPrice={sortPrice} onFilterClick={onFilterClick} />

				<Items items={items} onAdd={addItem} />
			</div>
			<Footer />
			<Filter display={showFilter} onFilterClick={onFilterClick} onReset={onReset} filterItems={filterItems} />
			<Cart
				cart={cart}
				onCartClick={onCartClick}
				display={displayCart}
				onAdd={incQty}
				onRemove={decQty}
				onDelete={deleteItem}
			/>
		</div>
	)
}

export default App
