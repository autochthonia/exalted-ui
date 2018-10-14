import React from 'react';
import MeasureAndRender from '../common/MeasureAndRender';
import Svg from '../common/Svg';

const Sidebar = ({ children }) => {
  const styles = {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '45vh 45vh',
  };

  const stroke = 2;
  const offset = 0;

  return (
    <div style={styles}>
      <div style={{ position: 'relative' }}>
        <MeasureAndRender stretch={true} debounce={1}>
          {bounds => {
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
                  L${stroke},${bounds.height - stroke - 30}
                  L${stroke + 20},${bounds.height - stroke - 30}
                  L${stroke + 20},${bounds.height - stroke - 20}
                  L${stroke + 20},${bounds.height - stroke - 10}
                  L${stroke + 10},${bounds.height - stroke - 10}
                  L${stroke + 10},${bounds.height - stroke - 20}
                  L${stroke + 30},${bounds.height - stroke - 20}
                  L${stroke + 30},${bounds.height - stroke}
                  L${bounds.width - 30 - offset},${bounds.height - stroke} 
                  L${bounds.width - 30 - offset},${bounds.height - 20}
                  L${bounds.width - 20 - offset},${bounds.height - 20}
                  L${bounds.width - 20 - offset},${bounds.height - 10}
                  L${bounds.width - 10 - offset},${bounds.height - 10}
                  L${bounds.width - 10 - offset},${bounds.height - 20}
                  L${bounds.width - 20 - offset},${bounds.height - 20}
                  L${bounds.width - 20 - offset},${bounds.height - 30}
                  L${bounds.width - stroke},${bounds.height - 30}
                  L${bounds.width - stroke},${30}
                  L${bounds.width - stroke - 20},${30}
                  L${bounds.width - stroke - 20},${20}
                  L${bounds.width - stroke - 10},${20}
                  L${bounds.width - stroke - 10},${10}
                  L${bounds.width - stroke - 20},${10}
                  L${bounds.width - stroke - 20},${20}
                  L${bounds.width - stroke - 30},${20}
                  L${bounds.width - stroke - 30},${0}
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
      </div>
    </div>
  );
};

export default Sidebar;
