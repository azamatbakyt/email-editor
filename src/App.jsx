import { useRef, useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'

const MENU = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'Products',
		link: '/products'
	}
]

const isAuth = true
const role = 'admin'

export function App() {
	const [details, setDetails] = useState({
		isLoading: true,
		name: 'Null',
		position: 'Employee',
		buttonText: 'Click'
	})

	const imageRef = useRef(null)
	const onClick = () => {
		if (!imageRef.current) return
		imageRef.current.style.borderRadius = '20px'
		imageRef.current.style.boxShadow = '0 3px 6px rgba(0, 0, 0, .5 )'
	}
	return (
		<div className={styles.layout}>
			<img ref={imageRef} src='/image.png' width={150} />

			<br />
			<button onClick={onClick}>changeImage</button>

			<h1>
				{isAuth && role == 'admin'
					? 'Авторизирован'
					: 'Войдите в систему'}
			</h1>

			{MENU.map(item => (
				<h2 key={item.link}>{item.name}</h2>
			))}

			{details.isLoading ? (
				<p>Loading...</p>
			) : (
				<Details details={details} setDetails={setDetails} />
			)}
		</div>
	)
}
