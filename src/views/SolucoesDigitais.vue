<script setup lang="ts">
import { Code2, BrainCircuit, Workflow, Rocket, Cpu, ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const solutions = [
  {
    title: 'Inteligência Artificial',
    description: 'Implementamos soluções de IA generativa, análise de dados e machine learning para otimizar processos e criar vantagens competitivas.',
    icon: BrainCircuit
  },
  {
    title: 'Integração e Automações',
    description: 'Conectamos seus sistemas e automatizamos tarefas repetitivas, reduzindo custos operacionais e falhas humanas.',
    icon: Workflow
  },
  {
    title: 'Startups e MVP',
    description: 'Aceleramos a criação do seu produto digital. Do conceito ao MVP, desenvolvemos plataformas escaláveis e focadas no usuário.',
    icon: Rocket
  },
  {
    title: 'Produtos e Tecnologia',
    description: 'Criamos softwares sob medida, aplicativos móveis e sistemas web de alta performance que acompanham o crescimento da sua empresa.',
    icon: Cpu
  }
]
</script>

<template>
  <div class="bg-[#000000] min-h-screen pt-24">
    
    <!-- Hero Section -->
    <section class="relative pt-20 pb-24 overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 right-[20%] w-[40%] h-[40%] rounded-full bg-[#A49274]/10 blur-[120px]"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(rgba(164, 146, 116, 0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A49274]/10 border border-[#A49274]/30 text-[#A49274] text-sm font-medium mb-8">
            <Code2 class="w-4 h-4" /> Soluções Digitais
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tecnologia que <span class="gradient-text">Escala Negócios</span>
          </h1>
          
          <p class="text-xl text-zinc-400 mb-10 leading-relaxed">
            Automatize, Simplifique e Otimize sua operação. Desenvolvemos Softwares, Apps e soluções de Inteligência Artificial que geram resultados reais para sua empresa.
          </p>
          
          <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-[#A49274] hover:bg-[#8c7a5e] text-black rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Falar com Especialista <ArrowRight class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="py-24 bg-[#0A0A0A]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Nossas Soluções</h2>
          <p class="text-zinc-400 max-w-2xl mx-auto">Trazemos a inovação que o seu negócio precisa para liderar o mercado de amanhã.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="sol in solutions" :key="sol.title" :id="sol.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ e /g, '-').replace(/ /g, '-')" class="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#A49274]/50 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-[#A49274]/10 border border-[#A49274]/30 flex items-center justify-center text-[#A49274] mb-6">
              <component :is="sol.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ sol.title }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ sol.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 border-t border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-[#A49274]/5"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Pronto para transformar sua empresa?</h2>
        <p class="text-zinc-400 mb-10 text-lg">Deixe nossa equipe de especialistas construir a solução ideal para os seus desafios atuais.</p>
        <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold transition-all">
          Iniciar meu Projeto <CheckCircle2 class="w-5 h-5" />
        </a>
      </div>
    </section>

  </div>
</template>
