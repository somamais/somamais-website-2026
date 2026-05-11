<script setup lang="ts">
import { Bot, Calendar, Landmark, ArrowRight } from 'lucide-vue-next'

const products = [
  {
    name: 'Manydesk',
    description: 'Plataforma multicanais com Agente de IA para atendimento automatizado, eficiente e humanizado em diversos canais de comunicação.',
    icon: Bot,
    tags: ['Atendimento', 'IA', 'Omnichannel'],
    link: '/produto/manydesk'
  },
  {
    name: 'Soma Clinic IA',
    description: 'Plataforma completa de IA para atendimento e Gestão de Agendas, projetada especificamente para otimizar o fluxo de clínicas e hospitais.',
    icon: Calendar,
    tags: ['Saúde', 'Gestão', 'Agendamento'],
    link: '/produto/soma-clinic-ia'
  },
  {
    name: 'Port Fácil',
    description: 'Solução inteligente de IA para Crédito Consignado, simulando Portabilidade, Refinanciamento e Margem Livre para Promotoras e Corbans.',
    icon: Landmark,
    tags: ['Financeiro', 'Crédito', 'Simulação'],
    link: '/produto/port-facil'
  }
]

const methods = [
  { step: '1. Diagnóstico', desc: 'Entendemos a sua dor e o que precisa ser otimizado.' },
  { step: '2. Arquitetura', desc: 'Desenhamos a solução tecnológica exata.' },
  { step: '3. Implementação', desc: 'Construímos e integramos com excelência técnica.' },
  { step: '4. Escala', desc: 'Garantimos a operação contínua e a evolução dos resultados.' }
]
</script>

<template>
  <section id="produtos" class="py-24 bg-[#000000] relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Método Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Nosso Método <br />Simples, direto e <span class="text-[#A49274]">focado em entrega.</span>
          </h2>
          <p class="text-lg text-zinc-400 mb-8 leading-relaxed">
            Tiramos a complexidade da frente. Nossa metodologia é ágil, enxuta e transparente para que você tenha visibilidade total sobre o progresso e o retorno do investimento.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="method in methods" :key="method.step" class="bg-[#111111] p-6 rounded-2xl border border-white/5">
            <h4 class="text-white font-bold mb-2">{{ method.step }}</h4>
            <p class="text-sm text-zinc-400">{{ method.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Products Divider -->
      <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24"></div>

      <!-- Products Header -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Nossos Produtos</h2>
        <p class="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Além de desenvolvimento sob medida, oferecemos soluções próprias de alta performance prontas para serem implementadas no seu negócio.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <router-link v-for="product in products" :key="product.name" :to="product.link" class="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10 hover:border-[#A49274]/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative overflow-hidden block cursor-pointer">
          
          <div class="absolute top-0 right-0 w-32 h-32 bg-[#A49274]/5 rounded-full blur-3xl group-hover:bg-[#A49274]/20 transition-colors"></div>

          <div class="w-14 h-14 rounded-xl bg-[#111111] border border-[#A49274]/30 flex items-center justify-center text-[#A49274] mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <component :is="product.icon" class="w-7 h-7" />
          </div>
          
          <h4 class="text-2xl font-bold text-white mb-4 relative z-10">{{ product.name }}</h4>
          <p class="text-zinc-400 leading-relaxed mb-8 flex-grow relative z-10">
            {{ product.description }}
          </p>
          
          <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 relative z-10 mb-6">
            <span v-for="tag in product.tags" :key="tag" class="px-3 py-1 bg-[#111111] text-zinc-400 text-xs font-medium rounded-full border border-white/5">
              {{ tag }}
            </span>
          </div>

          <div class="flex items-center text-[#A49274] font-medium text-sm group-hover:text-white transition-colors relative z-10">
            Saiba mais <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </router-link>
      </div>

    </div>
  </section>
</template>
