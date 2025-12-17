import React from 'react';
import NavbarItem from '@theme-original/NavbarItem'; // Importa o componente original
import GTranslate from '@site/src/components/GTranslate'; // Importa o teu widget

export default function NavbarItemWrapper(props) {
  // Verificação lógica: Se o tipo no config for o nosso customizado
  if (props.type === 'custom-gtranslate') {
    return <GTranslate {...props} />;
  }

  // Caso contrário, deixa o Docusaurus tratar normalmente
  return <NavbarItem {...props} />;
}