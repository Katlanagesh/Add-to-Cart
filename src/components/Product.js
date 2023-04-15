import Card from "./Card";
export default function Product({ data, Update, remove, rating }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((value) => {
            return (
              <Card
                key={value.id}
                data={value}
                rating={rating}
                Update={Update}
                remove={remove}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
