$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

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

    anime.timeline({loop:false})
        .add({
            targets:".section.three .planet-alert",
            opacity: [0,1],
            scale: [0.2,1],
            duration:800,
            delay:5000,
        })

        .add({
            targets:".section.three .planet-alert",
            opacity: 0,
            scale: 3,
            duration: 600,
            delay: 5000,
            easing: "easeInExpo",
        })

        .add({
            targets:".section.three .planet-alert",
            scale:0,
            duration:1,
        })

    jsQ(".section.three .planet-alert");

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

    gsap.to(".section.three .planet",{css:{translateY:40,opacity:0},
        scrollTrigger: {
            trigger:".section.one",
            start:"top top",
            end:"bottom top",
            markers:false,
            scrub:true,
        }
    });

    jsQ(".section.three .planet");

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

    gsap.utils.toArray(".section.five .headline").forEach((item) => {
        gsap.to(item,{css:{opacity:1},
            scrollTrigger: {
                trigger:item,
                start:"bottom bottom-=100",
                end:"+=200",
                markers:false,
                scrub:true,
            }
        });

        jsE(item);
    });

    gsap.utils.toArray(".section.five .headline .svg-icon path").forEach((item) => {
        if (item.classList.contains("headline-slower")) {

            gsap.from(item,{css:{strokeDashoffset:400}});

            gsap.to(item,{css:{strokeDashoffset:0},
                scrollTrigger: {
                    trigger:item,
                    start:"bottom bottom-=100",
                    end:"top top",
                    markers:false,
                    scrub:true,
                }
            });

        } else {

            gsap.from(item,{css:{strokeDashoffset:800}});

            gsap.to(item,{css:{strokeDashoffset:0},
                scrollTrigger: {
                    trigger:item,
                    start:"bottom bottom-=100",
                    end:"+=800",
                    markers:false,
                    scrub:true,
                }
            });

        }

        jsE(item);
    });

    gsap.utils.toArray(".color-animation").forEach((item) => {
        item.style.setProperty("--color-animation-changed",item.getAttribute("data-animate-color-startcolor"));

        gsap.to(item, {"--color-animation-changed":item.getAttribute("data-animate-color-endcolor"),
            scrollTrigger: {
                trigger:item,
                start:item.getAttribute("data-animate-color-start"),
                end:item.getAttribute("data-animate-color-end"),
                ease:item.getAttribute("data-animate-color-ease"),
                markers:false,
                scrub:true,
            }
        });

        jsE(item);
    });

    gsap.utils.toArray(".opacity-animation").forEach((item) => {
        item.style.opacity=item.getAttribute("data-animate-opacity-startopacity");

        gsap.to(item, {css:{opacity:item.getAttribute("data-animate-opacity-endopacity")},
            scrollTrigger: {
                trigger:item,
                start:item.getAttribute("data-animate-opacity-start"),
                end:item.getAttribute("data-animate-opacity-end"),
                ease:item.getAttribute("data-animate-opacity-ease"),
                markers:false,
                scrub:true,
            }
        });

        jsE(item);
    });

    gsap.utils.toArray(".translateX-animation").forEach((item) => {
        gsap.from(item, {css:{x:item.getAttribute("data-animate-translateX-startpos")}});

        gsap.to(item, {css:{x:item.getAttribute("data-animate-translateX-endpos")},
            scrollTrigger: {
                trigger:item,
                start:item.getAttribute("data-animate-translateX-start"),
                end:item.getAttribute("data-animate-translateX-end"),
                ease:item.getAttribute("data-animate-translateX-ease"),
                scrub:true,
            }
        });

        jsE(item);
    });

    gsap.utils.toArray(".translateY-animation").forEach((item) => {
        item.style.translateY=item.getAttribute("data-animate-translateY-startpos");
        gsap.from(item, {css:{y:item.getAttribute("data-animate-translateY-startpos")}});

        gsap.to(item, {css:{y:item.getAttribute("data-animate-translateY-endpos")},
            scrollTrigger: {
                trigger:item,
                start:item.getAttribute("data-animate-translateY-start"),
                end:item.getAttribute("data-animate-translateY-end"),
                ease:item.getAttribute("data-animate-translateY-ease"),
                scrub:true,
            }
        });

        jsE(item);
    });

    function s7FakeHeaderOn() {
        document.getElementById("section-seven-fake-header").classList.remove("visibly-hidden");
        jsQ("#section-seven-fake-header");
    }

    function s7FakeHeaderOff() {
        document.getElementById("section-seven-fake-header").classList.add("visibly-hidden")
        jsQ("#section-seven-fake-header");
    }

    ScrollTrigger.matchMedia({

        "(min-width: 1000px)": function() {

            gsap.utils.toArray(".section.eight .section-header-container").forEach((item) => {
                item.style.position="relative";
                jsE(item);
            })

            gsap.to(".section.eight .section-header-container .text.one .sliding.one", {css:{translateX:-240},
                scrollTrigger: {
                    trigger:".section.eight",
                    start:"top-=200 top",
                    end:"+=300",
                    scrub:true,
                }
            });

            jsQ(".section.eight .section-header-container .text.one .sliding.one");

            gsap.to(".section.eight .section-header-container .text.one .sliding.two", {css:{translateX:300},
                scrollTrigger: {
                    trigger:".section.eight",
                    start:"top-=200 top",
                    end:"+=300",
                    scrub:true,
                }
            });

            jsQ(".section.eight .section-header-container .text.one .sliding.two");

            gsap.to(".section.eight .section-header-container .text.one .sliding.one", {css:{translateY:75},
                scrollTrigger: {
                    trigger:".section.eight",
                    start:"top+=100 top",
                    end:"+=200",
                    scrub:true,
                }
            });

            jsQ(".section.eight .section-header-container .text.one .sliding.one");

            gsap.to(".section.eight .section-header-container .text.one .sliding.two", {css:{translateY:-75},
                scrollTrigger: {
                    trigger:".section.eight",
                    start:"top+=100 top",
                    end:"+=200",
                    scrub:true,
                }
            });

            jsQ(".section.eight .section-header-container .text.one .sliding.two");

            gsap.to(".section.eight .section-header-container .text.one", {css:{translateX:-50},
                scrollTrigger: {
                    trigger:".section.eight",
                    start:"top+=100 top",
                    end:"+=200",
                    scrub:true,
                }
            });

            jsQ(".section.eight .section-header-container .text.one");

            gsap.to(".section.eight .section-header-container", {css:{position:"fixed",translateX:"-49%",left:"50%",top:"-40px",background:"var(--colors-grey-800)",marginBottom: 0,height: 170},
                scrollTrigger: {
                    trigger:".section.eight .section-header-container",
                    start:"top+=40 top",
                    end:"top+=40 top",
                    scrub:true,
                    onEnter:s7FakeHeaderOn,
                    onLeaveBack:s7FakeHeaderOff,
                }
            });

            jsQ(".section.eight .section-header-container");

            gsap.to(".section.eight .section-header-container", {css:{translateY:"-100%"},
                scrollTrigger: {
                    trigger:".section.eight .price-card.four",
                    start:"top+=200 top",
                    end:"+=340",
                    scrub:true,
                }
            });

            jsQ(".section.eight .section-header-container");

        }

    });

    ScrollTrigger.matchMedia({

        "(min-width: 686px)": function() {
            
            document.querySelectorAll("#s7img1").forEach((item) => {
                item.style.width="139px";
                item.style.margin="0px";
                item.style.borderRadius="4px";
                item.style.transform="translateY(-16px) scale(3.7)";
            });

            jsQ("#s7img1");

            gsap.to(".section.seven #s7img1", {css:{translateY:0,scale:1,borderRadius:"50%",margin:"0 16px",width:100},
                scrollTrigger: {
                    trigger:".section.seven #s7img1",
                    start:"bottom bottom",
                    end:"+=300",
                    scrub:true,
                }
            })

            jsQ(".section.seven #s7img1");

            document.querySelectorAll("#s7img2").forEach((item) => {
                item.style.width="139px";
                item.style.margin="0px";
                item.style.borderRadius="4px";
                item.style.transform="translateY(-16px) scale(3.7)";
            });

            jsQ("#s7img2")

            gsap.to(".section.seven #s7img2", {css:{translateY:0,scale:1,borderRadius:"50%",margin:"0 16px",width:100},
                scrollTrigger: {
                    trigger:".section.seven #s7img2",
                    start:"bottom bottom",
                    end:"+=300",
                    scrub:true,
                }
            });

            jsQ(".section.seven #s7img2");
            
                    
            gsap.utils.toArray(".section.seven .review-quote").forEach((item) => {
                item.style.opacity=0;

                gsap.to(item, {css:{opacity:1},
                    scrollTrigger: {
                        trigger:item,
                        start:"top bottom-=300",
                        end:"+=200",
                        scrub:true,
                    }
                });
            });

            jsQ(".section.seven .review-quote");

        },

        "(max-width: 686px)": function() {

            document.querySelectorAll("#s7img1").forEach((item) => {
                item.style.width="100px";
                item.style.margin="0px 16px";
                item.style.borderRadius="50%";
                item.style.transform="translateY(0) scale(1)";
            });

            jsQ("#s7img1");

            document.querySelectorAll("#s7img2").forEach((item) => {
                item.style.width="100px";
                item.style.margin="0px 16px";
                item.style.borderRadius="50%";
                item.style.transform="translateY(0) scale(1)";
            });

            jsQ("#s7img2");

            
            gsap.utils.toArray(".section.seven .review-quote").forEach((item) => {
                item.style.opacity=1;
            });

            jsQ(".section.seven .review-quote");

        }

    });

});