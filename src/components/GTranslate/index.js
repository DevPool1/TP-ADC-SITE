import React, { useEffect, useRef } from 'react';

export default function GTranslate() {
    const wrapperRef = useRef(null);
    useEffect(() => {
        let isMounted = true;
        window.gtranslateSettings = {
            "default_language": "pt",
            "languages": ["pt", "fr", "it", "es", "ro", "en"],
            "wrapper_selector": ".gtranslate_wrapper",
            "detect_browser_language": "true",
            "switcher_vertical_position": "top",
            "url_structure": "none",
            "float_switcher_open_direction": "bottom",
            "native_language_names": true,
            "switcher_horizontal_position": "relative"
        };

        const scriptId = 'gtranslate-script';


        const timer = setTimeout(() => {
            if (!isMounted) return;
            if (!wrapperRef.current) return;
            const oldScript = document.getElementById(scriptId);
            if (oldScript) oldScript.remove();
            wrapperRef.current.innerHTML = '';
            const script = document.createElement('script');
            script.src = `https://cdn.gtranslate.net/widgets/latest/float.js?v=${Date.now()}`;
            script.defer = true;
            script.id = scriptId;
            document.body.appendChild(script);
        }, 200);

        return () => {
            isMounted = false;
            clearTimeout(timer);

            const s = document.getElementById(scriptId);
            if (s) s.remove();
            if (wrapperRef.current) {
                wrapperRef.current.innerHTML = '';
            }
        }
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="gtranslate_wrapper"
            style={{ minWidth: '100px', height: '100%' }}
        ></div>
    );
}