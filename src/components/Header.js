import React, { useState } from 'react';
import { information, navigation } from '../content/data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

const Header = () => {
  const name = information.name;

  const items = navigation;

  function menu(twcss) {
    return items.map((i, key) => (
      <div className={twcss} key={key}>
        <Link
          to={i.toLowerCase()}
          onClick={() => {
            setShow(false);
          }}
        >
          {i}
        </Link>
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
    <div className='border-b flex justify-between lg:justify-start lg:divide-x lg:divide-color bg-content uppercase text-sm font-header'>
      {/* 姓名栏目 粗体 左右padding 上下padding 字号大小 */}
      <Link to='/' className='font-bold px-10 py-5'>
        {name}
      </Link>
      {/* side bar 小屏幕或者以上的时候不显示 */}
      {/* 只用一个onClick事件 绑定setShow */}
      <div className='right-0 lg:hidden'>
        {show ? (
          menuTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={props}
                  className='right-0 top-0 lg:hidden px-5 fixed h-full w-2/3 bg-white shadow'
                >
                  <div
                    className='flex justify-end py-5'
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <div className='lg:hidden divide-y'>
                    {menu('gray-text py-4 hover:text-blue-500')}
                  </div>
                </animated.div>
              )
          )
        ) : (
          <div
            className='px-5 py-5'
            onClick={() => {
              setShow(!show);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
      </div>
      {/* nav bar - 小屏幕或者以上的时横排展示 */}
      <div className='hidden lg:flex lg:divide-x lg:divide-color'>
        {menu('place-self-center px-5 gray-text hover:text-blue-500')}
      </div>
    </div>
  );
};

export default Header;
