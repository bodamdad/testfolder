"use client"
import { useEffect, useCallback } from 'react';

export default function CodeHighlighter() {
    const handleCopy = useCallback((event) => {
        const textToCopy = event.target.previousSibling.innerText;
        const copyPop = document.querySelector('.copyPop');
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            copyPop.classList.add('active');
            setTimeout(()=>{
                copyPop.classList.remove('active');
            },1000);
          })
          .catch(err => {
            console.error('Error in copying text: ', err);
          });
      }, []);
    
      useEffect(() => {
        const buttons = document.querySelectorAll('.btnCopy');
        buttons.forEach(button => {
          button.addEventListener('click', handleCopy);
        });
    
        // Clean up event listeners on component unmount
        return () => {
          buttons.forEach(button => {
            button.removeEventListener('click', handleCopy);
          });
        };
      }, [handleCopy]);
    
    
    return null;
}