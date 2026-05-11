<script setup lang="ts">
import { Bot, MessageSquare, Zap, BarChart, ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const features = [
  {
    title: 'Omnichannel Inteligente',
    description: 'Unifique WhatsApp, Instagram, Telegram e Webchat em um único painel. Não perca nenhuma interação.',
    icon: MessageSquare
  },
  {
    title: 'IA Humanizada',
    description: 'Um agente que compreende o contexto, aprende com seus dados e atende com o tom de voz da sua empresa.',
    icon: Bot
  },
  {
    title: 'Automação de Triagem',
    description: 'Reduza a fila de atendimento humano. A IA entende a demanda e direciona para o departamento correto.',
    icon: Zap
  },
  {
    title: 'Painel Gerencial',
    description: 'Acompanhe métricas, tempo médio de resposta, volume de chamados e a satisfação do cliente em tempo real.',
    icon: BarChart
  }
]
</script>

<template>
  <div class="bg-[#000000] min-h-screen pt-24">
    
    <!-- Hero Section -->
    <section class="relative pt-20 pb-24 overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 right-[20%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(rgba(164, 146, 116, 0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
            <Bot class="w-4 h-4" /> Manydesk
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Atendimento Autônomo e <span class="gradient-text">Multicanal</span>
          </h1>
          
          <p class="text-xl text-zinc-400 mb-10 leading-relaxed">
            Revolucione sua operação com Manydesk, a plataforma completa com Agente de Inteligência Artificial que unifica canais, resolve demandas em tempo real e escala seu atendimento.
          </p>
          
          <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-[#A49274] hover:bg-[#8c7a5e] text-black rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Falar com Especialista <ArrowRight class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-[#0A0A0A]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Por que escolher o Manydesk?</h2>
          <p class="text-zinc-400 max-w-2xl mx-auto">Tudo que sua equipe precisa para transformar suporte em uma máquina de vendas e retenção.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="feat in features" :key="feat.title" class="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#A49274]/50 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <component :is="feat.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ feat.title }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ feat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 border-t border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-[#A49274]/5"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Pronto para elevar o nível do seu atendimento?</h2>
        <p class="text-zinc-400 mb-10 text-lg">Pare de perder vendas por demora nas respostas. Agende uma demonstração gratuita do Manydesk hoje mesmo.</p>
        <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold transition-all">
          Agendar Demonstração <CheckCircle2 class="w-5 h-5" />
        </a>
      </div>
    </section>

  </div>
</template>
