import homePage from './pages/homepage'
import menuPage from './pages/menupage'
import contactPage from './pages/contactpage'

function navBar() {
    const navWrapper = document.createElement('div')
    navWrapper.classList.add('nav-bar')

    const logo = document.createElement('div')
    logo.classList.add('nav-button')
    logo.textContent = 'Salad Bowl'
    logo.classList.add('logo')
    logo.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return
        setActiveBtn(logo)
        homePage()
    })
    navWrapper.appendChild(logo)

    const homeBtn = document.createElement('div')
    homeBtn.classList.add('nav-button')
    homeBtn.textContent = 'Home'
    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return
        setActiveBtn(homeBtn)
        homePage()
    })
    navWrapper.appendChild(homeBtn)

    const menuBtn = document.createElement('div')
    menuBtn.classList.add('nav-button')
    menuBtn.textContent = 'Menu'
    menuBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return
        setActiveBtn(menuBtn)
        menuPage()
    })
    navWrapper.appendChild(menuBtn)

    const contactBtn = document.createElement('div')
    contactBtn.classList.add('nav-button')
    contactBtn.textContent = 'Contact'
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return
        setActiveBtn(contactBtn)
        contactPage()
    } )
    navWrapper.appendChild(contactBtn)

    return navWrapper
}

function mainContent() {
    const main = document.createElement('div')
    main.id = 'main'
 
    return main
}

function setActiveBtn(button) {
    const navigationButtons = document.querySelectorAll('.nav-button')
    navigationButtons.forEach(button => {
        if(button !== this) {
            button.classList.remove('active')
        }
    })
    button.classList.add('active')
}

function footerBar() {
    const footer = document.createElement('div')
    footer.classList.add('footer')

    const footerLeft = document.createElement('div')
    footerLeft.textContent = '©Salad Bowl 2022'
    footer.appendChild(footerLeft)

    const footerRightWrapper = document.createElement('div')
    footerRightWrapper.classList.add('footer-right-wrapper')
    footer.appendChild(footerRightWrapper)

    const footerRight = document.createElement('div')
    footerRight.textContent = 'Made for OdinProject'
    footerRightWrapper.appendChild(footerRight)

    const footerRightLink = document.createElement('a')
    footerRightLink.textContent = 'AlixiaDae'
    footerRightLink.href = 'https://github.com/AlixiaDae'
    footerRightWrapper.appendChild(footerRightLink)

    return footer
}

function loadPage() {
    const content = document.getElementById('content')

        content.appendChild(navBar())
        content.appendChild(mainContent())
        content.appendChild(footerBar())

        setActiveBtn(document.querySelector('.nav-button')) 
        homePage()
}


loadPage()
