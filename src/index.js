import _ from 'lodash';
import './style.css';
import { homeContent } from "../src/tabs/home";
import { menuContent } from "../src/tabs/menu";
import { contactContent } from "../src/tabs/contact";

const buttons = document.querySelectorAll('button');
const content = document.querySelector('#content');
const header = document.querySelector('header');
const logo = document.createElement('img');
logo.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5_xeVVQgT8xIgR9C1rNRc2s81Er3BkJHoKkhJR8y02hkJEvsSyWUrp7Cqg&s`
logo.classList.add('logo')


header.appendChild(logo);

console.log(logo)

content.appendChild(homeContent());
content.appendChild(menuContent());
content.appendChild(contactContent());


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonId = e.target.id;
        content.innerHTML = '';

        switch (buttonId) {
            case 'home-btn':
                content.appendChild(homeContent());
                break;
            case 'menu-btn':
                content.appendChild(menuContent());
                break;
            case 'contact-btn':
                content.appendChild(contactContent());
                break;
            default:
                break;
        }
    })
});
