import logo from './logo.svg';
import './app.css';
import FormInput from './components/FormInput';
import { useState } from 'react';

const  App = () => {
const [values, setValues] = useState({
  Name:"",
  Date:"",
  email:"",
  PhoneNumber:""
});

const inputs = [
  {
    id:1,
    name:"Name",
    type:"text",
    placeholder:"Name",
    errorMessage:
    "username should be 3-16 characters and should not include any special characters",
    label: "Name",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {

      id: 2,
      name:"Date",
      type: "date",
      placeholder: "mm/dd/yyyy",
      label: "Birthday",
      required: true,
  },
  {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it should be valid Email address",
      label: "Email",
      required: true,
  },
  {
      id : 4,
      name: "PhoneNumber",
      type: "text",
      placeholder:"PhoneNumber",
      label: "PhoneNumber",
      required: true,
    },
    ];


  const handleSubmit = (e) => {
    e.preventDefault(); 
    
  };
  const onChange =(e) => {
      setValues({... values, [e.target.name]: e.target.value});
  };
  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      {inputs.map((input) =>  (
        <FormInput 
        Key={input.id}
        {...input}
        value={values[input.name]}
        onChange={onChange}
        />
        )) }
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
