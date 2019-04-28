import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import './stylesheets/index.css';

import
{
  faHeart,
  faHome,
  faSearch,
  faPlusSquare,
  faUser,
  faCamera,
  faPaperPlane,
  faTv,
  faImage,
  faTag,
  faHistory,
  faBars,
  faBookmark,
  faComment,
  faLocationArrow,
  faEllipsisV
 }
from '@fortawesome/free-solid-svg-icons';


library.add(
  faHome,
  faSearch,
  faHeart,
  faPlusSquare,
  faUser,
  faCamera,
  faPaperPlane,
  faTv,
  faImage,
  faTag,
  faHistory,
  faBars,
  faBookmark,
  faComment,
  faLocationArrow,
  faEllipsisV
);



ReactDOM.render(<App />, document.getElementById('root'));
