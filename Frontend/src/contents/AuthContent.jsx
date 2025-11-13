


import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext({});

const client = axios.create({
  baseURL:"http://localhost:8000/api/v1/users"
})


export const AuthProvider = ({ children }) => {

    const authContext = useContext(AuthContext);


    const [userData, setUserData] = useState(authContext);


    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            })


            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            throw err;
        }
    }

    const handleLogin = async (username, password) => {
        try {
            let request = await client.post("/login", {
                username: username,
                password: password
            });

            console.log(username, password)
            console.log(request.data)

            if (request.status === httpStatus.OK) {
                localStorage.setItem("token", request.data.token);
                router("/home")
            }
        } catch (err) {
            throw err;
        }
    }

    const getHistoryOfUser = async () => {
        try {
            let request = await client.get("/get_all_activity", {
                params: {
                    token: localStorage.getItem("token")
                }
            });
            return request.data
        } catch
         (err) {
            throw err;
        }
    }

    const addToUserHistory = async (meetingCode) => {
        try {
            let request = await client.post("/add_to_activity", {
                token: localStorage.getItem("token"),
                meeting_code: meetingCode
            });
            return request
        } catch (e) {
            throw e;
        }
    }


    const data = {
        userData, setUserData, addToUserHistory, getHistoryOfUser, handleRegister, handleLogin
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}
//createContext → creates a context object (for global state sharing).   its like res.local 

//useContext → lets you consume values from a context.

//useState → state management hook for component-level state.

//Children → rarely needed here, but it allows working with React children.

//useNavigate → a React Router hook to programmatically redirect to another page.
//==============================================================
//humne phle ek  create context banaya jo global sharing ko use hoga tham client banaya req address k liye (path)
//fir ek authProvider jo har chiz ko children mai wrap krke AuthContext.provider ko pass krega data use hoga usecontext(authcont..)
//aur Auth.provder as rendering k liye 
//=================================================================
//Creates local state:
//useData → stores the current user’s data.
//setUserData → function to update it.
//It’s initialized with authContext (which is {} by default).
//============================================================
//AuthContext.Provider makes the data object available to any child component that calls useContext(AuthContext).

//{children} ensures that whatever components are wrapped inside <AuthProvider> get rendered normally.
