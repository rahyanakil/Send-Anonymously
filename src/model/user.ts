import mongoose,{Schema ,Document} from "mongoose"

export interface Message extends Document{
    content: string;
    createdAt:Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content:{
        type:String, 
        required:true
    },
    
        createdAt:{
            type:Date, 
            required:true,
            Default:Date.now
        }
    
})
export interface User extends Document
{
    userName: String;
    email:string;
    password:string,
    verifyCode: string,
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptionMessages:boolean,
    messages: Message[]
}


const UserSchema: Schema<User> = new Schema({
    userName:{
        type:String, 
        required:[true, "User Name is required"],
        trim:true,
        unique:true,


    },
    
        email:{
            type:String, 
            required:[true,"Email is required"],
            unique: true,
            match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,'please give a valid email address'
            ]
        },
        password:{
            type:String, 
            required:[true,"Password is required"],
        },
        verifyCode:{
            type:String, 
            required:[true,"Verify Code is required"],
        },
        isVerified:{
            type:Boolean,
            default:false
        }
        ,
        verifyCodeExpiry:{
            type:Date, 
            required:[true,"Verify Code Expiry is required"],
        },
        isAcceptionMessages:{
        type:Boolean,
        required:true,
        },
        messages:{
        type:[MessageSchema],
        
        }

    
})

const UserModel =(mongoose.models.User as mongoose.Model<User>)||mongoose.model<User>("User",UserSchema)

export default UserModel;