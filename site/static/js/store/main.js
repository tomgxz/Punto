$(document).ready(function() {

    function shiftSections(selected) {
        itera=selected-1;
        document.querySelectorAll(".sections").forEach((item) => {
            item.style.left="{}px".replace("{}",-1*item.offsetWidth*itera);
            itera-=1;
        });
        loadAnimations(selected);
    }

    function loadAnimations(selected) {
        gsap.killTweensOf("*")

        if (selected==1) {
            ScrollTrigger.matchMedia({

                "(prefers-reduced-motion: reduce)": function() {
                    console.log("Reduced Motion");

                    gsap.set(".performance-swipe-section-after",{css:{clipPath:"none"}});
                    gsap.set(".sections-backpacks .sticky-wrap",{css:{height:"auto"}});

                    gsap.utils.toArray(".section.three .bento-box.seven .bento-box-content .text.background-clip").forEach((item) => {
                        gsap.set(item,{css:{backgroundPositionY:"100%"}});
                    });
                },

                "(prefers-reduced-motion: no-preference)": function() {

                    console.log("No Reduced Motion");

                    gsap.set(".performance-swipe-section-after", {css:{clipPath: "inset(100% 0px 0px)"}})

                    gsap.to(".performance-swipe-section-after", {css:{clipPath: "inset(0% 0px 0px)"},
                        scrollTrigger: {
                            trigger: ".performance-swipe-section-after",
                            start: "top top",
                            end: "+=750",
                            scrub: true,
                            ease: "none",
                        }
                    });

                    gsap.set(".section.two .figure-container", {css:{y:100,opacity:0}});

                    gsap.to(".section.two .figure-container", {css:{y:0,opacity:1},
                        scrollTrigger: {
                            trigger: ".section.two .figure-container",
                            start: "top bottom",
                            end: "+=350",
                            scrub: true,
                            ease: "none",
                        }
                    });

                    gsap.utils.toArray(".sections-backpacks .section.three .bento-box").forEach((item) => {
                        gsap.set(item,{css:{opacity:0,y:40}});

                        var start="top+=200 bottom";

                        if (item.classList.contains("five") || item.classList.contains("six")) {
                            start="top+=400 bottom"
                        }

                        gsap.to(item,{css:{opacity:1,y:0},
                            scrollTrigger: {
                                trigger: item,
                                start: start,
                                end: "+=500",
                                scrub: true,
                                ease: "none",
                            }
                        });
                    });

                    gsap.utils.toArray(".section.three .bento-box.seven .bento-box-content .text.background-clip").forEach((item) => {
                        gsap.set(item,{css:{backgroundPositionY:"0%"}});

                        gsap.to(item, {
                            scrollTrigger: {
                                trigger: item,
                                toggleActions: "restart pause resume pause",
                                start: "bottom bottom",
                            },
                            duration: 2, 
                            backgroundPositionY: "100%",
                            ease: "none"
                        });

                        gsap.to(item, {
                            scrollTrigger: {
                                trigger: item,
                                toggleActions: "restart pause pause pause",
                                start: "top bottom",
                            },
                            duration: 0, 
                            backgroundPositionY: "0%",
                            ease: "none"
                        });

                    });

                    gsap.set(".section.seven",{autoAlpha:0});

                }

            });
        }

        if (selected==2) {
            gsap.set(".section.seven",{autoAlpha:1});

            gsap.utils.toArray(".section.five .headline-vertical-list .text").forEach((item) => {
                gsap.set(item,{css:{opacity:0,y:120}});

                ScrollTrigger.create({
                    trigger: item,
                    start: "bottom-=50% bottom",
                    onEnter: () => gsap.to(item, {
                        y: 0,
                        opacity: 1,
                    }),
                    onLeaveBack: () => gsap.to(item, {
                        y: 120,
                        opacity: 0,
                    }),
                });

            });

            gsap.utils.toArray(".section.six .figure-container.one .figure").forEach((item) => {
                gsap.set(item,{css:{opacity:0,backgroundSize:"0px 495.5px",transform:"skew(341deg, 16deg)"}});

                ScrollTrigger.create({
                    trigger: item,
                    start: "top+=20% bottom",
                    onEnter: () => gsap.to(item, {
                        backgroundSize:"932px 495.5px",
                        opacity: 1,
                        transform: "skew(0deg, 0deg)",
                    }),
                    onLeaveBack: () => gsap.to(item, {
                        backgroundSize:"0px 495.5px",
                        opacity: 0,
                        transform: "skew(341deg, 16deg)",
                    }),
                });

            });

            gsap.set(".section.seven .figure-container.one .figure.one", {css:{x:"-50%"}});
            gsap.set(".section.seven .figure-container.one .figure.two", {css:{x:"-50%"}});
                
            gsap.to(".section.seven .figure-container.one .figure.one", {css:{x:"-85%"},
                scrollTrigger: {
                    trigger: ".section.seven",
                    pin: ".section.seven",
                    anticipatePin:1,
                    start: "top top",
                    end: "+=800",
                    scrub:true,
                }
            });

            gsap.to(".section.seven .figure-container.one .figure.two", {css:{x:"-15%"},
                scrollTrigger: {
                    trigger: ".section.seven",
                    start: "top top",
                    end: "+=800",
                    scrub:true,
                }
            });

            gsap.set(".section.eight .image-wrapper .image-overflow-crop", {css:{y:150}})

            gsap.to(".section.eight .image-wrapper .image-overflow-crop", {css:{y:0},
                scrollTrigger: {
                    trigger: ".section.eight",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub:true,
                }
            });

            gsap.set("body",{css:{backgroundColor:"rgb(131, 174, 236)"}})

            gsap.to("body",{css:{transition:"none"},scrollTrigger:{trigger:".section.seven",start:"top bottom",scrub:true,}});
            gsap.to("body",{css:{backgroundColor:"rgb(2 108 72)"},
                scrollTrigger: {
                    trigger:".section.eight",
                    start:"top bottom",
                    end:"bottom bottom",
                    scrub:true
                }
            });

            gsap.to(".section.eight .image-wrapper picture",{css:{filter:"drop-shadow(0px -94px 25px rgb(131, 174, 236))"}});

            gsap.to(".section.eight .image-wrapper picture",{css:{filter:"drop-shadow(0px -94px 25px rgb(2 108 72))"},
                scrollTrigger: {
                    trigger:".section.eight",
                    start:"top bottom",
                    end:"bottom bottom",
                    scrub:true
                }
            });
        }
    }

    var selectedSection=1;

    $(function() {
        $(".localnav-tab-menu .localnav-tab-item").click(function() {
            $(".localnav-tab-menu .localnav-tab-item").removeClass("active");
            $(this).addClass("active");
            if ($(this).hasClass("one")) {shiftSections(1);selectedSection=1}
            if ($(this).hasClass("two")) {shiftSections(2);selectedSection=2}
            if ($(this).hasClass("three")) {shiftSections(3);selectedSection=3}
            if ($(this).hasClass("four")) {shiftSections(4);selectedSection=4}
            var color = this.style.getPropertyValue('--tab-menu-item-active-color');
            document.body.style.backgroundColor = color;
            $(".localnav-tab-menu .localnav-tab-overlay").css({
                left: $(this).prevAll().length * 119 + "px",
                backgroundColor: color,
            });
        });
    });

    

    shiftSections(1);

});