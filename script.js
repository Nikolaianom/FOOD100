const product = {
    plainBurger: {
        name: 'gamburger',
        price: 10000,
        img: 'images/product2.jpg',
        amount: 0,
        kilCall: 100,
        get totalSum() {
            return this.price * this.amount;
        },
        get kcall() {
            return this.kilCall * this.amount
        }
    },
    freshBurger: {
        name: 'fresh',
        price: 20500,
        img: 'images/product1.jpg',
        amount: 0,
        kilCall: 150,
        get totalSum() {
            return this.price * this.amount;
        },
        get kcall() {
            return this.kilCall * this.amount
        }
    },
    freshCombo: {
        name: 'combo',
        price: 31900,
        img: 'images/product3.jpg',
        amount: 0,
        kilCall: 200,
        get totalSum() {
            return this.price * this.amount;
        },
        get kcall() {
            return this.kilCall * this.amount
        }
    }
}

const additives = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 3000,
        kcall: 200
    },
    lettuce: {
        name: 'Салатный лист',
        price: 1000,
        kcall: 50
    },
    cheese: {
        name: 'Сыр',
        price: 2000,
        kcall: 150
    }
}

/* ЗАказать кнопка */
const order = document.querySelector('.addCart'),
    orderA = document.querySelector('.receipt'),
    orderBtn = document.querySelector('.receipt__window-btn')





order.addEventListener(('click'), () => {
    orderA.classList.add('active')
    orderA.style.display = "block"
})
orderBtn.addEventListener(('click'), () => {
    orderA.classList.remove('active')
    orderA.style.display = "none"
    alert('Заказ находится в обработке')
})





const icon = document.querySelector('.header__timer-extra');

let count = 20

function anim(speed = 0) {
    icon.innerHTML = speed
    speed++
    if (speed <= 50) {
        count = 100
    }
    if (speed >= 50) {
        count = 20
    }
    if (speed <= 100) {
        setTimeout(() => {
            anim(speed)
        }, count);
    }
}
anim()



const minusBtns = document.querySelectorAll('.minus'),
    plusBtns = document.querySelectorAll('.plus')
    
let bCount = 0;




window.addEventListener('click' , (e) => {
    if(e.target.classList.contains('main__product-btn')) {
        const  attr = e.target.getAttribute('data-symbol')
        const parent = e.target.closest('.main__product')
        const parentId = parent.getAttribute('id')
        const burgers = parent.querySelector('.main__product-num');
        const totalPrice = parent.querySelector('.main__product-price'),
        totalCallories = parent.querySelector('.main__product-call')
       if(parent) {
        if(attr == '+') {
           product[parentId].amount++
           
            
        } else if (attr == '-'  && product[parentId].amount > 0) {
            product[parentId].amount--
        }
        burgers.innerHTML = product[parentId].amount
            totalPrice.innerHTML = `${product[parentId].totalSum} сум`
            totalCallories.innerHTML = `${product[parentId].kcall} калорий `
    } 
    }
    
})

const windowBasket = document.querySelector('.receipt__window-out')

function renderBasket() {
    const productArray = []

    for(const key in product) {
        if(product[key].amount) {
            productArray.push(product[key])
            windowBasket.innerHTML = cardItemBurger(product[key])   
        }
    }

    
}
renderBasket()


function cardItemBurger(obj) {
    const { name, price, amount, img } = obj
    return `
    <div class="main__product-number">
        <div class="main__product-label">
            <img src="${img}" alt="${name}" class="main__product-numbertImage">
            <div class="wrapper__navbar-infoSub">
                <p class="main__product-number">${name}</p>
                <p class="main__product-many">${price} сум</p>
            </div>
        </div>
        <div main__product-extraProduct" id="">
           
            <output class="wrapper__navbar-count">${amount}</output>
           
        </div>
    </div>
`
}

