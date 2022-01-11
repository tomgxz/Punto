$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

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
});