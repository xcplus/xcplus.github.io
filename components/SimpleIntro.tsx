'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const SimpleIntro = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '编码工作，需要不断学习和温习； <br /> 俗话说：“好记性不如烂笔头” <br /> 开一方疆土记录文字，以便随时翻看。<br /> 技术栈: Ruby on Rails、NestJS、ReactJS ... '
      ],
      startDelay: 1000,
      typeSpeed: 60,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex-1 items-center flex text-xl font-medium border p-8 rounded-3xl shadow-lg leading-loose" style={{minHeight: 240}}>
      <span ref={el} />
    </div>
  )
}

export default SimpleIntro