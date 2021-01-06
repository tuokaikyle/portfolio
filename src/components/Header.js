import React, { useState } from 'react';
import { information } from '../content/data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

const Header = () => {
  const name = information.name;

  const items = ['Resume', 'Project', 'Contact'];

  function menu(twcss) {
    return items.map((i, key) => (
      <div
        className={twcss}
        key={key}
        onClick={() => {
          setShow(false);
        }}
      >
        <Link to={i.toLowerCase()}>{i}</Link>
      </div>
    ));
  }

  const [show, setShow] = useState(false);
  const menuTransitions = useTransition(show, null, {
    from: { opacity: 0, transform: 'translateX(50%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(50%)' },
  });

  return (
    // 包含三个项目 姓名, sidebar, navbar. 下面有一条横线 横排展示 分在两侧边缘 小屏幕或者以上时候分列在左侧
    <div className='text-sm border-b flex justify-between lg:justify-start lg:divide-x lg:divide-color bg-content uppercase'>
      {/* 姓名栏目 粗体 左右padding 上下padding 字号大小 */}
      <Link to='/' className='font-bold px-10 py-5'>
        {name}
      </Link>
      {/* side bar 小屏幕或者以上的时候不显示 */}
      <div className='right-0 lg:hidden px-5 py-5'>
        {show ? (
          menuTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={props}
                  className='right-0 top-0 lg:hidden px-5 py-5 fixed h-full w-2/3 sm:w-1/3 bg-white shadow'
                >
                  <div className='flex justify-end'>
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={() => {
                        setShow(!show);
                      }}
                    />
                  </div>
                  <div className='lg:hidden divide-y'>
                    {menu('gray-text py-3 hover:text-blue-500')}
                  </div>
                </animated.div>
              )
          )
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setShow(!show);
            }}
          />
        )}
      </div>
      {/* nav bar - 小屏幕或者以上的时候横排展示 */}
      <div className='hidden lg:flex lg:divide-x lg:divide-color'>
        {menu('place-self-center px-5 gray-text hover:text-blue-500')}
      </div>
    </div>
  );
};

export default Header;
