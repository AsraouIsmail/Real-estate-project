/* eslint-disable no-unused-vars */
import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
const Login = () => {
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});

const submitForm = (data) => {
   console.log(data);
};
  return (
    <div className="form-section">
      <div className="Form">
        <div className="title">Sign Up</div>
        <div className="inputs">
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name..."
              {...register("firstName", { required: true })}
            />
            <p className="errors">{errors.firstName && "First name is required"}</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name..."
              {...register("lastName", { required: true })}
            />
            <p className="errors">{errors.lastName && "Last name is required"}</p>
            <input
              type="text"
              name="email"
              placeholder="Email..."
              {...register("email", { required: true })}
            />
            <p>{errors.email && "An email is required"}</p>
            <input
              type="text"
              name="age"
              placeholder="Age..."
              {...register("age", { required: true })}
            />
            <p className="errors">{errors.age && "A strong password is required"}</p>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              {...register("password", { required: true })}
            />
            <p className="errors">{errors.password && "A strong password is required"}</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password..."
              {...register("confirmPassword", { required: true })}
            />
            <p className="errors">{errors.confirmPassword && "passwords should match"}</p>
            <input type="submit" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login