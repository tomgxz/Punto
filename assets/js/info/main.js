$(document).ready(function () {
    letterWrapper(".globalnav .globalnav-link-text");

    gsap.utils.toArray(".globalnav .globalnav-content").forEach((item) => {
        item.style.opacity=1;jsE(item);
    });


    ScrollTrigger.matchMedia({
        "(min-width: 681px)": function() {
            gsap.utils.toArray(".globalnav .globalnav-link-text .letter, .globalnav .globalnav-link-text:before").forEach((item) => {item.style.opacity=0;item.style.translateX=40;jsE(item);
            });

            gsap.utils.toArray(".globalnav .globalnav-link-home svg").forEach((item) => {
                item.style.opacity=0;item.style.translateY=60;jsE(item);
            });

            anime.timeline({loop:false})
                .add({
                    targets:".globalnav .globalnav-link-home svg",
                    translateY:[60,0],
                    opacity:[0,1],
                    easing:"easeOutQuint",
                    duration:1000,
                })

                .add({
                    targets:".globalnav .globalnav-link-text .letter",
                    translateX: [40,0],
                    opacity: [0,1],
                    easing: "easeOutQuint",
                    duration: 600,
                    offset:"-=200",
                    delay: (el, i) => 50 * i,
                });

            jsQ(".globalnav .globalnav-link-home svg");
            jsQ(".globalnav .globalnav-link-text .letter");
        },

    });

    gsap.to(".globalnav .globalnav-content", {css:{opacity:0},
        scrollTrigger: {
            trigger:".globalnav",
            start:"top top",
            end:"+=48",
            ease:"power2.in",
            markers:false,
            scrub:true,
        }
    });

    jsQ(".globalnav .globalnav-content");

    anime({
        targets: '.section.one .word-cloud-container svg path',
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration: 600,
        delay: (el,i) =>  100 * i,
    });

    gsap.utils.toArray(".horizontal-section-container").forEach((item) => {

        gsap.to(item, {
            xPercent: -100, 
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top top",
                end: "+=%".replace("%",innerWidth * 2),
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        });
    });
});


