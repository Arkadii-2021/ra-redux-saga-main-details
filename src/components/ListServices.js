import { Link } from "react-router-dom";


export default function ListServices({id, name, price}) {
	return (
		<li>
			<div className="service">
				<b>Сервис:</b> {name}
			</div>
			<div>
				<b>Стоимость:</b> {price}
			</div>
			<div>
				 {<Link to={id + "/details"}>Подробнее</Link>}
			</div>
		</li>
	)
}