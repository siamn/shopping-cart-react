import './Modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { categories } from '../itemData'

const Filter = (props) => {
	const { display, onFilterClick, filterItems, onReset } = props

	const onApplyFilter = () => {
		const filter = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(
			(checkbox) => categories[checkbox.value]
		)

		filterItems(filter)
	}

	return display ? (
		<div className="modal">
			<div className="filter-menu">
				<AiOutlineClose className="close-btn" size={28} onClick={onFilterClick} />
				<h1>Filter</h1>
				<div>
					{categories.length > 0 ? (
						categories.map((item, index) => (
							<label key={item} className="filter-checkbox">
								<input type="checkbox" value={index} />
								{item}
								<span className="checkmark" />
							</label>
						))
					) : (
						<h3>Error. No categories were found to filter.</h3>
					)}
				</div>
				<button className="black-btn" onClick={onApplyFilter}>
					Apply Filter
				</button>
				<button className="black-btn" onClick={onReset}>
					Reset
				</button>
			</div>
		</div>
	) : (
		''
	)
}

export default Filter
