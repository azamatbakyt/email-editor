export function Details({ details, setDetails }) {
	return (
		<>
			<h1>Hello world!</h1>
			<h2>User: {details.name}</h2>
			<h2>Position: {details.position}</h2>

			<button
				onClick={() =>
					setDetails(prev => {
						return {
							...prev,
							name: 'Azamat Bakyt',
							position: 'Software Engineer'
						}
					})
				}
			>
				{details.buttonText}
			</button>
		</>
	)
}
