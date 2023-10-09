function buscarCEP() {
    const cepInput = document.getElementById("cep");
    const numeroInput = document.getElementById("numero");
    const resultadoCEP = document.getElementById("resultadoCEP");

    const cep = cepInput.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { logradouro = "Não encontrado", bairro = "Não encontrado", localidade = "Não encontrado", uf = "Não encontrado" } = data;

            const resultadoHTML = `
        <p name="logradouro">Rua/Avenida: <br>${logradouro}</p>
        <p name="bairro">Bairro:<br> ${bairro}</p>
        <p name="localidade">Localidade: ${localidade}</p>
        <p name="uf">UF: ${uf}</p>
      `;

            resultadoCEP.innerHTML = resultadoHTML;
        })
        .catch(error => {
            resultadoCEP.innerHTML = "Erro ao buscar o CEP.";
        });
}

//________________________________________________________________________________________//


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contratacao-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome_completo = document.querySelector("input[name='nome_completo']").value;
        const cpf = document.querySelector("input[name='cpf']").value;
        const telcontato = document.querySelector("input[name='telcontato']").value;
        const email = document.querySelector("input[name='email']").value;
        const plan = document.querySelector("select[name='plan']").value;
        const time = document.querySelector("select[name='time']").value;
        const cep = document.querySelector("input[name='cep']").value;
        const numerocasa = document.querySelector("input[name='numerocasa']").value;
        const logradouro = document.querySelector("#resultadoCEP p[name='logradouro']").textContent;
        const bairro = document.querySelector("#resultadoCEP p[name='bairro']").textContent;
        const localidade = document.querySelector("#resultadoCEP p[name='localidade']").textContent;
        const uf = document.querySelector("#resultadoCEP p[name='uf']").textContent;

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (nome_completo && cpf && telcontato && email && cep && numerocasa && logradouro && bairro && localidade && uf && plan && time) {
            const dados = {
                nome_completo: nome_completo,
                cpf: cpf,
                telcontato: telcontato,
                email: email,
                cep: cep,
                numerocasa: numerocasa,
                logradouro: logradouro,
                bairro: bairro,
                localidade: localidade,
                uf: uf,
                plan: plan,
                time: time,
            };

            // Envia os dados
            fetch("http://localhost:3000/createorder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Resposta do servidor:", data);
                    alert("Contratação concluída com sucesso!");
                    form.reset(); // Limpa o formulário
                })
                .catch((error) => {
                    console.error("Erro ao enviar os dados:", error);
                    alert("Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.");
                });
        } else {
            alert("Preencha todos os campos obrigatórios.");
        }
    });
});

//________________________________________________________________________________________//



