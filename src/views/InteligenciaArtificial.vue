<script setup lang="ts">
import { BrainCircuit, LineChart, Cpu, ArrowRight, CheckCircle2, HeartPulse, Building2, Landmark, Lightbulb } from 'lucide-vue-next'

const recursos = [
  {
    title: 'Insights com Data Science',
    description: 'Data Science, IA e estatística revelam padrões escondidos nos dados para apoiar decisões estratégicas e revelar tendências.',
    icon: Lightbulb
  },
  {
    title: 'Machine Learning',
    description: 'Modelos Preditivos treinados para antecipar resultados, otimizar processos e permitir ações proativas no seu negócio.',
    icon: LineChart
  },
  {
    title: 'IA Generativa',
    description: 'Uso de LLMs em soluções que transformam a produtividade, criam assistentes inteligentes e otimizam o atendimento diário.',
    icon: Cpu
  }
]

const setores = [
  {
    title: 'Mercado Financeiro e Crédito',
    description: 'Soluções avançadas para análise de crédito, predição de churn, detecção de anomalias financeiras e segmentação inteligente de carteiras.',
    features: ['Score de Crédito e Risco', 'Previsão de Fluxo de Caixa', 'Assistentes Virtuais para Vendas e Refinanciamento'],
    icon: Landmark
  },
  {
    title: 'Saúde',
    description: 'Inovações tecnológicas para operadoras, hospitais e clínicas focadas em otimização de agendas, atendimento ao paciente e previsibilidade operacional.',
    features: ['Triagem e Atendimento Automatizado', 'Gestão Inteligente de Agendas', 'Previsão de Demanda Hospitalar'],
    icon: HeartPulse
  },
  {
    title: 'Indústria',
    description: 'Aumente a eficiência operacional, preveja rupturas e ative a manutenção preditiva com dados monitorados diretamente do chão de fábrica.',
    features: ['Manutenção Preditiva', 'Previsão de Demanda e Estoque', 'Análise de Eficiência Operacional'],
    icon: Building2
  }
]
</script>

<template>
  <div class="bg-[#000000] min-h-screen pt-24">
    
    <!-- Hero Section -->
    <section class="relative pt-20 pb-24 overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-[20%] w-[40%] h-[40%] rounded-full bg-[#A49274]/10 blur-[120px]"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(rgba(164, 146, 116, 0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A49274]/10 border border-[#A49274]/30 text-[#A49274] text-sm font-medium mb-8">
            <BrainCircuit class="w-4 h-4" /> Inteligência Artificial
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Saia da IA Genérica.<br />
            <span class="gradient-text">Gere Valor Real.</span>
          </h1>
          
          <p class="text-xl text-zinc-400 mb-10 leading-relaxed">
            Com Data Science, Machine Learning e IA Generativa, criamos soluções que superam os desafios de dados, gerando eficiência, produtividade e alavancando os resultados do seu negócio.
          </p>
          
          <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-[#A49274] hover:bg-[#8c7a5e] text-black rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Falar com um Consultor <ArrowRight class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <!-- Recursos Section -->
    <section class="py-24 bg-[#0A0A0A]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Recursos certos para problemas certos</h2>
          <p class="text-zinc-400 max-w-2xl mx-auto">Desenvolvemos inteligência de negócios direcionada aos desafios específicos e únicos da sua corporação.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="recurso in recursos" :key="recurso.title" class="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#A49274]/50 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-[#A49274]/10 border border-[#A49274]/30 flex items-center justify-center text-[#A49274] mb-6">
              <component :is="recurso.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ recurso.title }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ recurso.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Soluções por Setor -->
    <section class="py-24 bg-[#000000]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16 md:flex justify-between items-end">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Soluções por Indústria</h2>
            <p class="text-zinc-400">Implementamos tecnologias líderes de mercado adaptadas às realidades do seu setor para destravar gargalos operacionais.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="setor in setores" :key="setor.title" class="relative group bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-[#A49274]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-center text-[#A49274] mb-6 shadow-xl">
                <component :is="setor.icon" class="w-7 h-7" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">{{ setor.title }}</h3>
              <p class="text-zinc-400 mb-6">{{ setor.description }}</p>
              
              <ul class="space-y-3">
                <li v-for="feature in setor.features" :key="feature" class="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 class="w-4 h-4 text-[#A49274] shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 border-t border-white/5 relative overflow-hidden bg-[#0A0A0A]">
      <div class="absolute inset-0 bg-[#A49274]/5"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Qual o seu desafio de inteligência?</h2>
        <p class="text-zinc-400 mb-10 text-lg">Mapeie oportunidades de IA e Machine Learning para sua empresa com nossos arquitetos de soluções.</p>
        <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold transition-all">
          Agendar Reunião <CheckCircle2 class="w-5 h-5" />
        </a>
      </div>
    </section>

  </div>
</template>
