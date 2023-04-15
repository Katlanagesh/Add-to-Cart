import Totalitems from "./Totalitems";
import Rating from "./Rating";
export default function Card({ id, data, Update, remove }) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                >
                    {data.saletitle}
                </div>
                <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{data.title}</h5>

                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <Rating num={data.star} />
                        </div>

                        <span className="text-muted text-decoration-line-through">
                            {data.price}
                        </span>

                    </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Totalitems
                            key={id}
                            data={data}
                            Update={Update}
                            remove={remove}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
