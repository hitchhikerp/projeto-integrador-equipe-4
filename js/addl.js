document.addEventListener('DOMContentLoaded', function () {
    const telcontatoInput = document.getElementById('telcontato');
  
    // Função para formatar o número de telefone
    function formatPhoneNumber() {
      const phoneNumber = telcontatoInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      if (phoneNumber.length === 11) {
        // Formato de celular: (XX) XXXXX-XXXX
        const formattedPhoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
        telcontatoInput.value = formattedPhoneNumber;
      }
    }
  
    // Evento de entrada de dados no campo de telefone
    telcontatoInput.addEventListener('input', formatPhoneNumber);
  });



  // Função para formatar o CPF
  function formatCPF(input) {
    const cleaned = input.value.replace(/\D/g, '');
    
    // Verifica se o CPF tem pelo menos 11 dígitos
    if (cleaned.length >= 11) {
        // Formata o CPF (exemplo: 123.456.789-09)
        input.value = cleaned.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else {
        input.value = cleaned;
    }
}

// Adiciona um ouvinte de evento de entrada ao campo de CPF
const cpf = document.getElementById('cpf');
cpf.addEventListener('input', function () {
    formatCPF(cpf);
});