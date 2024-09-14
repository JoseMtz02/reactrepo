import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
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
          ? (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          : (
            <blockquote className="blockquote text-end">
              <p className="mb-1">{name}</p>
              <footer className="blockquote-footer">{race}</footer>
            </blockquote>
          )
      }

      <button onClick={() => increment()}
       className="btn btn-primary"
       disabled = {isLoading}>
        Siguiente personaje
      </button>
    </>
  );
};
