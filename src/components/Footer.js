import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className="footer">
			<a href="https://www.linkedin.com/in/siamn/" target="_blank" rel="noreferrer">
				<FaLinkedin className="social" size={28} />
			</a>
			<a href="https://github.com/siamn" target="_blank" rel="noreferrer">
				<FaGithubSquare className="social" size={28} />
			</a>
		</div>
	)
}

export default Footer
