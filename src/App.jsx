import { useState } from 'react'
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
	const [user, setUser] = useState('Azamat Bakyt')

	return (
		<div className={styles.layout}>
			<img src='/image.png' width={150} />

			<h1>
				{isAuth && role == 'admin'
					? 'Авторизирован'
					: 'Войдите в систему'}
			</h1>
			{MENU.map(item => (
				<h2 key={item.link}>{item.name}</h2>
			))}

			<Details user={user} setUser={setUser} />
		</div>
	)
}
