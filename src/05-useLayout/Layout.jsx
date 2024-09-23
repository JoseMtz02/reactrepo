import { useCounter ,useFetch} from "../hooks";
import { LoadingQuote,Quote } from "../03-examples";

export const Layout = () => {
  // Llamada a la API con el contador
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://dragonball-api.com/api/characters/${counter}`);

  const { name, race } = !!data ? data : {};

  return (
    <>
      <h1>Dragon Ball Z</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote/>
          : <Quote name={name} race={race}/>
        }



      <button onClick={() => increment()}
       className="btn btn-primary"
       disabled = {isLoading}>
        Siguiente personaje
      </button>
    </>
  );
};
