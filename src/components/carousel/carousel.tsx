import React, { useRef, useState } from 'react';
import { navigate } from 'gatsby';
import { v4 } from 'uuid';

import './carousel.scss';
import { ItemPropType, Item } from './item/item';
import Dot from './dot/dot';
import leftArrow from './left-arrow.svg';
import rightArrow from './right-arrow.svg';
import { UrlRouter } from '../../common/interfaces/global.interfaces';

enum ScrollDirection {
  Prev = -1, Next = 1
}

interface CarouselPropType {
  items: ItemPropType[];
  location: UrlRouter;
}

function scrapeIdxFromUrl(url: CarouselPropType['location']): number {
  const matched = url.hash.match(/item-(?<pos>[0-9]+)/);
  if (!matched || !matched.groups) {
    return 0;
  }
  return parseInt(matched.groups.pos, 10);
}

// min width for component is 876px
const Carousel: React.FC<CarouselPropType> = ({ items, location: url }) => {
  const { Prev, Next } = ScrollDirection;
  const [idx, setIdx] = useState(scrapeIdxFromUrl(url));
  const carouselRef = useRef<HTMLDivElement>(null);

  // performs true modulus - % doesn't behave the same as it should in math for negative numbers
  const cycleIdx = (pos: number) => (pos < 0 ? items.length + pos : pos % items.length);

  // moves to specified anchored element and updates idx
  const throwAnchor = (pos: number) => {
    const newIdx = cycleIdx(pos);
    navigate(`#item-${newIdx}`);
    // console.log(carouselRef.current?.scrollLeft)
    // if (carouselRef.current) {
    //   carouselRef.current.scrollLeft = 0;
    //   console.log(carouselRef, carouselRef.current, carouselRef.current.scroll)
    // }
    setIdx(newIdx);
  };

  const CarouselItems: React.FC = () => (
    <div className="carousel" ref={carouselRef}>
      {items.map((item, index) => (
        <div
          key={v4()}
          id={`item-${index}`}
          className={`item ${index === idx ? 'selected' : ''}`}
        >
          <Item {...item} />
        </div>
      ))}
    </div>
  );

  const MoveButton: React.FC<{className: string, dir: ScrollDirection}> = ({ className, dir }) => (
    <button
      type="button"
      className={className}
      onClick={() => throwAnchor(idx + dir)}
    >
      <img
        className={`${dir === Prev ? 'leftArrow' : 'rightArrow'}`}
        src={dir === Prev ? leftArrow : rightArrow}
        alt="arrow-button"
      />
    </button>
  );

  return (
    <div className="carousel-wrapper">
      <div className="center-flex-row" style={{ justifyContent: 'space-between' }}>
        <MoveButton className="prevButton" dir={Prev} />
        <CarouselItems />
        <MoveButton className="nextButton" dir={Next} />
      </div>

      <div className="center-flex-row">
        {items.map(({}, index) => (
          <Dot
            key={v4()}
            isSelected={index === idx}
            onClick={() => throwAnchor(index)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  items: [],
};

export default Carousel;
