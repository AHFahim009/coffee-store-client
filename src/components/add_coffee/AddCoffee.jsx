import Swal from "sweetalert2";

const AddCoffee = () => {
  //---------------------

  const handleAddCoffee = (event) => {
    //-------------------------------
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      photo,
    };
    console.log(newCoffee);
    //--------------------

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <form onSubmit={handleAddCoffee}>
        {/* row1: coffee name and quantity */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row 2: supplier and taste */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row 3: category and details */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row 4: photo url */}
        <div className=" ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-2xl">photo url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row 5: submit button */}
        <div>
          <input
            type="submit"
            value="Add Coffee"
            className=" mt-4 btn btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
