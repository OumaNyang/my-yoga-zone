import React,{useState} from 'react';
import "../App.css"
import Trainers from './Trainers';

function  NewTutorial ({user,trainers}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [trainer_id, setTrainerId] = useState("");
    const [success, setSuccess] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [trainerID, setTrainerId] = useState(session[id]);
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/tutorials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          url,
          trainer_id
        }),
    
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          res.json().then((msg) => setSuccess(msg.success));
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
    }
    
    return (
        
        <div style={{margin:"auto",padding:"20px",width:"80%"}}> 
          <h5 className='text-center text-primary rounded-0'>Add Yoga Tutorials</h5>
          <hr></hr>
        <form onSubmit={handleSubmit}  method='post'>
            <div className='form-group'>
            <label>Title</label>
            <input  onChange={(e) => setName(e.target.value)} type="text" id='name' value={name} required className='form-control'/> 
            </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea placeholder='Max length 1000 characters' maxLength={1000} onChange={(e) => setDescription(e.target.value)} type="text" id='description' value={description} required className='form-control'></textarea>
            </div>
            <div className='form-group'>
            <label>Video Link</label>
            <input  required onChange={(e) => setUrl(e.target.value)} value={url} type="url" placeholder='https:youtube.com/embed/6bdfh83fv' id='url'  className='form-control' />
            </div>
            <div className='form-group'>
            <label>Trainer</label>
            {/* <input disabled required onChange={(e) => setTrainerId(e.target.value)} value={user.id} type="text" id='trainer_id'  className='form-control' /> */}

            <select required onChange={(e) =>setTrainerId(e.target.value)}   id="trainer_id"  className='form-control' >
             <option value={""}> </option>

            {trainers.length > 0 ? (
            trainers.map((trainer) => (
             <option value={trainer.id} key={trainer.id}>{trainer.name}</option>
             ))):(
            <option value={""}>No trainers found</option>
            )}
            </select>
            </div>
        
           <div className='form-group mt-4 justify-content-right'>
           <button type='submit' className='save-button'>{isLoading ? "Loading..." : "SAVE"}</button>
            </div> 
            <div>
             <hr></hr>
             {errors?.map((err) => (
         <div className='alert alert-danger rounded-0'key={err}>{err}</div>
        ))}
         {success?.map((msg) => (
         <div className='alert alert-success rounded-0'key={msg}>{msg}</div>
        ))}

          </div>
        </form>
        </div>
    );
}
export default NewTutorial;
