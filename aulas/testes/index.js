// Função de Simulação de Assertion (para fins didáticos)
function assert(condicao, mensagem) {
  if (!condicao) {
    // Se a condição for FALSA, lançamos um erro de Asserção!
    throw new Error("Assertion Falhou: " + mensagem)
  }
}

function adicionarPontos(jogador, pontos) {
  // === ASSERTION AQUI ===
  // O desenvolvedor está assumindo que 'pontos' NUNCA deve ser negativo.
  assert(
    pontos >= 0,
    "A função 'adicionarPontos' não deve aceitar valores negativos."
  )

  jogador.pontuacao += pontos
  console.log(
    `Pontuação de ${jogador.nome} atualizada para ${jogador.pontuacao}`
  )
}

const meuJogador = { nome: "NoobMaster", pontuacao: 100 }

// --- CENÁRIO 1: Valor Válido (Assertion Passa) ---
try {
  adicionarPontos(meuJogador, 50) // Condição: 50 >= 0 (TRUE) -> OK
} catch (e) {
  console.error(e.message)
}
// Saída: Pontuação de NoobMaster atualizada para 150

// --- CENÁRIO 2: Valor Inválido (Assertion Falha) ---
try {
  adicionarPontos(meuJogador, -10) // Condição: -10 >= 0 (FALSE) -> ERRO!
} catch (e) {
  // Apenas o desenvolvedor vê esta mensagem, ela indica um BUG.
  console.error("ERRO DE PROGRAMAÇÃO DETECTADO:", e.message)
}
// Saída: ERRO DE PROGRAMAÇÃO DETECTADO: Assertion Falhou: A função 'adicionarPontos' não deve aceitar valores negativos.
