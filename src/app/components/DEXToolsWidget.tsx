import React, { useEffect, useState } from 'react';

const DEXToolsWidget: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    console.log('Component mounted');
    setIframeSrc('https://www.dextools.io/widget-chart/en/ether/pe-light/0x0c3fdf9c70835f9be9db9585ecb6a1ee3f20a6c7?theme=light&chartType=2&chartResolution=30&drawingToolbars=false');
  }, []);

  if (!iframeSrc) {
    console.log('Iframe source not set');
    return null;
  }

  console.log('Iframe source set:', iframeSrc);
  return (
    <iframe
      id="dextools-widget"
      title="DEXTools Trading Chart"
      width="100%"
      height="100%"
      src={iframeSrc}
      style={{ border: 'none' }}
    />
  );
};

export default DEXToolsWidget;
