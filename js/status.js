document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.querySelector("input");
    const resultado = document.querySelector(".resultado");
    const statusMensagem = document.getElementById("status-mensagem");
  
    addEventListener("submit", function (e) {
      e.preventDefault();
  
      const id = input.value;
  
      const apiUrl = `http://localhost:3000/orders/${id}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const numeroPedido = data.id;
          const status = data.status;
  
          statusMensagem.textContent = `O seu pedido número ${numeroPedido}, está com o status: ${status}`;
        })
        .catch((error) => {
          statusMensagem.textContent = "Erro ao buscar informações do pedido.";
          console.error(error);
        });

    });
  });