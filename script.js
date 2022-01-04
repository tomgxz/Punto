function letterWrapper(query) {
    var wrapper = document.querySelectorAll(query)
    wrapper.forEach((item) => {
        item.innerHTML=item.textContent.replace(/\S/g, "<span class='letter jsedited' style='display:inline-block'>$&</span>");
        jsE(item);
    })
    jsE(wrapper);
}

function jsQ(query) {
    try {
        document.querySelectorAll(query).forEach((item) => {item.classList.add("jsedited")});
    } catch(e) {
        console.log(e)
    }
}

function jsE(el) {
    try {
        el.classList.add("jsedited");
    } catch(e) {
        console.log(e)
    }
}

$(document).ready(function () {

document.body.classList.remove("visibly-hidden");
jsE(document.body)

gsap.registerPlugin(ScrollTrigger);

letterWrapper(".globalnav .globalnav-link-text");
letterWrapper(".section.one .section-header-container .text.one");

document.querySelectorAll(".globalnav .globalnav-link-text .letter, .globalnav .globalnav-link-text:before").forEach((item) => {item.style.opacity=0;item.style.translateX=40;jsE(item);
});

document.querySelectorAll(".globalnav .globalnav-link-home svg").forEach((item) => {
    item.style.opacity=0;item.style.translateY=60;jsE(item);
});

document.querySelectorAll(".section.one .section-header-container .text-reveal-line.one").forEach((item) => {
    item.style.opacity=0;item.style.scaleY=0;item.style.translateX=0;jsE(item);
});

document.querySelectorAll(".section.one .section-header-container .text.one .letter").forEach((item) => {
    item.style.opacity=0;jsE(item);
});

document.querySelectorAll(".section.one .section-header-container .text.two").forEach((item) => {
    item.style.opacity=0;jsE(item);
});

document.querySelectorAll(".section.two").forEach((item) => {
    item.style.opacity=0;jsE(item);
});

document.querySelectorAll(".globalnav .globalnav-content").forEach((item) => {
    item.style.opacity=1;jsE(item);
});

document.querySelectorAll(".section.four .activity-panel").forEach((item) => {
    item.style.opacity=0;jsE(item);
})

document.querySelectorAll(".section.four .text.two").forEach((item) => {
    item.style.opacity=0;jsE(item);
})

document.querySelectorAll(".section.four .text.three").forEach((item) => {
    item.style.opacity=0;jsE(item);
})


anime.timeline({loop:false})
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
    })


jsQ(".section.one .section-header-container .text-reveal-line.one");
jsQ(".section.one .section-header-container .text-reveal-line.one");
jsQ(".section.one .section-header-container .text.one .letter");
jsQ(".section.one .section-header-container .text-reveal-line.one");
jsQ(".section.one .section-header-container .text.two");
jsQ(".globalnav .globalnav-link-home svg");
jsQ(".globalnav .globalnav-link-text .letter");

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

gsap.utils.toArray(".section.section-parallax-background").forEach((section, i) => {
    section.bg = section.querySelector(".section-background"); 

    jsE(section.bg)

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

jsQ(".section.four .text.two");

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

jsQ(".section.four .text.three");

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
});

gsap.utils.toArray(".translateX-animation").forEach((item) => {
    gsap.from(item, {css:{x:item.getAttribute("data-animate-translateX-startpos")}});

    gsap.to(item, {css:{x:item.getAttribute("data-animate-translateX-endpos")},
        scrollTrigger: {
            trigger:item,
            start:item.getAttribute("data-animate-translateX-start"),
            end:item.getAttribute("data-animate-translateX-end"),
            ease:item.getAttribute("data-animate-translateX-ease"),
            markers:true,
            scrub:true,
        }
    });
});

gsap.utils.toArray(".translateY-animation").forEach((item) => {
    gsap.from(item, {css:{y:item.getAttribute("data-animate-translateY-startpos")}});

    gsap.to(item, {css:{y:item.getAttribute("data-animate-translateY-endpos")},
        scrollTrigger: {
            trigger:item,
            start:item.getAttribute("data-animate-translateY-start"),
            end:item.getAttribute("data-animate-translateY-end"),
            ease:item.getAttribute("data-animate-translateY-ease"),
            markers:true,
            scrub:true,
        }
    });
});


const asteroidCanvas = document.getElementById("asteroid-animation-canvas");
const context = canvas.getContext("2d");

canvas.width = 1158;
canvas.height = 770;

const frameCount = 147;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
);

const images = []
const airpods = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0); 
}



});