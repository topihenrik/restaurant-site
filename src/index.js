import "./style.css";
import {mainHomeComponent} from "./home"; 
import {mainMenuComponent} from "./menu";
import {mainContactComponent} from "./contact";
import faviconData from "./favicon.svg";


function initHome() {
    const favicon = document.createElement("link");
    favicon.setAttribute("rel", "icon");
    favicon.setAttribute("href", faviconData);
    document.head.appendChild(favicon);

    const content = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.className = "header";

    const h1HeaderTitle = document.createElement("h1");
    h1HeaderTitle.className = "headerTitle";
    h1HeaderTitle.textContent = "Candle";
    header.appendChild(h1HeaderTitle);

    const divHeaderMenu = document.createElement("div");
    divHeaderMenu.className = "menu";

    const divDivider = document.createElement("div");
    divDivider.className = "divider";
    divHeaderMenu.appendChild(divDivider.cloneNode());

    const divHeaderMenuHome = document.createElement("div");
    divHeaderMenuHome.className = "menuItem";
    divHeaderMenuHome.id = "menuHome";
    const pHeaderMenuHome = document.createElement("p");
    pHeaderMenuHome.textContent = "Home";
    pHeaderMenuHome.className = "menuItemText";
    divHeaderMenuHome.appendChild(pHeaderMenuHome);
    divHeaderMenu.appendChild(divHeaderMenuHome);
    divHeaderMenu.appendChild(divDivider.cloneNode());
    

    const divHeaderMenuMenu = document.createElement("div");
    divHeaderMenuMenu.className = "menuItem";
    divHeaderMenuMenu.id = "menuMenu"
    const pHeaderMenuMenu = document.createElement("p");
    pHeaderMenuMenu.textContent = "Menu";
    pHeaderMenuMenu.className = "menuItemText";
    divHeaderMenuMenu.appendChild(pHeaderMenuMenu);
    divHeaderMenu.appendChild(divHeaderMenuMenu);
    divHeaderMenu.appendChild(divDivider.cloneNode());

    const divHeaderMenuContact = document.createElement("div");
    divHeaderMenuContact.className = "menuItem";
    divHeaderMenuContact.id = "menuContact";
    const pHeaderMenuContact = document.createElement("p");
    pHeaderMenuContact.textContent = "Contact";
    pHeaderMenuContact.className = "menuItemText";
    divHeaderMenuContact.appendChild(pHeaderMenuContact);    
    divHeaderMenu.appendChild(divHeaderMenuContact);

    header.appendChild(divHeaderMenu);
    
    content.appendChild(header);



    content.appendChild(mainHomeComponent());


    const footer = document.createElement("div");
    footer.className = "footer";
    const pFooterText = document.createElement("p");
    pFooterText.className = "footerText";
    pFooterText.textContent = "Developed by topihenrik";
    footer.appendChild(pFooterText);
    content.appendChild(footer);

    return;
}

function menuClickListener() {
    const menuItems = document.querySelectorAll(".menuItem");
    menuItems.forEach(item => item.addEventListener("click", function(e) {
        console.log(item.id);
        const divContent = document.querySelector("#content");
        const divMain = document.querySelector(".main");
        const divFooter = document.querySelector(".footer");
        if (item.id == "menuHome") {
            divMain.remove();
            divContent.insertBefore(mainHomeComponent(), divFooter);
        } else if (item.id == "menuMenu") {
            divMain.remove();
            divContent.insertBefore(mainMenuComponent(), divFooter);
        } else if (item.id == "menuContact") {
            divMain.remove();
            divContent.insertBefore(mainContactComponent(), divFooter);
        }

    }));
}

initHome();
menuClickListener();