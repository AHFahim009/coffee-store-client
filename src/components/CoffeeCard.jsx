import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  //-----------------------------
  const { _id, name, quantity, supplier, taste, details, category, photo } =
    coffee;
  //-----

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",

      // delete data from server
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{details}</p>
          <p>{category}</p>

          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-3">
              <button className="btn ">View</button>

              <Link to={`/update/${_id}`}>
                <button className="btn">Edit</button>
              </Link>

              <button onClick={() => handleDelete(_id)} className="btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
