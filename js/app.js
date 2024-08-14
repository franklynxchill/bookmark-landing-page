const hamburger = document.querySelector("#hamburger");
const menuClose = document.getElementById('menu-close');
const menuBtn = document.getElementById("menu-btn");

const accordionHeading = document.querySelectorAll(".accordion-heading");
const accordionContent = document.querySelectorAll('.accordion-content');

hamburger.addEventListener('click', () => {
  menuBtn.classList.toggle('display')
})

menuClose.addEventListener('click', () => {
  menuBtn.classList.remove('display');
})

//feature
const featureTab = document.querySelectorAll(".feature-tab");
const tabContent = document.querySelectorAll(".tab-content");

featureTab.forEach((tab, index) => {
  tab.addEventListener('click', ()=> {
    featureTab.forEach((tab) => {
      tab.classList.remove('tab-active');
    });
    tabContent.forEach((content) => {
      content.classList.remove('content-active')
    });
    featureTab[index].classList.add('tab-active');
    tabContent[index].classList.add('content-active');
  });
})


//faq
const faqItem = document.querySelectorAll('.faq-item')

faqItem.forEach((item) => {
  const accordionHeading = item.querySelector(".accordion-heading");

  item.addEventListener('click', () => {
    item.classList.toggle('accordion-open');
    accordionHeading.classList.toggle('accordion-active');
  })
});


//form

const email = document.getElementById('email');
const error = document.getElementById('error');
const inputGroup = document.getElementById('input-group');
const errorIcon = document.getElementById('error-icon');

email.addEventListener('input', ()=> {
  
  if(email.value.length == ""){
    errorIcon.style.display = 'block';
    error.style.display = 'block';
    inputGroup.style.borderColor = 'hsl(0, 94%, 66%)';
    inputGroup.style.borderWidth = '3px';
  }
  else {
    errorIcon.style.display = 'none';
    error.style.display = 'none';
    inputGroup.style.borderWidth = '0';
  }

  if(!email.value.matches(/^[A-Za-a]\._\-[0-9]*[@][A-Za-z]*[\.]{2,3}$/)) {
    error.style.display = 'block';
  }
  else{
    error.style.display = 'none';
  }
})