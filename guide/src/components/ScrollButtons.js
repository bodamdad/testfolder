'use client'
export default function ScrollButtons() {
  const scrollToTop = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      // mainElement.scrollTo({ top: 0, behavior: 'smooth' });
      mainElement.scrollTo({ top: 0 });
    }
  };

  const scrollToBottom = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      // mainElement.scrollTo({ top: mainElement.scrollHeight, behavior: 'smooth' });
      mainElement.scrollTo({ top: mainElement.scrollHeight });
    }
  };

  return (
    <div className='scrollButtons'>
      <button className="material-icons top" aria-label="top" onClick={scrollToTop}>navigation</button>
      <button className="material-icons bottom" aria-label="bottom" onClick={scrollToBottom}>navigation</button>
    </div>
  );
}