export default function BadRequest({onClick, error}) {
	return (
		<div>
			<span>&#9940;<b> Произошла ошибка:</b> {error}</span>
			<p><button onClick={onClick}>Повторить запрос</button></p>
		</div>
	)
}