import contactBackground from '../images/alexander-andrews-JYGnB9gTCls-unsplash.jpg'
import '../style.css'

function contactContent() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.style.backgroundImage = `url(${contactBackground})`

    const contactWrapper = document.createElement('div')
    contact.appendChild(contactWrapper)

    const contactHeader = document.createElement('h1')
    contactHeader.textContent = 'Contact Me'
    contactWrapper.appendChild(contactHeader)

    const myEmail = document.createElement('div')
    myEmail.textContent = `My Email:\r\nlizziejones1208@gmail.com`
    contactWrapper.appendChild(myEmail)

    const myGitHubHeader = document.createElement('div')
    myGitHubHeader.textContent = 'My Github:'
    const myGitHub = document.createElement('a')
    myGitHub.textContent = 'AlixiaDae'
    myGitHub.href = 'https://github.com/AlixiaDae'
    myGitHubHeader.appendChild(myGitHub)
    contactWrapper.appendChild(myGitHubHeader)
  
    return contact
}

function contactPage() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(contactContent())
}


export default contactPage