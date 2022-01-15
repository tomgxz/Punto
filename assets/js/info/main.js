$(document).ready(function () {

    document.querySelectorAll('.section.one .word-cloud-container svg path').forEach((item) => {
        item.style.opacity=0;
    });

    anime({
        targets: '.section.one .word-cloud-container svg path',
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration: 600,
        delay: (el,i) => (750*Math.sqrt(i) | 0) + 500,
    });

    gsap.to("body",{css:{backgroundSize:"500%"}})

    console.log(document.body.style)

    gsap.to("body",{css:{backgroundSize:"100%"},duration:5})

    gsap.utils.toArray(".horizontal-section-container.one").forEach((item) => {

        gsap.to(item, {
            xPercent: -100, 
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top top",
                end: "+=%".replace("%",innerWidth),
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        });
    });

    gsap.utils.toArray(".horizontal-section-container.two").forEach((item) => {

        gsap.to(item, {
            xPercent: -100, 
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top top",
                end: "+=%".replace("%",innerWidth * 4),
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        });
    });

    gsap.utils.toArray(".horizontal-section-container.three").forEach((item) => {

        gsap.to(item, {
            xPercent: -100, 
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top top",
                end: "+=%".replace("%",innerWidth * 3),
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        });
    });
});


