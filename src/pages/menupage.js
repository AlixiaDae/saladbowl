import menuBackgroundImage from '../images/freddy-castro-u3ajSXhZM_U-unsplash.jpg'

function menuContent() {
    const menu = document.createElement('div')
    menu.classList.add('menu-page')
    menu.style.backgroundImage = `url(${menuBackgroundImage})`

    const menuWrapper = document.createElement('div')
    menuWrapper.classList.add('menu-wrapper')
    menu.appendChild(menuWrapper)

    const menuHeader = document.createElement('h1')
    menuHeader.textContent = 'Menu'
    menuWrapper.appendChild(menuHeader)

    menuWrapper.appendChild(menuItem(`Farmers' Feast`, `Boasting the best of choice favorites by your local farmers, this feast is guaranteed to help you appreciate the taste of home`))

    menuWrapper.appendChild(menuItem(`Strawberry Explosion`, `Tart and Sweet? Enjoy the fragrance of bright strawberries and the soft, luxurious flavor of cheese`))

    menuWrapper.appendChild(menuItem(`Honey Lemon`, `Another classic combination: sour lemon with delicate drizzles of honey creates a beautiful symphony that keeps you eating those healthy greens`))

    return menu
}

function menuItem(name,description) {
    const menuItemWrapper = document.createElement('div')
    menuItemWrapper.classList.add('menu-item-wrapper')

    const menuName = document.createElement('div')
    menuName.textContent = `${name}`
   
    const menuDescription = document.createElement('div')
    menuDescription.textContent = description

    const line = document.createElement('div')
    line.classList.add('line')

    menuItemWrapper.appendChild(menuName)
    menuItemWrapper.appendChild(menuDescription)
    menuItemWrapper.appendChild(line)

    return menuItemWrapper
}

function menuPage() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(menuContent())
}

export default menuPage