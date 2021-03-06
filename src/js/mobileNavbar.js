class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
            }s`);
        });
    }
    
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        content.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    init() {
        if(this.mobileMenu)
            this.addClickEvent();

        return this;
    }
}

const content = document.getElementById("content");
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav_list",
    ".nav_item, .nav_tel",
);

let clickedOutside = document.body.addEventListener("click", function(evt) {
    let elem = evt.target.offsetParent;
    console.log(evt.target)
    if(content.classList.contains("active") && elem.id !== "navbar")
        mobileNavbar.handleClick();
});

mobileNavbar.init();