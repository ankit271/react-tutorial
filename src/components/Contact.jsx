import { useForm } from 'react-hook-form'

function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    
  } = useForm();

  const formSubmit = handleSubmit( async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
    reset();
  });
  
  console.log(errors);
  return (
    <div className="container mx-auto p-4">
      <h1>Contact</h1>

      <form className="max-w-md mx-auto mt-4" onSubmit={formSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            First Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "enter first name",
              minLength: {
                value: 3,
                message: "minimum length is 3",
              },
            })}
          />
        </div>
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName?.message}</p>
        )}
        <div className="mb-4">
          <button type="submit" className="btn" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact