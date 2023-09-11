import {useDispatch} from "react-redux";
import {AppDispatch} from "../reducer";

export const useTypedDispatch: ()=> AppDispatch = useDispatch