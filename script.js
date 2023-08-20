var tl = gsap.timeline()

tl.from("#navbar img, #nav a, #btn button",{
    y: -100,
    opacity:0,
    stagger:0.2
})
tl.from("#main h1",{
    y : 100,
    opacity:0,
    stagger:0.2
})
tl.from("#left-img",{
    opacity:0,
    x:-100,
    duration:0.2   
})
tl.from("#right-img",{
    opacity:0,
    x:100, 
    duration:0.2 
})
tl.from("#main h5",{
    y:-10,
    opacity:0,
})
tl.to("#main h5",{
    y:30,
    repeat:-1,
    dutation:0.7,
    yoyo:true
})