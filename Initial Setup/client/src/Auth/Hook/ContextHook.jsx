import { useContext } from "react";
import ContextAPI from "../Context/ContextAPI";


const ContextHook = () => {
    const context = useContext(ContextAPI)
    return context
};
export default ContextHook;