import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/firbase.config';
import ErrorMessageInsideForm from '../../common/error-message/ErrorMessage';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Register = () => {
    const { createUser, setLoading } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState(null);
    const [showPw, setShowPw] = useState(false);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        const { email, password, name, photoUrl } = data;
        // createUser with name password, email
        createUser(email, password)
            .then(() => {
                console.log('result ok');
                setRegisterError(null);
                toast.success('Registered successfully')
                navigate('/')
                if (name) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                    })
                }
                if (photoUrl) {
                    updateProfile(auth.currentUser, {
                        photoURL: photoUrl,
                    })
                }
            }).catch(error => {
                console.error(error);
                setLoading(false);
                setRegisterError(error.message)
            })
    }

    return (
        <div className='my-10'>
            <h3 className="text-3xl text-center font-bold my-10">Please Register</h3>
            <div className="max-w-sm mx-auto rounded-md bg-base-200 p-12 space-y-6 ">
                {registerError && <ErrorMessageInsideForm text2={registerError}></ErrorMessageInsideForm>}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='*:w-full flex flex-col gap-5 '
                >
                    <input
                        {...register("name")}
                        type="text"
                        required
                        className='input input-primary'
                        name="name"
                        placeholder='Username'
                    />
                    <input
                        {...register("photoUrl")}
                        type="text"
                        className='input input-primary'
                        name="photoUrl"
                        placeholder='Photo URL'
                    />
                    <input
                        {...register("email")}
                        required
                        type="email"
                        className='input input-primary'
                        name="email"
                        placeholder='Email'
                    />
                    <label className='relative'>
                        <input
                            {...register("password")}
                            type={showPw ? 'text' : 'password'}
                            className='input input-primary w-full'
                            required name="password"
                            placeholder='Password'
                        />
                        <span onClick={() => setShowPw(!showPw)} className='absolute top-1/3 right-3 text-xl cursor-pointer'>{
                            showPw ? <FaEyeSlash /> : <FaEye />
                        }</span>
                    </label>
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