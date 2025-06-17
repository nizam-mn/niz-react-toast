import React from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from '../Libs/firebase';

const ToastCount = () => {

    const [countValue, setCountValue] = useState(0);

    useEffect(() => {
        // Reference to the Firestore document
        const toastDocRef = doc(db, "toast-count", "toast-site-count");

        // Listen for real-time updates
        const unsubscribe = onSnapshot(toastDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                setCountValue(docSnapshot.data().countValue);
            } else {
                console.error("Document does not exist!");
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    
    return (
        <div className='toast-count'>
            <h2>Toasts made on this website so far</h2>
            <div className='count-value'>{String(countValue).split("").map((digit, index) => (
                <h1 key={index}>{digit}</h1>
            ))}</div>
        </div>
    )
}

export default ToastCount
