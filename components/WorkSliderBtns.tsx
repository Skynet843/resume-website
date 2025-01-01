"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { FC } from "react";

type WorkSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
  leftButtonDisabled?: boolean;
  rightButtonDisabled?: boolean;
};

const WorkSliderBtns: FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconStyles,
  leftButtonDisabled,
  rightButtonDisabled,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} disabled={leftButtonDisabled}>
        <PiCaretLeftBold
          className={iconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles} disabled={rightButtonDisabled}>
        <PiCaretRightBold
          className={iconStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
