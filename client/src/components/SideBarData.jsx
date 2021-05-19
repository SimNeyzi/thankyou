/* eslint-disable import/prefer-default-export */
import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'My Thank Yous',
    path: '/mythankyous',
    icon: <ImIcons.ImHeart />,
  },
  {
    title: 'Sent Thank Yous',
    path: '/sentthankyous',
    icon: <RiIcons.RiSendPlane2Fill />,
  },
];
