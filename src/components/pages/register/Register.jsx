import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <h3 className="text-3xl text-center my-10 font-bold">Please Sign up</h3>
            <div className="max-w-md mx-auto p-10 *:w-full space-y-6">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='*:w-full space-y-6  rounded-md bg-base-200 p-8'
                >
                    <input
                        {...register("name")}
                        type="text"
                        className='input input-primary' name="name" placeholder='Name' />
                    <input
                        type="email"
                        {...register("email")}
                        className='input input-primary'
                        required
                        name="email"
                        placeholder='Email' />
                    <input
                        {...register("password")}
                        type="text"
                        className='input input-primary'
                        required
                        name="password"
                        placeholder='Password' />
                    <br />
                    <input type="submit" className=' btn btn-primary' value="Sign up" />
                    <p>Already have an account! Please <Link to="/login" className='link link-primary'>Log in</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Register;