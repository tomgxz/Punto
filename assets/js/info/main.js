$(document).ready(function () {
    letterWrapper(".globalnav .globalnav-link-text");
    letterWrapper(".section.one .section-header-container .text.one");

    //wordWrapper(".section.seven .review .review-quote .text");

    gsap.utils.toArray(".section.one .section-header-container .text-reveal-line.one").forEach((item) => {
        item.style.opacity=0;item.style.scaleY=0;item.style.translateX=0;jsE(item);
    });

    gsap.utils.toArray(".section.one .section-header-container .text.one .letter").forEach((item) => {
        item.style.opacity=0;jsE(item);
    });

    gsap.utils.toArray(".section.one .section-header-container .text.two").forEach((item) => {
        item.style.opacity=0;jsE(item);
    });

    gsap.utils.toArray(".section.two").forEach((item) => {
        item.style.opacity=0;jsE(item);
    });

    gsap.utils.toArray(".globalnav .globalnav-content").forEach((item) => {
        item.style.opacity=1;jsE(item);
    });

    gsap.utils.toArray(".section.four .activity-panel").forEach((item) => {
        item.style.opacity=0;jsE(item);
    });

    gsap.utils.toArray(".section.four .text.two").forEach((item) => {
        item.style.opacity=0;jsE(item);
    });

    gsap.utils.toArray(".section.four .text.three").forEach((item) => {
        item.style.opacity=0;jsE(item);
    });

    ScrollTrigger.matchMedia({
        "(min-width: 681px)": function() {
            gsap.utils.toArray(".globalnav .globalnav-link-text .letter, .globalnav .globalnav-link-text:before").forEach((item) => {item.style.opacity=0;item.style.translateX=40;jsE(item);
            });

            gsap.utils.toArray(".globalnav .globalnav-link-home svg").forEach((item) => {
                item.style.opacity=0;item.style.translateY=60;jsE(item);
            });

            anime.timeline({loop:false,end: function() {
                    document.querySelectorAll(".section.one .section-header-container .text-reveal-line.one").forEach((item) => {
                        item.style.display="none";
                    });
                }})
                .add({
                    targets:".section.one .section-header-container .text-reveal-line.one",
                    scaleY:[0,1],
                    opacity:[0,1],
                    easing:"easeOutQuint",
                    duration:700,
                })

                .add({
                    targets:".section.one .section-header-container .text-reveal-line.one",
                    translateX: [0,document.querySelector(".section.one .section-header-container .text.one").getBoundingClientRect().width+20],
                    easing:"easeOutQuint",
                    duration:700,
                    delay:100,
                })

                .add({
                    targets:".section.one .section-header-container .text.one .letter",
                    opacity:[0,1],
                    easing:"easeOutQuint",
                    duration:600,
                    offset:"-=650",
                    delay:(el,i) => 34 * (i+1)
                })

                .add({
                    targets:".section.one .section-header-container .text-reveal-line.one",
                    opacity:[1,0],
                    easing:"easeOutQuint",
                    duration:700,
                })

                .add({
                    targets:".section.one .section-header-container .text.two",
                    opacity:[0,1],
                    easing:"easeOutQuint",
                    duration:600,
                })

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

            jsQ(".section.one .section-header-container .text-reveal-line.one");
            jsQ(".section.one .section-header-container .text-reveal-line.one");
            jsQ(".section.one .section-header-container .text.one .letter");
            jsQ(".section.one .section-header-container .text-reveal-line.one");
            jsQ(".section.one .section-header-container .text.two");
            jsQ(".globalnav .globalnav-link-home svg");
            jsQ(".globalnav .globalnav-link-text .letter");
        },

        "(max-width: 680px)": function() {
            anime.timeline({loop:false,end: function() {
                    document.querySelectorAll(".section.one .section-header-container .text-reveal-line.one").forEach((item) => {
                        item.style.display="none";
                    });
                }})
                .add({
                    targets:".section.one .section-header-container .text-reveal-line.one",
                    scaleY:[0,1],
                    opacity:[0,1],
                    easing:"easeOutQuint",
                    duration:700,
                })

                .add({
                    targets:".section.one .section-header-container .text-reveal-line.one",
                    translateX: [0,document.querySelector(".section.one .section-header-container .text.one").getBoundingClientRect().width+20],
                    easing:"easeOutQuint",
                    duration:700,
                    delay:100,
                })

                .add({
                    targets:".section.one .section-header-container .text.one .letter",
                    opacity:[0,1],
                    easing:"easeOutQuint",
                    duration:600,
                    offset:"-=650",
                    delay:(el,i) => 34 * (i+1)
                })

                .add({
                    targets:".section.one .section-header-container .text-reveal-line.one",
                    opacity:[1,0],
                    easing:"easeOutQuint",
                    duration:700,
                })

                .add({
                    targets:".section.one .section-header-container .text.two",
                    opacity:[0,1],
                    easing:"easeOutQuint",
                    duration:600,
                });

            jsQ(".section.one .section-header-container .text-reveal-line.one");
            jsQ(".section.one .section-header-container .text-reveal-line.one");
            jsQ(".section.one .section-header-container .text.one .letter");
            jsQ(".section.one .section-header-container .text-reveal-line.one");
            jsQ(".section.one .section-header-container .text.two");
        }
    });


    gsap.utils.toArray(".section.section-parallax-background").forEach((section, i) => {
        section.bg = section.querySelector(".section-background"); 
        jsE(section.bg);

        if (i) {
            section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

            gsap.to(section.bg, {
                backgroundPosition: `50% ${innerHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    scrub: true
                }
            });
        } else {
            section.bg.style.backgroundPosition = "50% 0px"; 

            gsap.to(section.bg, {
                backgroundPosition: `50% ${innerHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top", 
                    end: "bottom top",
                    scrub: true
                }
            });
        }
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

    gsap.to(".section.two",{css:{opacity:1},
        scrollTrigger: {
            trigger:".section.one",
            start:"100",
            end:"+=400",
            markers:false,
            scrub:true,
        }
    });

    jsQ(".section.two");

    gsap.utils.toArray(".section.four .activity-panel").forEach((item) =>{
        gsap.to(item,{css:{opacity:1},
            scrollTrigger: {
                trigger:item,
                start:"top+=100 bottom",
                end:"+=200",
                markers:false,
                scrub:true,
            }
        });
    });

    jsQ(".section.four .activity-panel");

    gsap.utils.toArray(".section.four .activity-panel .text.two").forEach((item) =>{
        gsap.to(item,{css:{opacity:1},
            scrollTrigger: {
                trigger:item,
                start:"bottom bottom",
                end:"+=160",
                markers:false,
                scrub:true,
            }
        });
    });

    jsQ(".section.four .activity-panel .text.two");

    gsap.utils.toArray(".section.four .activity-panel .text.three").forEach((item) =>{
        gsap.to(item,{css:{opacity:1},
            scrollTrigger: {
                trigger:item,
                start:"bottom bottom",
                end:"+=160",
                markers:false,
                scrub:true,
            }
        });
    });

    jsQ(".section.four .activity-panel .text.three");

    gsap.to(".section.four",{css:{scale:0.5,translateY:"25%",opacity:0,borderRadius:"3em"},
        scrollTrigger: {
            trigger:".section.four",
            start:"bottom bottom",
            end:"+=400",
            ease:"power4.in",
            markers:false,
            scrub:true,
        }
    });

    jsQ(".section.four");

});