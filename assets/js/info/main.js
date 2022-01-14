$(document).ready(function () {

    anime({
        targets: '.section.one .word-cloud-container svg path',
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration: 600,
        delay: (el,i) =>  100 * i,
    });

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


