//Formulário (página about.css)

function hello() {
  alert('hello')
}

function validate() {
  var name = document.getElementById('name').value
  var subject = document.getElementById('subject').value
  var phone = document.getElementById('phone').value
  var email = document.getElementById('email').value
  var message = document.getElementById('message').value
  var error_message = document.getElementById('error_message')

  error_message.style.padding = '10px'

  var text
  if (name.length < 5) {
    text = 'Por favor, entre com um nome válido'
    error_message.innerHTML = text
    return false
  }
  if (isNaN(phone) || phone.length != 11) {
    text = 'Por favor, entre com um número de telefone válido'
    error_message.innerHTML = text
    return false
  }
  if (email.indexOf('@') == -1 || email.length < 6) {
    text = 'Por favor, entre com um email válido'
    error_message.innerHTML = text
    return false
  } else {
    text = 'Mensagem enviada com sucesso!'
    error_message.innerHTML = text
    return false
  }
}

//Receitas (página receitas.css)
const menu = [
  {
    id: 1,
    title: 'Patê de ora-pro-nóbis',
    category: 'entrada',
    icone: 'Tempo de preparo - 10 min.',
    img: '../img/pate-ora-pro-nobis.jpg',
    desc: `Selecione e lave cerca de 300g de folhas da ora-pro-nóbis. Em duas
    colheres de azeite, refogue sal, alho, orégano, pimenta e demais
    temperos a gosto com um pedaço de tofu de 300g. Adicione as
    folhas, mexa e deixe murchar bem. Triture colocando água fervendo.
    Pode ser consumido quente ou frio.`
  },
  {
    id: 2,
    title: 'Pão de alho com mentruz-rasteiro ',
    category: 'entrada',
    icone: 'Tempo de preparo - 15 min.',
    img: '../img/receita-mentruz-rasteiro.JPG',
    desc: `Pique 3 colheres de sopa de mentruz-rasteiro, coloque com 1 colher
    de azeite e amasse bem com a ajuda do pilão. Derreta 1 colher de
    sopa de manteiga em uma frigideira. Quando derreter e ferver,
    adicione o azeite com a erva, mistura e desligue. Espere esfriar
    para usar. Passe no pão e aproveite!`
  },
  {
    id: 3,
    title: 'Salada verde com flores',
    category: 'salada',
    icone: 'Tempo de preparo - 3 min.',
    img: '../img/salada-flor-comestivel.jpg',
    desc: `Lave as folhas e as flores comestíveis. Adicione flores (como por exemplo, de capuchinha, violetas e amor-perfeito) na sua salada e
    deixa-a ainda mais bonita e saudável!`
  },
  {
    id: 4,
    title: 'Arroz com feijão-guandu',
    category: 'principal',
    icone: 'Tempo de preparo - 45 min.',
    img: '../img/receita-feijao-guandu.jpg',
    desc: `Cozinhe 300g de feijão-guandu por 25 minutos na panela de pressão.
    Prepare a receita básica de arroz e acrescente o feijão quando for
    colocar a água de cozimento no arroz.`
  },
  {
    id: 5,
    title: 'Purê da polpa de cajá-manga',
    category: 'principal',
    icone: 'Tempo de preparo - 25 min.',
    img: '../img/caja-manga-pure.jpg',
    desc: `Descasque os frutos maduros e com uma faca afiada tire a polpa.
    Triture no liquidificador com um pouco de água e passe na peneira.
    Doure alho, cebola, orégano e outros temperos à gosto no azeite.
    Acrescente na polpa de cajá-manga, 200ml de leite da sua preferência
    e a mesma quantidade de aipim cozido. Deixe reduzir um pouco e sirva
    quente.`
  },
  {
    id: 6,
    title: 'Peixinho da horta',
    category: 'principal',
    icone: 'Tempo de preparo - 15 min.',
    img: '../img/peixinh-da-horta-receita.jpg',
    desc: `Colha folhas jovens, lave-as e escorra bem. Faça uma mistura de 3
    colheres de sopa de água com 1 colher de sopa de maisena e tempere à
    gosto (uma sugestão é sal, pimenta e açafrão). Empane as folhas
    nessa mistura e frite em uma frigideira com um fio de óleo. Sirva
    quente.`
  },
  {
    id: 7,
    title: 'Chá de chapéu-de-couro com limão',
    category: 'bebida',
    icone: 'Tempo de preparo - 10 min.',
    img: '../img/chá-chapeu-de-couro.jpg',
    desc: `Ferva um punhado de folhas e talos frescos em 1 litro de água. Coe,
    deixe esfriar e adicione o suco de um limão. Sirva quente ou gelado.`
  },
  {
    id: 8,
    title: 'Sorvete de maracujá-roxo',
    category: 'sobremesa',
    icone: 'Tempo de preparo - 2 horas',
    img: '../img/maracujá-roxo-sorvete.jpg',
    desc: `Congela 5 bananas cortadas em rodelas. Bata no processador a banana
    congelada com a polpa de 200ml de maracujá-roxo e bom apetite!`
  }
]

// get parent element
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')
const filterBtns = document.querySelectorAll('.filter-btn')

// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(menu)
})

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const category = e.currentTarget.dataset.id
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem
      }
    })
    if (category === 'todos') {
      diplayMenuItems(menu)
    } else {
      diplayMenuItems(menuCategory)
    }
  })
})

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <div class="item-time">
              <h5 class="price">${item.icone}</h5>
            </div>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
  })
  displayMenu = displayMenu.join('')

  sectionCenter.innerHTML = displayMenu
}
