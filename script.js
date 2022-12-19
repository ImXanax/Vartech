document.addEventListener("DOMContentLoaded", main);

function main() {
  /*
    box - DIV
        content - DIV
            innerctx - DIV
                title - H4
                input - P
            innerctx - DIV
                title - H4
                input - P
        contentIMG - DIV
            logo - IMG
    */
  const container = document.querySelector('div[class="container"')
  const newBox = document.createElement("div");
  const newContent = document.createElement("div");
  const textContent = document.createElement("div");
  const modelTitle = document.createElement("h4");
  const modelName = document.createElement("p");
  const textContent2 = document.createElement("div");
  const modelTitle2 = document.createElement("h4");
  const modelName2 = document.createElement("p");
  const logo = document.createElement('div')
  const logoImg = document.createElement('img')

  newBox.classList.add('box')
  newContent.classList.add('content')
  textContent.classList.add('content-texts')
  modelTitle.classList.add('content-social-name')
  modelName.classList.add('content-social-username')
  textContent2.classList.add('content-texts')
  modelTitle2.classList.add('content-social-name')
  modelName2.classList.add('content-social-username')
  logo.classList.add('content-img')
  
  logoImg.setAttribute('src','/images/icons/10_instagram.png')
  modelTitle.textContent = 'MODEL'
  modelTitle2.textContent = 'PRICE'
  modelName.textContent = 'I5 12400'
  modelName2.textContent = '5,200,000'

  newBox.appendChild(newContent)
  newContent.appendChild(textContent)
  textContent.appendChild(modelTitle)
  textContent.appendChild(modelName)
  newContent.appendChild(textContent2)
  textContent2.appendChild(modelTitle2)
  textContent2.appendChild(modelName2)
  newBox.appendChild(logo)
  logo.appendChild(logoImg)

  container.appendChild(newBox)
  
  // console.log(newBox)
  // console.log(container)
}
