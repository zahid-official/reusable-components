/* eslint-disable react/prop-types */
import { ToastContainer } from "react-toastify";
import ContextAPI from "./ContextAPI";
import { useState } from "react";

const AuthProvider = ({ children }) => {
    // state for users
  const [users, setUsers] = useState(null);
  // state for loading
  const [loading, setLoading] = useState(true);


     // context value
  const contextValue = {
    users,
    setUsers,
    loading,
    setLoading,
  };
  return (
    <>
      <ContextAPI.Provider value={contextValue}>
        {children}

        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ContextAPI.Provider>
    </>
  );
};

export default AuthProvider;
