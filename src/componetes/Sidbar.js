import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidbar() {
  const card = useSelector((state) => state.card);
  return (
    <div className="sidbar-contant">
      <ul className="list-unstyled p-3">
        <li>
          <Link
            to="/products"
            className="text-white-50 d-block mb-2 text-decoration-none"
          >
            Get All Products
          </Link>
        </li>
        <li>
          <Link
            to={"/products/categories"}
            className="text-white-50 d-block mb-2 text-decoration-none"
          >
            Get All Categories
          </Link>
        </li>
        <li>
          <Link
            to={"/cards"}
            className="text-white-50 d-block mb-2 text-decoration-none"
          >
            cards - {card.length}
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidbar;
