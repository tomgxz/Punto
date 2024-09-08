function letterWrapper(query) {
    var wrapper = document.querySelectorAll(query);
    wrapper.forEach((item) => {
        item.innerHTML=item.textContent.replace(/\w/g, "<span class='letter js' style='display:inline-block'>$&</span>");
        jsE(item);
    });
}

function wordWrapper(query) {
    var wrapper = document.querySelectorAll(query);
    wrapper.forEach((item) => {
        item.innerHTML=item.textContent.replace(/\w+/g,"<span class='word js' style='display:inline-block'>$&</span>");
        jsE(item);
    });
}

function lineWrapper(query) {
    var wrapper = document.querySelectorAll(query);
    wrapper.forEach((item) => {
        item.innerHTML=item.textContent.replace(/.+$/gm,"<span class='line js' style='display:inline-block'>$&</span>");
        jsE(item);
    });
}

function jsQ(query) {
    try {
        document.querySelectorAll(query).forEach((item) => {item.classList.add("js")});
    } catch(e) {
        console.log(e)
    }
}

function jsE(el) {
    try {
        el.classList.add("js");
    } catch(e) {
        console.log(e)
    }
}

$(document).ready(function () {
    document.body.classList.remove("visibly-hidden");
    jsE(document.body)
});