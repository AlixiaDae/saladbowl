import contactPage from "./contactpage";
import homePage from "./homePage";


function navBar() {
    const navWrapper = document.createElement('div')
    navWrapper.classList.add('nav-bar')

    const logo = document.createElement('div')
    logo.textContent = 'Salad Bowl'
    logo.classList.add('logo')
    navWrapper.appendChild(logo)

    const homeBtn = document.createElement('div')
    homeBtn.textContent = 'Home'
    navWrapper.appendChild(homeBtn)

    const menuBtn = document.createElement('div')
    menuBtn.textContent = 'Menu'
    navWrapper.appendChild(menuBtn)

    const contactBtn = document.createElement('div')
    contactBtn.textContent = 'Contact'
    navWrapper.appendChild(contactBtn)

    return navWrapper
}

function footerBar() {
    const footer = document.createElement('div')
    footer.classList.add('footer')

    const footerLeft = document.createElement('div')
    footerLeft.textContent = '©Salad Bowl 2022'
    footer.appendChild(footerLeft)

    const footerRight = document.createElement('div')
    footerRight.textContent = 'Made for OdinProject by AlixiaDae'
    footer.appendChild(footerRight)

    return footer
}

function firstLoad() {
    const content = document.getElementById('content')
        content.appendChild(navBar())
        content.appendChild(homePage())
        content.appendChild(footerBar())
    return content
}

function loadPage() {
    const content = document.getElementById('content')
        content.appendChild(navBar())
        content.appendChild(contactPage())
        content.appendChild(footerBar())
    return content
}

loadPage()
