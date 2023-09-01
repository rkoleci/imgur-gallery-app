import React, {  useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";

const windowheight = window.innerHeight

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
);
 
const Example = () => {
    
    const [arrowsVisible, setArrowsVisible] = useState(false)
    const [pageNum, setPageNum] = useState(1);
    const [lastElement, setLastElement] = useState(null)
    const [firstElement, setFirstElement] = useState('')
   

    const loadMoreItems = () => {
        console.log(111, 'loadmore')
    }
    
    const isItemLoaded = () => {

    }
    const gridRef = useRef(null)

 

    useEffect(() => {
       console.log(111, { pageNum })
    }, [pageNum]);

    

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 1.0, // Trigger when the entire target is visible
        };
    
        const callback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // The target div is fully visible, meaning we've reached its end
              console.log('Scroll reached the end of the div!');
              // You can trigger any action or function here.
            }
          });
        };
    
        const observer = new IntersectionObserver(callback, options);
    
        if (gridRef.current) {
          observer.observe(gridRef.current);
        }
    
        return () => {
          if (gridRef.current) {
            observer.unobserve(gridRef.current);
          }
        };
      }, []);
    

   
    return (
       <div ref={gridRef}>
         <Grid
        columnCount={3}
        columnWidth={100}
        height={2000}
        
        rowCount={10}
        rowHeight={35}
        width={300}
        
    >
            {Cell}
    </Grid>
       </div>
            
    )
};

export default Example