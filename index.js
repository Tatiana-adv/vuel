<script setup>
import { ref, computed } from 'vue';

// 1. Variáveis reativas (Estado)
const num1 = ref(0);
const num2 = ref(0);
const operation = ref('+');

// 2. Lógica Computada (Cálculo automático)
const calculatedResult = computed(() => {
  const n1 = parseFloat(num1.value) || 0;
  const n2 = parseFloat(num2.value) || 0;
  
  // Tratamento de Erro: Divisão por Zero
  if (operation.value === '/' && n2 === 0) {
    return 'Erro: Divisão por zero';
  }

  let result;
  switch (operation.value) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
    default:
      result = NaN;
  }
  return result;
});

// 3. Resultado formatado para exibição
const resultText = computed(() => {
  const result = calculatedResult.value;
  
  if (typeof result === 'string') {
    return result; // Retorna a mensagem de erro
  }
  
  if (isNaN(result)) {
    return 'Inválido';
  }
  
  // Formata o número para exibir no máximo 2 casas decimais
  return result.toFixed(result % 1 !== 0 ? 2 : 0).replace('.', ',');
});

</script>
