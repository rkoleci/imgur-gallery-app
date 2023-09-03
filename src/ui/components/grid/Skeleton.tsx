
const Skeleton = () => {
    const fixedSvgWidth = 1280;
    const itemHeight = 250;  
    const svgHeight = itemHeight * 3 + 20; 
    const spacingX = 10;
    const spacingY = 10;
  
    return (
      <div className="grid-loader">
        <svg width="100%" height={svgHeight} xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2].map((row) => (
            <g key={row}>
              {[0, 1, 2].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={(col * (fixedSvgWidth / 3)) + (col * spacingX)}
                  y={(row * itemHeight) + (row * spacingY)}
                  width={fixedSvgWidth / 3 - spacingX}  
                  height={itemHeight} 
                  fill="#e0e0e0"
                >
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    begin={`${row * 3 + col};0s`}
                    values="1;0;1"
                    repeatCount="indefinite"
                  />
                </rect>
              ))}
            </g>
          ))}
        </svg>
      </div>
    );
  };


  export default Skeleton