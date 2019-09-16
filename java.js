let burger = document.querySelector('.burger');
let section = document.querySelector('.menu');
burger.addEventListener('click', function () {
    this.classList.toggle('active');
    section.classList.toggle('left');
})

// ScrollEffect
let doc = $(document);
let header = $('header');
let aboutMe = $('.aboutMe');
doc.on('scroll', function () {
    let scrollPos = doc.scrollTop();
    let mainOffset = aboutMe.offset().top;
    let headerHeight = header.height();
    header.css({
        'filter': 'grayscale(' + 2 * scrollPos / headerHeight + ')'
    });

})

// Scroll About

$(document).on('scroll', function () {
    let scrollValue = $(this).scrollTop();
    let about = $('.aboutMe h1');
    let aboutMeFromTop = about.offset().top;
    let aboutMeHeight = about.outerHeight();

    if (scrollValue > aboutMeFromTop + aboutMeHeight - $(window).height()) {
        about.addClass('active');
    }


})
//Scroll Technologies
$(document).on('scroll', function () {
    let scrollValue = $(this).scrollTop();
    let skill = $('.languages h1');
    let skillOfTheTop = skill.offset().top;
    let skillHeight = skill.outerHeight();

    if (scrollValue > skillOfTheTop + skillHeight - $(window).height()) {
        skill.addClass('active');
    }


})

//Scroll mySkills
$(document).on('scroll', function () {
    let div = $('.mySkills div');
    let scrollValue = $(this).scrollTop();
    let mySkill = $('.mySkills');
    let mySkillsOfTheTop = mySkill.offset().top;
    let mySkillsHeight = mySkill.outerHeight();

    if (scrollValue > mySkillsOfTheTop + mySkillsHeight - $(window).height() - 100) {
        div.addClass('show')

    }


})
// Scroll Projects

$(document).on('scroll', function () {
    let scrollValue = $(this).scrollTop();
    let project = $('.projects h1');
    let projectsFromTop = project.offset().top;
    let projectHeight = project.outerHeight();

    if (scrollValue > projectsFromTop + projectHeight - $(window).height()) {
        project.addClass('active');
    }


})

//Show arts
$(document).on('scroll', function () {
    let scroll = $(this).scrollTop();
    let art1 = $('.art1');
    let art1FromTop = art1.offset().top;
    let art1Height = art1.outerHeight();
    let art2 = $('.art2');
    let art2FromTop = art2.offset().top;
    let art2Height = art2.outerHeight();
    let art3 = $('.art3');
    let art3FromTop = art3.offset().top;
    let art3Height = art3.outerHeight();
    let art4 = $('.art4');
    let art4FromTop = art4.offset().top;
    let art4Height = art4.outerHeight();
    if (scroll > art1FromTop + art1Height - $(window).height()) {
        art1.addClass('back');
    }
    if (scroll > art2FromTop + art2Height - $(window).height()) {
        art2.addClass('back');
    }
    if (scroll > art3FromTop + art3Height - $(window).height()) {
        art3.addClass('back');
    }
    if (scroll > art4FromTop + art4Height - $(window).height()) {
        art4.addClass('back');
    }

})

//Pop-up

const projectTwo = document.querySelector('.projectTwo');
const projectThree = document.querySelector('.projectThree');
const projectFour = document.querySelector('.projectFour');

$('.projectOne').on('click', function () {
    $('.modal-wrap1').addClass('activePop');
    $('.wrapper').addClass('blur');
});
$('.hide').on('click', function () {
    $('.modal-wrap1').removeClass('activePop');
    $('.wrapper').removeClass('blur');
})

$('.projectTwo').on('click', function () {
    $('.modal-wrap2').addClass('activePop');
    $('.wrapper').addClass('blur');
});
$('.hide').on('click', function () {
    $('.modal-wrap2').removeClass('activePop');
    $('.wrapper').removeClass('blur');
})
$('.projectThree').on('click', function () {
    $('.modal-wrap3').addClass('activePop');
    $('.wrapper').addClass('blur');
});
$('.hide').on('click', function () {
    $('.modal-wrap3').removeClass('activePop');
    $('.wrapper').removeClass('blur');
})
$('.projectFour').on('click', function () {
    $('.modal-wrap4').addClass('activePop');
    $('.wrapper').addClass('blur');
});
$('.hide').on('click', function () {
    $('.modal-wrap4').removeClass('activePop');
    $('.wrapper').removeClass('blur');
})

//Contact scroll
$(document).on('scroll', function () {
    let scrollValue = $(this).scrollTop();
    let contact = $('.contactMe h1');
    let contactMeFromTop = contact.offset().top;
    let contactMeHeight = contact.outerHeight();

    if (scrollValue > contactMeFromTop + contactMeHeight - $(window).height()) {
        contact.addClass('active');
    }


})




//scroll

$(window).on('scroll', function () {
    let scrollValue = $(this).scrollTop();
    let contact = $('.textTyping');
    let contactMeFromTop = contact.offset().top;
    let contactMeHeight = contact.outerHeight();

    if ((scrollValue > (contactMeFromTop + contactMeHeight + 10) - $(window).height())) {
        const spnText = document.querySelector('.textTyping');
        const txt = `Let's get in touch via email or social media!!!`;

        let indexText = 0;
        const time = 40;

        const addLetter = () => {
            spnText.textContent += txt[indexText];
            indexText++;
            if (indexText === txt.length) clearInterval(indexTyping);
        }


        const indexTyping = setInterval(addLetter, time);
        $(window).off('scroll')
    }


})

//Scroll ul
$(document).on('scroll', function () {
    let ul = $('.address ul');
    let scrollValue = $(this).scrollTop();
    let address = $('.address');
    let addressOfTheTop = address.offset().top;
    let addressHeight = address.outerHeight();

    if (scrollValue > addressOfTheTop + addressHeight - $(window).height() - 100) {
        ul.addClass('active')

    }


})