import bannerImage from './images/louis-hansel-MlPD-AzZYMg-unsplash.jpg'

function homePage() {
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

    return homeBody
}

export default homePage