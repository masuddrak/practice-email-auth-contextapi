import { createContext } from "react";
import PropTypes from 'prop-types';

export const myContext = createContext()
const MyContextComponent = ({ children }) => {
    const name = { name: "hello world" }
    return (
        <myContext.Provider value={name}>
            {children}
        </myContext.Provider>
    );
};

export default MyContextComponent;
MyContextComponent.propTypes = {
    children:PropTypes.node
}