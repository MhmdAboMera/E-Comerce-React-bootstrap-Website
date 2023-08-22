import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./rtk/slices/products-clice";
import { Link } from "react-router-dom";
import { addToCard } from "./rtk/slices/card-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const product = products.map((product) => {
    return (
      <div key={product.id} className="col mt-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            style={{ height: "18rem", maxWidth: "90%" }}
            src={product.image}
            className="card-img-top m-auto"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description.slice(1, 200)}</p>
            <h5 className="card-title text-color">Price :{product.price} $</h5>
            <span>
              <Link
                to={`/products/${product.id}`}
                className="btn btn-primary btn-sm"
              >
                View Details
              </Link>
              <button
                className="btn btn-success btn-sm m-3"
                onClick={() => {
                  dispatch(addToCard(product));
                }}
              >
                Add To Card
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className=" container">
      <div className="row">{product}</div>
    </div>
  );
}

export default Products;
