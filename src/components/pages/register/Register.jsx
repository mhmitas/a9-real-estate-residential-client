import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result);
            }).catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='my-10'>
            <h3 className="text-3xl text-center font-bold my-10">Please Register</h3>
            <div className="max-w-sm mx-auto rounded-md bg-base-200 p-12 space-y-6 ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='*:w-full space-y-6 '
                >
                    <input
                        {...register("name")}
                        type="text"
                        className='input input-primary' name="name" placeholder='Name'
                    />
                    <input
                        type="email"
                        {...register("email")}
                        className='input input-primary'
                        required
                        name="email"
                        placeholder='Email'
                    />
                    <input
                        {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).*$/ })}
                        type="text"
                        className='input input-primary'
                        required
                        name="password"
                        placeholder='Password'
                    />
                    {/* validate password */}
                    {errors.password && errors.password.type === "minLength" && (<span className='text-error'>Password should be at least 6 characters</span>)}
                    {errors.password && errors.password.type === "pattern" && (<span className='text-error'>Please create a strong password (e.g: xY...)</span>)}

                    {/* submit form */}
                    <input type="submit" className=' btn btn-primary' value="Register" />
                    <p>Already have an account! Please <Link to="/login" className='link link-primary'>Log in</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Register;