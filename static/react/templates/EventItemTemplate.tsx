import { useContext } from "react";
import { Link, useSubmit } from "react-router-dom";
import { useCart, Item } from "react-use-cart";

function EventItemTemplate({ event }: any) {
  const submit = useSubmit();
  const { addItem } = useCart()

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className="d-md-flex gap-3">
      <img src={event.imageUrl} alt={event.name} className="img-fluid" />
      <div className="d-flex flex-column">
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <p>{event.price}</p>
        <div className="d-flex">
          <button className="btn btn-primary me-2">
            <Link to="edit">Edit</Link>
          </button>
          <button onClick={startDeleteHandler} className="btn btn-danger">
            Delete
          </button>
          <button onClick={() => addItem(event as any)} className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default EventItemTemplate;
