$(document).ready(function () {

    ScrollTrigger.matchMedia({
        "(prefers-reduced-motion: reduce)": function() {
            console.log("Reduced Motion");

            document.querySelectorAll('.section.one .word-cloud-container svg path').forEach((item) => {
                item.style.opacity=1;
            });

            gsap.set("body",{"--background-rad-grad-c2-percent": "65%","--background-rad-grad-c3-percent": "100%"});

            document.querySelectorAll(".horizontal-section-container").forEach((item) => {
                item.style.maxWidth="100vw";
                item.style.flexDirection="column";
                item.style.flexWrap="nowrap";
                item.style.overflowX="hidden";
                item.style.height="fit-content";
            });

            document.querySelectorAll(".section").forEach((item) => {
                item.style.marginBottom="128px";
            });

        },

        "(prefers-reduced-motion: no-preference)": function() {
            console.log("No Reduced Motion");

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

            gsap.to("body",{"--background-rad-grad-c2-percent": "65%","--background-rad-grad-c3-percent": "100%",duration:10});

            ScrollTrigger.matchMedia({
                "(min-width: 681px)": function() {

                    document.querySelectorAll(".globalnav").forEach((item) => {
                        item.style.height=96
                    });

                    document.querySelectorAll(".globalnav-list").forEach((item) => {
                        item.style.height=96
                    });

                    document.querySelectorAll(".globalnav .globalnav-link-home svg").forEach((item) => {
                        item.style.paddingTop=24;item.style.paddingBottom=24;
                    });

                    gsap.to(".globalnav", {css:{height:52},
                        scrollTrigger: {
                            trigger:".globalnav",
                            start:"top+=1 top",
                            end:"+=100",
                            markers:false,
                            scrub:true,
                        }
                    });

                    gsap.to(".globalnav-list", {css:{height:52},
                        scrollTrigger: {
                            trigger:".globalnav",
                            start:"top+=1 top",
                            end:"+=100",
                            markers:false,
                            scrub:true,
                        }
                    });

                    gsap.to(".globalnav .globalnav-link-home svg", {css:{paddingTop:0,paddingBottom:0,},
                        scrollTrigger: {
                            trigger:".globalnav",
                            start:"top+=1 top",
                            end:"+=100",
                            markers:false,
                            scrub:true,
                        }
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
                                end: "+=%".replace("%",innerWidth * 2),
                                scrub: true,
                                pin: true,
                                anticipatePin: 1
                            }
                        });
                    });

                }
            
            });
        }
    });

});



