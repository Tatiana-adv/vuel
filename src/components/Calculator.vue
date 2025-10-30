<template>
  <div class="w-full max-w-sm mx-auto p-8 bg-white shadow-xl rounded-xl">
    <h1 class="text-3xl font-bold text-center text-indigo-700 mb-6">
      Calculadora Vue
    </h1>

    <div class="flex items-center space-x-2 mb-6">
      <input
        type="number"
        v-model.number="num1"
        placeholder="Nº 1"
        class="input-style flex-1"
      />

      <select
        v-model="operation"
        class="input-style w-16 text-center font-bold text-lg"
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>

      <input
        type="number"
        v-model.number="num2"
        placeholder="Nº 2"
        class="input-style flex-1"
      />
    </div>

    <div class="border-t border-gray-200 pt-4">
      <div
        class="bg-indigo-50 p-4 rounded-lg flex justify-between items-center shadow-inner"
      >
        <span class="text-xl font-semibold text-gray-700">Resultado:</span>
        <div :class="['text-4xl font-extrabold transition-colors duration-300', resultText.startsWith('Erro') ? 'text-red-600' : 'text-indigo-600']">
          {{ resultText }}
        </div>
      </div>
    </div>
  </div>
</template>
