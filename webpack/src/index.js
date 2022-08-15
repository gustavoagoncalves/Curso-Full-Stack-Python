import './styles.scss'
import image from './matrix.png'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Olá Mundo novamente'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image()
    elemImg.src = img
    return elemImg
}

rootStyle()
document.get.getElementById('root').appendChild(titleComponent())
document.get.getElementById('root').appendChild(imgComponent())