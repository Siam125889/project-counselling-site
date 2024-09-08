import { useForm } from "react-hook-form";
import axios from "axios";

const CounselorForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/counselors", data);
      alert("Profile submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      <input {...register("email", { required: true })} placeholder="Email" />
      <input {...register("profileImage")} placeholder="Profile Image URL" />
      <input
        {...register("expertise", { required: true })}
        placeholder="Expertise"
      />
      <textarea {...register("bio", { required: true })} placeholder="Bio" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CounselorForm;
