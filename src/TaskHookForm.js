import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const  TaskHookForm=(props)=> {
  
  const {kisiler, submitFn} = props;

  const { register, handleSubmit, formState: { errors } } = useForm({
    
  });

  const [secilenKisiler, setSecilenKisiler] = useState([]);

 
  const  handleCheckboxChange = (e,p) => {
    console.log(p);
    const value  = p;
    

    let yeniPeople = [...secilenKisiler];
    const index = secilenKisiler.indexOf(value);
    if (index > -1) {
      yeniPeople.splice(index, 1);
    } else {
      yeniPeople.push(value);
    }
    setSecilenKisiler(yeniPeople);
  }
  
  
 const onSubmit = (formData) => {
      console.log(formData)
      const taskNameField = document.getElementById("title")
      const taskDescField = document.getElementById("description")
      
      submitFn(formData);
      // submit ettikten sonra form field'leri temizliyoruz
      taskNameField.value = "";
      taskDescField.value = ""
      setSecilenKisiler([])
      
 }

  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Görev Başlığı
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          {
            ...register("title", {
              required:"title zorunludur"
            })
          }
        />
        <p className="input-error">{errors.title && errors.title.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          name="description"
          {
            ...register("description", {
              required:"açıklama zorunludur"
            })
          }
        ></textarea>
        <p className="input-error">{errors.description && errors.description.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                {
                  ...register("people", {
                    required:"kişi zorunludur"
                  })
                }
                onChange={(e) => handleCheckboxChange(e,p)}
                checked={secilenKisiler.includes(p)}
                value={p}
              />
              {p}
            </label>
          ))}
        </div>
        <p className="input-error">{errors.people && errors.people.message}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
        >
          Kaydet
        </button>
      </div>
    </form>
  )


}
export default TaskHookForm;
