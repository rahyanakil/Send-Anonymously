import {z} from 'zod';
export const userNameValidation =z
.string()
.min(2,"User length must be atleast 2 character")
.max(20,"User name must be atleast twenty Characters")
.regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"User name must not be special character")



export const signUpSchema =z.object({
    userName:userNameValidation,
    email: z.string().email({message:"Invalid email Address"}),
    password:z.string().min(6,{message: "Password must be atleast 6 characters"})
})