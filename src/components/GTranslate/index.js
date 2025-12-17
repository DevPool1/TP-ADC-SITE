import React, { useEffect } from 'react';

export default function GTranslate() {
    
  useEffect(() => {
    if (!document.cookie.split(';').some((item) => item.trim().startsWith('googtrans='))) {
      
      document.cookie = "googtrans=/pt/pt; path=/; domain=" + document.domain;
    }
    window.gtranslateSettings = {
      "default_language": "pt",
      "languages": ["pt", "fr", "it", "es", "ro", "en"],
      "wrapper_selector": ".gtranslate_wrapper",
     
      "switcher_vertical_position": "top",
	  "url_structure": "none",
      "float_switcher_open_direction": "bottom",
      "native_language_names": true,
      "switcher_horizontal_position": "relative"
    };
    
    const script = document.createElement('script');
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      
      if(document.body.contains(script)) {
        document.body.removeChild(script);
      }
    }
  }, []);

  return (
   
    <div className="gtranslate_wrapper" style={{minWidth: '100px', height: '100%'}}></div>
  );
}