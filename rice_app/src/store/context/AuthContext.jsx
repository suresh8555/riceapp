import { createContext, useContext, useReducer, useEffect, Children } from "react";
import authReducer from "../reducers/authReducer";
import { loginUser, registerUser, logoutUser } from "../../api/authApi";
import Password from "antd/es/input/Password";
import { useNavigate,Navigate } from "react-router-dom";


// import { h6 } from "framer-motion/client";

// create the store
export const AuthContext = createContext();
//console.log("context",AuthContext) //returns provider and consumer

//creating initial state

//This sets default values when the app first loads.
//  If a token exists in localStorage, it gets preloade 
const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    role: null,
    loading: true,
    error: null,
};




export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);//dispatch: action to reducers //reducer: these pure function where action are carried out to update state variable

   //programmatic navigation
    let navigate=useNavigate()

    //useEffect to get the data from local storage
    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        //condition to check whether the condition/data exict or not
        if (token && user) {
            try {
                //parse the data (convert stringifyed format into readable format)
                const userData = JSON.parse(user);
                dispatch({
                    type: 'LOGIN_SUCCESS', //Action-->to reduces
                    payload: { user: userData, token },//information/data to passed to reducers
                });
            } catch (error) {
                dispatch({ type: "LOADING_COMPLETE" })//action--> to renders
            }
        } else {
            dispatch({ type: "LOADING_COMPLETE" })//action--> to renders

        }

    }, [])//components load only once at mounting phase(at initial the browser is loaded)



   

      useEffect(() => {
        if (state.isAuthenticated && !state.loading) { // checking weather user is logged in or not
            if (state.role === 'admin') {
                return navigate('/admin') // checking weather user id admin
            } else if (state.role === 'vendor') {
                return navigate('/vendor');// // checking weather user id dealer
            } else
                return navigate('/shop'); //default naviagtion if user role is public
        }

    }, [state.isAuthenticated, state.role, state.loading])



    //ACTIONS
    //Login state
    const login = async (email, Password) => {
        try {
            dispatch({ type: 'LOGIN_START' });
            const { user, token } = await loginUser(email, Password);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            return { succes: true };
        } catch (error) {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: error.message || 'login failed',

            });
            return { success: false, error: error.message || 'login failed' };
        }
    };

    const register = async (userData) => {
        try {
            dispatch({ type: 'REGISTER_START' });
            const { user, token } = await registerUser(userData);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            return { succes: true };
        } catch (error) {
            dispatch({
                type: 'REGISTER_ERROR',
                payload: error.message || 'Registration failed',

            });
            return { success: false, error: error.message || 'Registration failed' };
        }
    };

    const logout = () => {
        logoutUser();
        dispatch({ type: 'LOGOUT' });
        navigate('/shop')// Redirect to login on logout
    };

    const setUserAndToken = (user, token) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
    };

    const value = {
        ...state,
        login,
        register,
        logout,
        setUserAndToken,
    };

    if (state.loading) return <h6>loading....</h6>

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};



