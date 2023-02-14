import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Form.scss'



const schema = yup.object().shape({



  firstname: yup.string().required("First Name should be required please"),

  lastname: yup.string().required("last Name should be required please"),
  // lastName: yup.string().required(),
  email: yup.string().email().required(),
  phonenumber : yup.number().positive().integer().required(),
  password: yup.string().min(8).max(32).required(),
  confirmpassword: yup.string().oneOf([yup.ref("password"), null]),

});

const Form = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  
  return (

    <div className="Form"> 
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Enter your data please</h2>
      <br />
    
   

      {/* <input {...register("firstname")} placeholder="firstname" type="firstname" required />
      <p>{errors.email?.message}</p>
      <br /> */}
      <div className="inputs">

<input {...register("firstname")} placeholder="firstname" type="firstname" required />
      <p>{errors.firstname?.message}</p>
      <br />

      <input {...register("lastname")} placeholder="lastname" type="lastname" required />
      <p>{errors.lastname?.message}</p>
      <br />
   

      <input {...register("phonenumber")} placeholder="phonenumber" type="phonenumber" required />
      <p>{errors.phonenumber?.message}</p>
      <br />

      
      <input {...register("email")} placeholder="email" type="email" required />
      <p>{errors.email?.message}</p>
      <br />
        
   


      <input
        {...register("password")}
        placeholder="password"
        type="password"
        required
      />
      <p>{errors.password?.message}</p>
      <br />

        <input
        {...register("confirmpassword")}
            type="password"
            placeholder="Confirm Password..."
            required
           
          />
          <p> {errors.confirmpassword && "Passwords Should Match!"} </p>

          </div>

      <button className="btn" type="submit">Sign in</button>
    </form>
    </div>
  );
};

export default Form;

