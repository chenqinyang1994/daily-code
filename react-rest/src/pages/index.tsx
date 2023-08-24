import { useEffect } from 'react';
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  const onImgClick = () => {
    console.log('img click');
  };

  const onPClick = () => {
    console.log('p click');
  };

  useEffect(() => {
    console.log("====================================");
    console.log(document.querySelectorAll("[data-gaevent]"));
    console.log("====================================");
  }, []);

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img data-gaevent='ga-img' src={yayJpg} width="388" onClick={onImgClick} />
      </p>
      <p data-gaevent='ga-p' onClick={onPClick}>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
