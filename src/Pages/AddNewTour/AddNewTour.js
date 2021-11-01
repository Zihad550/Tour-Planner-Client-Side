import React from "react";
import { useForm } from "react-hook-form";

const AddNewTour = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/tours", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed succesfully");
          reset();
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-50 mx-auto my-5"
      >
        <input placeholder="Tour Name" {...register("name")} />
        {errors.name && (
          <span className="text-danger">Please enter your e-mail</span>
        )}

        <textarea
          placeholder="Tour Description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-danger">Please enter your valid e-mail</span>
        )}
        <input
          placeholder="Tour image url"
          {...register("img", { required: true })}
        />
        {errors.img && (
          <span className="text-danger">
            Please enter your valid phone number
          </span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewTour;
