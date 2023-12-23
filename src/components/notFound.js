import { Link } from "react-router-dom";

export default function notFound()
{
    return(
        <div>
            <h1>Página não encontrada!</h1>
            <Link to='/'>HOME</Link>
        </div>
    )
}