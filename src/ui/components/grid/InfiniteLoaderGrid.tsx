import { useState, useEffect, useRef } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface InfiniteLoaderGridProps {
  items: EntityId[];
  onLoadMore: (pageNum: number) => void;
  totalPages: number;
  renderItem: (id: EntityId, index: number) => React.ReactNode;
}

const InfiniteLoaderGrid = ({ items, onLoadMore, totalPages, renderItem }: InfiniteLoaderGridProps) => {
  const [pageNum, setPageNum] = useState(1);
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>();

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
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full">
      {items?.map((id, i) => {
          return (
            <div key={`${id}`} ref={(i === items.length - 1 && pageNum <= totalPages ? setLastElement : null)}  >
              {renderItem(id, i)}
            </div>
          )
      })}
    </div>
  ) 
};

export default InfiniteLoaderGrid;
 