let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
let nav = document.querySelector("nav");

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

body.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
  });
});

gsap.from(nav, {
  y: -100,
  delay: 1,
  duration: 2,
});

gsap.from(".hero h1", {
  y: 100,
  delay: 1,
  duration: 2,
  opacity: 0,
});

gsap.from(".page2", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    scrub: 4,
    start: "top 50%",
    end: "top 30%",
  },
});

gsap.from(".video1 video", {
  x: -100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".video1 video",
    scrub: 4,
    start: "top 60%",
    end: "top 30%",
  },
});

gsap.from(".video2 video", {
  x: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".video2 video",
    scrub: 4,
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from(".video3 video", {
  x: -100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".video3 video",
    scrub: 4,
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from(".video4 video", {
  x: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".video4 video",
    scrub: 4,
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from(".video5 video", {
  x: -100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".video5 video",
    scrub: 4,
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from(".video6 video", {
  x: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".video6 video",
    scrub: 4,
    start: "top 60%",
    end: "top 30%",
  },
});

gsap.from(".page4", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page4",
    scrub: 4,
    start: "top 60%",
    end: "top 30%",
  },
});
