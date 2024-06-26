import React, { useCallback, useReducer, useRef } from "react";
import UseSafeDispatch from "../UseSafeDispatch";

const defaultState = {
  data: null,
  status: "idle",
  error: null,
};
const UseAsync = (initialState) => {
  const initialStateRef = useRef({ ...defaultState, ...initialState });
  const [{ data, status, error }, setState] = useReducer((state, action) => {
    return { ...state, ...action };
  }, initialStateRef.current);

  const safeSetState = UseSafeDispatch(setState);
  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error("The argument passed to useAsync must be a promise");
      }
      safeSetState({ status: "pending" });
      return promise.then(
        (data) => {
          safeSetState({ data, status: "resolved" });
          return data;
        },
        (error) => {
          safeSetState({
            status: "rejected",
            error: JSON.parse(error.message),
          });
        }
      );
    },
    [setState]
  );

  const setData = useCallback(
    (data) => {
      safeSetState({ data });
    },
    [safeSetState]
  );

  const setError = useCallback(
    (error) => {
      safeSetState({ error });
    },
    [safeSetState]
  );

  const reset = useCallback(() => {
    safeSetState(initialStateRef.current);
  }, [safeSetState]);

  return {
    data,
    status,
    error,
    run,
    setData,
    setError,
    reset,
    isIdle: status === "idle",
    isLoading: status === "idle" || status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",
  };
};

export default UseAsync;
