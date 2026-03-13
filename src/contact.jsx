import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './contact.css'
function Contact(){
  const [inputs, setInputs] = useState({
     fullname: "",
    email: "",
    number: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs(values => ({
      ...values,
      [name]: value
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault()
     console.log(inputs);
  }
 
  return(
    <>
    <form  onSubmit={handleSubmit}>
      <h1>Contact Me</h1>

    <label>Full Name</label>
      <input type="text"
      name='fullname'
      value={inputs.fullname}
      onChange={handleChange}
       required
      />
    

    <label>email</label>
      <input type="email"
      name='email'
      value={inputs.email}
      onChange={handleChange}
       required
      />
    

    <label>Phone Number
      <input type="text"
      name='number'
      value={inputs.number}
      onChange={handleChange}
       required
      />
    </label>
    <button>Submit</button>

    </form>
    </>
  )
}

export default Contact;