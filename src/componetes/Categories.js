import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcategories } from "./rtk/slices/categories-slice";
import { Link } from "react-router-dom";

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcategories());
  }, []);
  const categorie = categories.map((categorie) => {
    return (
      <tr key={categorie}>
        <td>{categorie}</td>
        <td>
          <Link
            to={`/products/category/${categorie}`}
            className="btn btn-primary btn-sm"
          >
            View
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="container mt-3">
      <h2>Welcome To Categories</h2>
      <table className="table table-striped table-hover mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{categorie}</tbody>
      </table>
    </div>
  );
}
export default Categories;
