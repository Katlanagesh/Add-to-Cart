export default function Totalitems({ data, Update, remove }) {
  return (
    <>
      {data.button === "View options" ? (
        <button class="btn btn-outline-dark mt-auto">{data.button}</button>
      ) : (
        ""
      )}
      {data.button !== "View options" ? (
        data.isvisible ? (
          <button
            disabled={!data.isvisible}
            class="btn btn-outline-dark mt-auto"
            onClick={() => Update(data.totalitems, data.id)}
          >
            {data.button}
          </button>
        ) : (
          <button
            disabled={!data.isvisible}
            class="btn btn-outline-dark mt-auto"
            onClick={() => Update(data.totalitems, data.id)}
          >
            {data.button}
          </button>
        )
      ) : (
        ""
      )}
      {data.button !== "View options" ? (
        <button
          class="btn btn-outline-dark mt-auto"
          onClick={() => remove(data.id)}
        >
          Remove
        </button>
      ) : (
        ""
      )}
    </>
  );
}
