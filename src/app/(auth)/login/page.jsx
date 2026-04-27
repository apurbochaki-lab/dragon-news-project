'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    // console.log("errors", errors)
    // console.log(watch("email"))
    // console.log(watch("password"))

    const handleLoginFunc = (data) => {
        console.log(data)
    }

    return (
        <div className="container mx-auto min-h-[80vh] bg-[#F3F3F3] flex justify-center items-center">
            <div className="bg-white rounded-xl p-10 shadow-md">
                <h2 className="font-bold text-3xl text-center border-b border-gray-300/60 pb-5">Login Your Account</h2>

                <form className="mt-3" onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-[16px]">Email</legend>
                        <input
                            type="email"
                            name="email"
                            className="input bg-gray-100"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required!" })}
                        />

                        {errors.email && <p className="font-semibold text-red-500">{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-[16px]">Password</legend>
                        <input type="password" name="password" className="input bg-gray-100" placeholder="Enter your password" {...register("password", { required: "Password is required!" })} />

                        {errors.password && <p className="font-semibold text-red-500">{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn bg-slate-800 w-full text-white mt-3 font-semibold" type="submit">Login</button>
                </form>

                <p className="mt-3 text-gray-500">Dont’t Have An Account? <Link href={"/register"} className="text-orange-500 font-semibold">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;