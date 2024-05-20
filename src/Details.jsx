export function Details({ user, setUser }) {
	return (
		<>
			<h1>Hello world!</h1>
			<h2>User: {user}</h2>
			<button onClick={() => setUser('azamatbaqyt')}>Tap</button>
		</>
	)
}
