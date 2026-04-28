'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const [showPass, setShowPass] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegisterFunc = async (data) => {
        const { name, photo, email, password } = data;
        // console.log(data)

        const { data: userData, error } = await authClient.signUp.email({
            email: email, // user email address
            password: password, // user password -> min 8 characters by default
            name: name, // user display name
            image: photo, // User image URL (optional)
            callbackURL: "/"
        })

        console.log(userData)

        if (error) {
            toast.error(error.message)
        }
        if (userData) {
            toast.success(`${userData.user.name} successfully registered!`)
        }
    }

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-[#F3F3F3]">
            <div className="bg-white rounded-xl p-10 shadow-md">
                <h2 className="font-bold text-3xl text-center border-b border-gray-300/60 pb-5">Register Your Account</h2>

                <form className="mt-3" onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-[16px]">Your Name</legend>
                        <input
                            type="text"
                            className="input bg-gray-100"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required!" })}
                        />

                        {errors.name && <p className="font-semibold text-red-500">{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-[16px]">Photo URL <span className="text-sm font-semibold text-gray-500">(Optional)</span></legend>
                        <input
                            type="text"
                            className="input bg-gray-100"
                            placeholder="Enter your photo url"
                            {...register("photo")}
                        />
                    </fieldset>

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

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-bold text-[16px]">Password</legend>
                        <input 
                        type={showPass ? "text" : "password"}
                        name="password" 
                        className="input bg-gray-100" 
                        placeholder="Enter your password" 
                        {...register("password", { required: "Password is required!" })} />

                        <span
                            className="absolute right-8 top-[14px] text-lg cursor-pointer"
                            onClick={() => setShowPass(!showPass)}>
                            {showPass ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        {errors.password && <p className="font-semibold text-red-500">{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn bg-slate-800 w-full text-white mt-3 font-semibold" type="submit">Register</button>
                </form>

                <p className="mt-3 text-gray-500">Have An Account? <Link href={"/login"} className="text-green-500 font-semibold">Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;