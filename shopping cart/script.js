const ol = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
};

const fetchProductsElements = async () => {
  // loading();
  const input = document.querySelector('#input-search');
  let product = 'computador';
  if (input.value) product = input.value;
  const fetchProduct = await fetchProducts(product);
  const sectionPai = document.querySelector('.items');
  const { results } = fetchProduct;

  results.forEach(({ id, title, thumbnail }) => {
    const productItemElement = { sku: id, name: title, image: thumbnail };
    sectionPai.appendChild(createProductItemElement(productItemElement));
  });
  inputSearch();
};

const inputSearch = () => {
  const input = document.querySelector('#input-search');
  const button = document.querySelectorAll('.item__add');
  const section = document.querySelector('.items');
  input.addEventListener('change', fetchProductsElements);
  input.addEventListener('change', () => {
    section.innerHTML = ''
  });
  button.forEach((btn) => {
    btn.addEventListener('click', fetchItemElement)});
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const totalPrice = () => {
  let soma = 0;
  ol.childNodes.forEach(({ innerText }) => {
    const total = innerText.slice(innerText.indexOf('$') + 1);
    soma += Number(total);
  });
  return `Preço total: $${soma.toFixed(2)}`;
};

const totalUpdate = async () => {
  const totalPrices = document.querySelector('.total-price');
  totalPrices.innerText = totalPrice();
};

const clearCart = () => {
  const btn = document.querySelector('.empty-cart');
  btn.addEventListener('click', () => {
    ol.innerHTML = '';
    saveCartItems(ol.innerHTML);
    totalUpdate();
  });
};

const cartItemClickListener = () => { 
  document.querySelector('.cart__item').remove();
  saveCartItems(ol.innerHTML);
  totalUpdate();
};

const removeAfterRefresh = () => {
  const li = document.querySelectorAll('.cart__item');
  li.forEach((item) => item.addEventListener('click', cartItemClickListener));
}; 

const createCartItemElement = ({ sku, name, salePrice, thumbnail }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `<img class = "imgProduct" src = "${thumbnail}"> <div class = "divProduct"/> SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}</div>`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const fetchItemElement = async ({ target }) => {
  const ids = target.parentNode.querySelector('.item__sku');
  const getItems = await fetchItem(ids.innerText);
  const { id, title, price, thumbnail } = getItems;
  const obj = {
    sku: id,
    name: title,
    salePrice: price,
    thumbnail,
  };
  ol.appendChild(createCartItemElement(obj));
  saveCartItems(ol.innerHTML);
  totalUpdate();
};

const littleCar = () => {
  const car = document.querySelector('.material-icons');
  const div = document.querySelector('.container-cartTitle');
  const section = document.querySelector('.cart');
  car.addEventListener('click', () => {
    section.classList.toggle('nan');
    div.classList.toggle('nan');
  });
};

window.onload = async () => {
  await fetchProductsElements();
  ol.innerHTML = getSavedCartItems();
  removeAfterRefresh();
  totalUpdate();
  clearCart();
  littleCar();
 };
