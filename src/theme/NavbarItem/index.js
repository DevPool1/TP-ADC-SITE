import React from 'react';
import NavbarItem from '@theme-original/NavbarItem'; 
import GTranslate from '@site/src/components/GTranslate'; 
import { useLocation } from '@docusaurus/router';

export default function NavbarItemWrapper(props) {
  const location = useLocation();

  if (props.type === 'custom-gtranslate') {
    return <GTranslate {...props} key={location.pathname}/>;
  }

 
  return <NavbarItem {...props} />;
}