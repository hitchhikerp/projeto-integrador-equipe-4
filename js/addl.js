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