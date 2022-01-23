$(document).ready(function() {

    $(function() {
        $(".localnav-tab-menu .localnav-tab-item").click(function() {
            $(".localnav-tab-menu .localnav-tab-item").removeClass("active");
            $(this).addClass("active");
            var color = this.style.getPropertyValue('--tab-menu-item-active-color');
            document.body.style.backgroundColor = color;
            $(".localnav-tab-menu .localnav-tab-overlay").css({
                left: $(this).prevAll().length * 119 + "px",
                backgroundColor: color,
            });
        });
    });

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
        gsap.set(item,{css:{opacity:0,y:80}});

        var start="top+=200 bottom";

        if (item.classList.contains("five")) {
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

});