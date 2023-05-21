
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Bios = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#writing_intro",
      loop: true,
      typeSpeed: 100,
      startDelay: 1000,
      backSpeed: 40,
      backDelay: 2000,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <ul id="writing_intro" className='hidden font-thin'>
        <li>
          运动爱好 <span className="ml-1">🎱、 🏸️、 🏓</span> 。
        </li>
        <li>
          希望未来能够：
        </li>
        <li>
          早日实现 <b className="font-medium text-blue-500">财富自由</b>、
        </li>
        <li>
          走向 <b className="font-medium text-purple-500">人生巅峰</b>。
        </li>
        <li>......</li>
        <li>勉励一下自己：</li>
        <li>
          <span className='font-medium text-blue-500'>粒米积成萝，滴水汇成河</span>;
        </li>
        <li>
          <span className='font-medium text-blue-500'>记录所闻所得，提升自我</span> ✌。  
        </li>
        <li>......</li>
      </ul>
      <span ref={el} className='text-2xl' />
    </>
  )
}

export default Bios