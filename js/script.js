const featureLinksList = document.querySelector(".b-features__links");
const featureLinks = document.querySelectorAll(".b-features__links li");
const features = document.querySelectorAll(".b-feature");

featureLinks.forEach((item) => {
    item.addEventListener("click", (event) => {
        let activeFeatureLink = document.querySelector(".b-feature__link--active");
        let selectedFeatureLink = event.currentTarget;
        if (selectedFeatureLink != activeFeatureLink) {
            activeFeatureLink.classList.remove("b-feature__link--active");
            selectedFeatureLink.classList.add("b-feature__link--active");
            let visibleFeature = document.querySelector(".b-feature:not(.b-feature--hidden)");
            let selectedFeatureIndex = Array.from(featureLinksList.children).indexOf(selectedFeatureLink);
            let selectedFeature = features[selectedFeatureIndex];
            visibleFeature.classList.add("b-feature--hidden");
            selectedFeature.classList.remove("b-feature--hidden");
        };
    });
});

const faqQuestions = document.querySelectorAll(".b-faq__question");

faqQuestions.forEach((item) => {
    item.addEventListener("click", (event) => {
        let activeQuestionContainer = document.querySelector(".b-faq__question--visible");
        let selectedQuestionContainer = event.currentTarget.closest(".b-faq__question-container");
        if (activeQuestionContainer) {
            activeQuestionContainer.classList.remove("b-faq__question--visible");
        };
        if (activeQuestionContainer != selectedQuestionContainer) {
            selectedQuestionContainer.classList.add("b-faq__question--visible");
        };
    });
});

const contactBtn = document.querySelector(".b-footer__contact .b-btn");
const contactInput = document.querySelector(".b-footer__contact input");
const contactBtnContainer = document.querySelector(".b-footer__contact-container");
const errorMsg = document.querySelector(".b-footer__contact-error");

function isValid(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
};

contactBtn.addEventListener("click", () => {
    let email = contactInput.value;
    if (!isValid(email)) {
        contactBtnContainer.classList.add("b-footer__contact--error");
        errorMsg.textContent = "Whoops, make sure it's an email";
    } else {
        contactBtnContainer.classList.remove("b-footer__contact--error");
        errorMsg.textContent = "";
    }
});

const html = document.querySelector("html");
const navBtn = document.querySelector(".b-nav__button");
const closeBtn = document.querySelector(".b-nav__button-close");
const logoImg = document.querySelector(".b-header__mobile > .b-logo img");
const mobileDiv = document.querySelector(".b-nav__mobile");

navBtn.addEventListener("click", () => {
    logoImg.classList.add("b-hidden");
    navBtn.classList.add("b-hidden");
    mobileDiv.classList.remove("b-hidden");
    html.classList.add("b-no-scroll");
});

closeBtn.addEventListener("click", () => {
    mobileDiv.classList.add("b-hidden");
    html.classList.remove("b-no-scroll");
    logoImg.classList.remove("b-hidden");
    navBtn.classList.remove("b-hidden");
});