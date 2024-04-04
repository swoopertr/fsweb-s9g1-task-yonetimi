import React, { useState, useEffect } from "react";
import {useForm} from 'react-hook-form'

const PeopleHookForm = ({ kisiler, submitFn }) => {
    const [error, setError] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    
  });



const onSubmit = (formData) => {
    console.log(formData)
    const peopleNameField = document.getElementById("people-title")
    if(kisiler.includes(formData.title)) {
        setError("Bu isim daha önce eklenmiş")
    } else {
      setError(null)
      submitFn(formData.title);
      peopleNameField.value = "";

    } 
    }

  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="people-title"
          name="title"
          type="text"
          {
            ...register("title", {
              required:"title zorunludur",
              minLength: { value: 3, message: "Title must be at least 3 characters" },
              maxLength: { value: 13, message: "Title cannot exceed 13 characters" }
            })
          }
        />
        <p className="input-error">{errors.title && errors.title.message}</p>
        <p className="input-error">{error && error}</p>

      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleHookForm;
