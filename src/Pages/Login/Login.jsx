import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInUser, googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-orange-100 mt-4 rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="rounded-xl"
            src="https://img.freepik.com/premium-vector/login-icon-button-blue-glossy-with-shadow_514344-159.jpg?w=900"
            alt="login"
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-orange-200">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              New Here? please{" "}
              <Link className="text-blue-600 font-bold" to="/register">
                Register
              </Link>
            </p>
          </form>
          <div className="ml-9 mb-5">
            <button
              onClick={() =>
                googleLogin().then((result) => {
                  console.log(result);
                  navigate(location?.state ? location.state : "/");
                })
              }
              className="btn flex items-center gap-4 text-orange-700"
            >
              Sign in with Google
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
