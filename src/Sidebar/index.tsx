import React, { SFC } from 'react';
import MeasureAndRender from '../common/MeasureAndRender';
import Svg from '../common/Svg';

interface PSidebar {
  stretch?: boolean;
}

const Sidebar: SFC<PSidebar> = ({ children, stretch = false }) => {
  const stroke = 2;
  const offset = 0;

  return (
    <div
      style={{
        position: 'relative',
        maxHeight: '100%',
        maxWidth: '100%',
        height: '100%',
        width: '100%',
        // display: 'grid',
        // gridTemplateColumns: '1fr',
        // gridTemplateRows: '45vh 45vh',
      }}
    >
      {/* <div style={{ position: 'relative' }}> */}
      <MeasureAndRender stretch={stretch} debounce={1}>
        {bounds => {
          const height = (bounds && bounds.height) || 0;
          const width = (bounds && bounds.width) || 0;
          const path = `
                  M${stroke + 30},${stroke}
                  L${stroke + 30},${stroke + 20} 
                  L${stroke + 20},${stroke + 20} 
                  L${stroke + 20},${stroke + 10} 
                  L${stroke + 10},${stroke + 10} 
                  L${stroke + 10},${stroke + 20} 
                  L${stroke + 20},${stroke + 20} 
                  L${stroke + 20},${stroke + 30} 
                  L${stroke + 0},${stroke + 30} 
                  L${stroke},${height - stroke - 30}
                  L${stroke + 20},${height - stroke - 30}
                  L${stroke + 20},${height - stroke - 20}
                  L${stroke + 20},${height - stroke - 10}
                  L${stroke + 10},${height - stroke - 10}
                  L${stroke + 10},${height - stroke - 20}
                  L${stroke + 30},${height - stroke - 20}
                  L${stroke + 30},${height - stroke}
                  L${width - 30 - offset},${height - stroke} 
                  L${width - 30 - offset},${height - 20}
                  L${width - 20 - offset},${height - 20}
                  L${width - 20 - offset},${height - 10}
                  L${width - 10 - offset},${height - 10}
                  L${width - 10 - offset},${height - 20}
                  L${width - 20 - offset},${height - 20}
                  L${width - 20 - offset},${height - 30}
                  L${width - stroke},${height - 30}
                  L${width - stroke},${30}
                  L${width - stroke - 20},${30}
                  L${width - stroke - 20},${20}
                  L${width - stroke - 10},${20}
                  L${width - stroke - 10},${10}
                  L${width - stroke - 20},${10}
                  L${width - stroke - 20},${20}
                  L${width - stroke - 30},${20}
                  L${width - stroke - 30},${0}
                  Z`;

          return (
            <Svg bounds={bounds} path={path}>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                }}
              >
                {children}
              </div>
            </Svg>
          );
        }}
      </MeasureAndRender>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
