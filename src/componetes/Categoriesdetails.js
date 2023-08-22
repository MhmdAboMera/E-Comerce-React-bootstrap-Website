import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchcategory } from "./rtk/slices/categories-slice";
import { addToCard } from "./rtk/slices/card-slice";

function Categoriesdetails() {
  const { categoryName } = useParams();
  const products = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcategory(categoryName));
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
            <p className="card-text">{product.description}</p>
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
      <h2 className="m-3">
        Welcome To{" "}
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products
      </h2>
      <div className="row">{product}</div>
    </div>
  );
}
export default Categoriesdetails;
