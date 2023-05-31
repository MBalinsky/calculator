const tl = gsap.timeline();

tl.fromTo('.calc', {
    x: -500,
    rotate: 50,
    opacity: 0
}, {
    x: 0,
    rotate: 0,
    opacity: 1,
    duration: 1
})

.fromTo('.btn',{
    scale: 0,
    opacity: 0
}, {
    scale: 1,
    opacity: 1,
    duration: 0.1,
    stagger: 0.2
}, 0.2)


