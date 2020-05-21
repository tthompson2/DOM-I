const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Code to build Nav Bar

var hEdit = document.querySelectorAll('a');

for (let i = 0; i < 6; i++)
{
  hEdit[i].textContent = siteContent['nav']['nav-item-' + (i+1)];
  hEdit[i].style.color = "yellow";
}

// End of code to build Nav Bar

// Beginning of code to put content on page

let ctaEdit = document.getElementById("cta-img");
ctaEdit.setAttribute('src', siteContent['cta']['img-src']);

let ctaH1 = document.getElementsByTagName("h1");
ctaH1[0].textContent = siteContent['cta']['h1'];

let ctaButton = document.getElementsByTagName("button");
ctaButton[0].textContent = siteContent['cta']['button'];

let mainTextH4 = document.querySelectorAll('h4');
mainTextH4[0].textContent = siteContent['main-content']['features-h4'];

let mainP = document.querySelectorAll('p');
mainP[0].textContent = siteContent['main-content']['features-content'];

mainTextH4[1].textContent = siteContent['main-content']['about-h4'];
mainP[1].textContent = siteContent['main-content']['about-content'];

mainTextH4[2].textContent = siteContent['main-content']['services-h4'];
mainP[2].textContent = siteContent['main-content']['services-content'];

mainTextH4[3].textContent = siteContent['main-content']['product-h4'];
mainP[3].textContent = siteContent['main-content']['product-content'];

mainTextH4[4].textContent = siteContent['main-content']['vision-h4'];
mainP[4].textContent = siteContent['main-content']['vision-content'];

// End of code to put content in body

// Code to place footer content


mainTextH4[5].textContent = siteContent['contact']['contact-h4'];
mainP[5].textContent = siteContent['contact']['address'];
mainP[6].textContent = siteContent['contact']['phone'];
mainP[7].textContent = siteContent['contact']['email']; 

mainP[8].textContent = siteContent['footer']['copyright'];


// Code to place footer content


let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

var parent = document.querySelector('nav');

var aTagPrepend = document.createElement('a');

aTagPrepend.textContent = 'PrependTest';

parent.prepend(aTagPrepend);

var aTag = document.createElement('a');

aTag.textContent = 'AppendTest';

parent.appendChild(aTag);

// Stretch Goals 

document.body.style.backgroundColor = 'purple';

let siteRefactorBtn = document.createElement("button");
siteRefactorBtn.textContent = "Refactor Button";
footerElement = document.querySelector("footer");
footerElement.appendChild(siteRefactorBtn);

siteRefactorBtn.addEventListener("click", () => {

    newBtn = document.createElement("button");
    newBtn.textContent = "Button Added!"
    footerElement.appendChild(newBtn);

});