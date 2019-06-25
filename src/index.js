/*
main component to start app
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'material-icons/iconfont/material-icons.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import './SCSS/index.scss';

import
{
  faHeart,
  faHome,
  faSearch,
  faPlusSquare,
  faUser,
  faCamera,
  faImage,
  faTag,
  faHistory,
  faBars,
  faBookmark,
  faComment,
  faCogs,
  faEllipsisV,
  faUserPlus,
  faTh,
  faMap,
  faIdCardAlt,
  faPlusCircle
 }
from '@fortawesome/free-solid-svg-icons';


library.add(
  faHome,
  faSearch,
  faHeart,
  faPlusSquare,
  faUser,
  faCamera,
  faImage,
  faTag,
  faHistory,
  faBars,
  faBookmark,
  faComment,
  faCogs,
  faEllipsisV,
  faUserPlus,
  faTh,
  faMap,
  faIdCardAlt,
  faPlusCircle
);



ReactDOM.render(<App />, document.getElementById('root'));
