import LocomotiveScroll from 'locomotive-scroll';

const initLocomotiveScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    // Add other Locomotive Scroll options as needed
  });


};

export default initLocomotiveScroll;
