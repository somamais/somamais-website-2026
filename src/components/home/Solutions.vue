<script setup lang="ts">
import { Code2, BrainCircuit, Workflow, Rocket, Box } from 'lucide-vue-next'

const solutions = [
  {
    id: 'solucoes',
    title: 'SOLUÇÕES DIGITAIS',
    description: 'Plataformas, aplicativos, sistemas e produtos digitais sob medida para operações em crescimento.',
    focus: 'Sistemas, apps, portais, experiências digitais.',
    icon: Code2,
    link: '/solucoes-digitais'
  },
  {
    id: 'ia',
    title: 'INTELIGÊNCIA ARTIFICIAL',
    description: 'IA para automação, eficiência, atendimento e produtividade integrada a processos reais.',
    focus: 'IA estratégica, automação inteligente, análise de dados.',
    icon: BrainCircuit,
    link: '/inteligencia-artificial'
  },
  {
    id: 'integracoes',
    title: 'INTEGRAÇÕES E AUTOMAÇÃO',
    description: 'Conectar sistemas, eliminar retrabalho e criar eficiência operacional de ponta a ponta.',
    focus: 'APIs, integrações, orquestração de dados.',
    icon: Workflow,
    link: '/integracoes-automacoes'
  },
  {
    id: 'startups',
    title: 'STARTUPS E MVP',
    description: 'Discovery, prototipagem e validação tecnológica para novos negócios e ideias.',
    focus: 'MVP, protótipo, validação rápida, go-to-market.',
    icon: Rocket,
    link: '/solucoes-digitais#startups-mvp'
  },
  {
    id: 'produtos',
    title: 'PRODUTOS TECNOLÓGICOS',
    description: 'Soluções escaláveis próprias implementadas estrategicamente para o seu negócio.',
    focus: 'Produtos reais, soluções prontas, escalabilidade.',
    icon: Box,
    link: '#produtos'
  }
]
</script>

<template>
  <section id="pilares" class="py-24 bg-[#0A0A0A] relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Nossos Pilares <br />Tecnológicos
        </h2>
        <p class="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Soluções estratégicas desenhadas para cobrir toda a jornada tecnológica de inovação e crescimento da sua empresa.
        </p>
      </div>

      <!-- Solutions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link v-for="item in solutions" :key="item.id" :to="item.link" :id="item.id === 'solucoes' ? '' : item.id" class="bg-[#111111] rounded-2xl p-8 border border-white/5 transition-all hover:border-[#A49274]/50 hover:bg-[#151515] group flex flex-col h-full block cursor-pointer">
          
          <div class="mb-6 text-[#A49274]">
            <component :is="item.icon" class="w-10 h-10 stroke-[1.5]" />
          </div>
          
          <h4 class="text-xl font-bold text-white mb-4 tracking-wide">{{ item.title }}</h4>
          
          <p class="text-zinc-400 leading-relaxed mb-8 flex-grow">
            {{ item.description }}
          </p>
          
          <div class="mt-auto">
            <span class="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-2">Foco de Atuação</span>
            <span class="text-sm font-medium text-zinc-300 block mb-6">{{ item.focus }}</span>
            
            <div class="inline-flex items-center text-sm font-bold text-[#A49274] hover:text-[#D4C5A9] transition-colors group-hover:underline underline-offset-4">
              Conhecer solução <span class="ml-1 text-lg leading-none">→</span>
            </div>
          </div>
        </router-link>
      </div>

    </div>
  </section>
</template>
