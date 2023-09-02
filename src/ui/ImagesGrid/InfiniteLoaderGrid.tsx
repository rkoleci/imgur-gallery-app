import { useState, useEffect, useRef } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface InfiniteLoaderGridProps {
  items: EntityId[];
  onLoadMore: (pageNum: number) => void;
  totalPages: number;
  renderItem: (id: EntityId, index: number) => React.ReactNode;
  columns?: number;
}

const InfiniteLoaderGrid = ({ items, onLoadMore, totalPages, renderItem, columns = 3 }: InfiniteLoaderGridProps) => {
  const [pageNum, setPageNum] = useState(1);
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 1);
      }
    })
  ); 

  useEffect(() => {
    if (pageNum <= totalPages) {
      onLoadMore(pageNum);
    }
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]); 

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,

    }}>
      {items?.map((id, i) => {
          return (
            <div key={`${id}`} ref={i === items.length - 1 && pageNum <= totalPages ? setLastElement : null}  >
              {renderItem(id, i)}
            </div>
          )
      })}
    </div>
  ) 
};

export default InfiniteLoaderGrid;
 