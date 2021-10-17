const NavBar = ({ sortPrice, onFilterClick }) => {
	return (
		<div>
			<div className="navBar">
				<button className="nav-btn" onClick={onFilterClick}>
					Filter
				</button>
				<button className="nav-btn" onClick={() => sortPrice(true)}>
					Price ↑
				</button>
				<button className="nav-btn" onClick={() => sortPrice(false)}>
					Price ↓
				</button>
			</div>
		</div>
	)
}

export default NavBar
