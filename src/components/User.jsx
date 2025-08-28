import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
function User() {
  
  const {id} = useParams();
  const { register, handleSubmit, formState : {errors} } = useForm();
  console.log(errors)
  return (
    <>
      <h1>User {id}</h1>

      <form 
        onSubmit={handleSubmit((data) => console.log(data))}
        >
            <input {...register("firstName", {required: "enter first name", minLength: {
                value: 5,
                message: "first name should be at least 5 characters"
            }})} placeholder="First Name" />
            <h3 className='text-2xl text-red-500'>{errors.firstName?.message}</h3>
            <input {...register("lastName", {required: true, minLength:5})} placeholder="Last Name" />
            <input type="submit" />
      </form>
    </>
  );
}

export default User