'use client';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store'; // Import the makeStore function

const StoreProvider = ({ children }) => {
  const storeRef = useRef();

  if (!storeRef.current) {
    // Initialize the Redux store once
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
