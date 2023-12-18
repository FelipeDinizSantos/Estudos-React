import { useEffect, useState } from "react";
import InitialPage from "./components/initialPage";
import SecondaryPage from "./components/secondaryPage";

const App = () => 
{
  const [page, setPage] = useState(0)

  useEffect(
    ()=>
    {
      const url = window.location.href;
      const splitedUrl = url.split('?');
      setPage(Number(splitedUrl[1]));
    }, []
  )

  const openPage = (index)=>
  {
    window.open('http://localhost:3000?'+index, '_self');
  }

  const returnPage = ()=>
  {
    if(page === 1) return <InitialPage />
    else if(page === 2) return <SecondaryPage />
    return(
      <>
        <button onClick={()=>openPage(1)}>Página Inicial</button> <br />
        <button onClick={()=>openPage(2)}>Página Secundaria </button>
      </>
    )
  }

  return (
    <>
      {returnPage()}
    </>
  )
}

export default App;