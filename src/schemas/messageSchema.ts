import {z} from 'zod';

export const  messageSchema =z.object({
    content:z
    .string()
    .min(10,{message:"content should be atleast 10 characters"})
    .max(300,{message:"Messages must not be longer than 300 character"})
    

})
