import React from 'react';
import NavbarItem from '@theme-original/NavbarItem'; 
import GTranslate from '@site/src/components/GTranslate'; 

export default function NavbarItemWrapper(props) {
  
  if (props.type === 'custom-gtranslate') {
    return <GTranslate {...props} />;
  }

 
  return <NavbarItem {...props} />;
}