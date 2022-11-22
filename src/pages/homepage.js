import bannerImage from '../images/louis-hansel-MlPD-AzZYMg-unsplash.jpg'
import salad1 from '../images/salad.jpg'
import salad2 from '../images/mariana-medvedeva-fk6IiypMWss-unsplash.jpg'
import favorite1 from '../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
import favorite2 from '../images/dovile-ramoskaite-xX9SmqQCbFY-unsplash.jpg'
import favorite3 from '../images/freddy-g-m3OuPu9oTuY-unsplash.jpg'
import choppingBoard from '../images/lukas-blazek-f-TWhXOrLiU-unsplash.jpg'
import '../style.css'

function homeContent() {
    const homeBody = document.createElement('div')

    const banner = document.createElement('div')
    banner.classList.add('banner')
    banner.style.backgroundImage = `url(${bannerImage})`
    homeBody.appendChild(banner)

    const searchMessageWrapper = document.createElement('div')
    searchMessageWrapper.classList.add('search-wrapper')
    banner.appendChild(searchMessageWrapper)

    const searchMessage = document.createElement('div')
    searchMessage.textContent = `Experience the freshness of life!`
    searchMessageWrapper.appendChild(searchMessage)

    const searchBar = document.createElement('input')
    searchBar.placeholder = 'Search for a store near you...'
    searchMessageWrapper.appendChild(searchBar)
    
    const searchBtn = document.createElement('button')
    searchBtn.textContent = 'Search'
    searchMessageWrapper.appendChild(searchBtn)

    const subWrapper = document.createElement('div')
    subWrapper.classList.add('sub-wrapper')
    homeBody.appendChild(subWrapper)

    const saladExamplesWrapper = document.createElement('div')
    subWrapper.appendChild(saladExamplesWrapper)

    const saladOne = document.createElement('img')
    saladOne.src = salad1
    saladExamplesWrapper.appendChild(saladOne)

    const saladTwo = document.createElement('img')
    saladTwo.src = salad2
    saladExamplesWrapper.appendChild(saladTwo)

    const mottoWrapper = document.createElement('div')
    subWrapper.appendChild(mottoWrapper)

    const mottoHeader = document.createElement('div')
    mottoHeader.textContent = 'Ready to refresh yourself?'
    mottoWrapper.appendChild(mottoHeader)

    const motto = document.createElement('div')
    motto.textContent = 'Here at Salad Bowl it is our belief that fresh and healthy are the best ingredients to a green and peaceful lifestyle! Sourced from local ingredients, our bowls are guaranteed to reflect nature around us. Which means, other than our regular menu, each location may have their very own specialties!';
    mottoWrapper.appendChild(motto)

    const favoritesWrapper = document.createElement('div')
    favoritesWrapper.classList.add('favorites-wrapper')
    favoritesWrapper.style.backgroundImage = `url(${choppingBoard})`
    homeBody.appendChild(favoritesWrapper)

    const favoritesHeader = document.createElement('div')
    favoritesHeader.textContent = 'Menu Favorites'
    favoritesWrapper.appendChild(favoritesHeader)

    const favoriteItemOneWrapper = document.createElement('div')
    favoriteItemOneWrapper.classList.add('favorite-one')
    const favoriteOneImg = document.createElement('img')
    favoriteOneImg.src = favorite1
    const favoriteOneLabel = document.createElement('div')
    favoriteOneLabel.textContent = `Favorites' Feast`
    favoriteItemOneWrapper.appendChild(favoriteOneImg)
    favoriteItemOneWrapper.appendChild(favoriteOneLabel)
    favoritesWrapper.appendChild(favoriteItemOneWrapper)

    const favoriteItemTwoWrapper = document.createElement('div')
    favoriteItemTwoWrapper.classList.add('favorite-two')
    const favoriteTwoImg = document.createElement('img')
    favoriteTwoImg.src = favorite2
    const favoriteTwoLabel = document.createElement('div')
    favoriteTwoLabel.textContent = `Strawberry Explosion`
    favoriteItemTwoWrapper.appendChild(favoriteTwoImg)
    favoriteItemTwoWrapper.appendChild(favoriteTwoLabel)
    favoritesWrapper.appendChild(favoriteItemTwoWrapper)

    const favoriteItemThreeWrapper = document.createElement('div')
    favoriteItemThreeWrapper.classList.add('favorite-three')
    const favoriteThreeImg = document.createElement('img')
    favoriteThreeImg.src = favorite3
    const favoriteThreeLabel = document.createElement('div')
    favoriteThreeLabel.textContent = 'Honey Lemon'
    favoriteItemThreeWrapper.appendChild(favoriteThreeImg)
    favoriteItemThreeWrapper.appendChild(favoriteThreeLabel)
    favoritesWrapper.appendChild(favoriteItemThreeWrapper)

    return homeBody
}

function homePage() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(homeContent())
}

export default homePage