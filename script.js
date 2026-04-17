let carrinho = [];
let total = 0;

function adicionarAoCarrinho(titulo, preco) {
    carrinho.push({titulo, preco});
    total += preco;
    document.getElementById('carrinho-contador').innerText = carrinho.length;
    atualizarCarrinhoVisual();
    
    const painel = document.getElementById('carrinho-painel');
    if (!painel.classList.contains('active')) toggleCarrinho();
}

function removerDoCarrinho(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    document.getElementById('carrinho-contador').innerText = carrinho.length;
    atualizarCarrinhoVisual();
}

function atualizarCarrinhoVisual() {
    const lista = document.getElementById('carrinho-itens-lista');
    const totalTxt = document.getElementById('carrinho-subtotal');
    
    lista.innerHTML = "";
    
    if (carrinho.length === 0) {
        lista.innerHTML = '<p style="padding: 20px; color: #DB7093; font-size: 12px;">SUA SACOLA ESTÁ VAZIA.</p>';
        totalTxt.innerText = "R$ 0,00";
        return;
    }

    carrinho.forEach((item, i) => {
        lista.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid #FFD1DC;">
                <div>
                    <strong style="font-size: 11px; color: #3A001E;">${item.titulo}</strong><br>
                    <span style="color: #DB7093; font-size: 11px;">R$ ${item.preco.toFixed(2)}</span>
                </div>
                <button class="btn-remover" onclick="removerDoCarrinho(${i})">🗑️</button>
            </div>
        `;
    });
    
    totalTxt.innerText = `R$ ${total.toFixed(2)}`;
}

function toggleCarrinho() {
    document.getElementById('carrinho-painel').classList.toggle('active');
}

function fazerLogin() {
    alert("Redirecionando para área de Login...");
}