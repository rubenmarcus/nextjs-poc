export default function Start({ data, lists }) {
  return (
    <section>
      <h1>{data.titulo}</h1>
      <div className="mb-8 md:mb-16">
        {lists.map(function (data, index) {
          return (
            <li key={index}>
              <h2>{data.id}</h2> <p>{data.list}</p>
            </li>
          );
        })}
      </div>
    </section>
  );
}
