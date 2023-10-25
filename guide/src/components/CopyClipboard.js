"use client"
import { useEffect, useCallback } from 'react';

export default function CopyClipboard() {
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
      
    
    return (

        <div className="copyWrap">
            <p className="copyText">최신정보(꼭. 최신정보 인터넷에서 분석해서 알려줘)<br/><br/></p>
            <button className="btnCopy">GPT최신정보</button>

            <div className='group'>
                <p className="copyText">{'&#123;'}</p>
                <button className="btnCopy">{'{'}</button>
                <p className="copyText">{'&#125;'}</p>
                <button className="btnCopy">{'}'}</button>
                <p className="copyText">{'&#60;'}</p>
                <button className="btnCopy">{'<'}</button>
                <p className="copyText">{'&#62;'}</p>
                <button className="btnCopy">{'>'}</button>
            </div>

            <div className='group'>
                <p className="copyText">{'&nbsp;&nbsp;'}</p>
                <button className="btnCopy">{'&nbsp'}</button>
                <p className="copyText">{'<br/>'}</p>
                <button className="btnCopy">{'<br/>'}</button>
            </div>

        </div>
    )
}