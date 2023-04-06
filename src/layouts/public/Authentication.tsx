import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface RootState {
  auth: {
    token: string | null;
  };
}

const Authentication = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    const token = useSelector((state: RootState) => state.auth.token);

    if (!token) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/" replace />;
    }
  };
};

export default Authentication;
