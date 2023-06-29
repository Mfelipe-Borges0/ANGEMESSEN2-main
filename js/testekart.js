const cart = {}; /*Objeto para representar o carrinho */

/* Função para adicionar um item ao carrinho */
function addItem(itemId) {
  if (cart[itemId]) {
    cart[itemId]++; /*Incrementa a quantidade do item se já existir no carrinho */
  } else {
    cart[itemId] = 1; //Define a quantidade do item como 1 se for o primeiro item adicionado
  }
  updateQuantity(itemId);
}

// Função para remover um item do carrinho
function removeItem(itemId) {
  if (cart[itemId]) {
    cart[itemId]--; // Decrementa a quantidade do item
    if (cart[itemId] === 0) {
      delete cart[itemId]; // Remove o item do carrinho se a quantidade se tornar zero
    }
    updateQuantity(itemId);
  }
}

// Função para atualizar a quantidade exibida no carrinho
function updateQuantity(itemId) {
  const quantityElement = document.querySelector(`#${itemId} .quantity`);
  quantityElement.textContent = cart[itemId] || 0;
}

// Eventos de clique nos botões de acréscimo e diminuição
document.addEventListener('click', function (event) {
  if (event.target.matches('.increment')) {
    const itemId = event.target.parentNode.id;
    addItem(itemId);
  } else if (event.target.matches('.decrement')) {
    const itemId = event.target.parentNode.id;
    removeItem(itemId);
  }
});
