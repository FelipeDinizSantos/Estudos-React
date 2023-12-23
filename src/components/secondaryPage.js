import CarsList from "./carsList";
import { useParams } from "react-router-dom"; // Acessar parametros da URL

export default function SecondaryPage()
{
    const {id} = useParams();

    return(
        <>
            <h1>Parametro passado na URL: {id.toUpperCase()}</h1>
            <CarsList />
        </>
    );
}