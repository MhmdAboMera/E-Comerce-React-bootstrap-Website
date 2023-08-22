import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCard } from "./rtk/slices/card-slice";

function Cards() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card);
  const price = cards.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const card = cards.map((card) => {
    return (
      <tr key={card.id}>
        <td>{card.id}</td>
        <td className="d-none d-lg-block" style={{ height: "87px" }}>
          {card.title}
        </td>
        <td>
          <img
            src={card.image}
            style={{ width: "70px", height: "70px" }}
            alt=""
          />
        </td>
        <td>{card.price} $</td>
        <td>{card.quantity}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              dispatch(deleteFromCard(card));
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mt-3">
      <h2>Welcome To Card</h2>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mt-3">
          Total Price :<span className="price">{price}</span> $
        </h5>
        <button
          className="btn btn-danger btn-sm "
          onClick={() => {
            dispatch(clear(card));
          }}
        >
          Clear Cards
        </button>
      </div>
      <table className="table table-striped table-hover mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th className="d-none d-lg-block">Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{card}</tbody>
      </table>
    </div>
  );
}
export default Cards;
