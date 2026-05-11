<script setup lang="ts">
import { 
  Workflow, 
  Database, 
  Settings2, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  TerminalSquare,
  Activity,
  ServerCog
} from 'lucide-vue-next'

const tecnologias = [
  {
    name: 'n8n',
    role: 'Workflow Automation',
    description: 'Orquestração visual de integrações e automação ágil entre centenas de APIs e serviços.',
    color: 'text-[#FF6D5A]' // N8N brand color approximation
  },
  {
    name: 'Python',
    role: 'Scripting & Data Engineering',
    description: 'Processamento de dados, construção de microsserviços e algoritmos avançados de transformação.',
    color: 'text-[#3776AB]' // Python brand color approximation
  },
  {
    name: 'Apache Kafka',
    role: 'Data Streaming',
    description: 'Mensageria distribuída de alta performance para arquiteturas orientadas a eventos e processamento em tempo real.',
    color: 'text-[#231F20]' // Kafka usually black/white, let's use a subtle neutral or just white in dark mode
  },
  {
    name: 'Apache Flink',
    role: 'Real-time Processing',
    description: 'Processamento de fluxos de dados (streaming) em tempo real com estado e baixa latência.',
    color: 'text-[#E6522C]' // Flink brand color approximation
  },
  {
    name: 'Apache Spark',
    role: 'Big Data Analytics',
    description: 'Processamento massivo e análise de grandes volumes de dados (batch) com alta velocidade.',
    color: 'text-[#E25A1C]' // Spark brand color approximation
  }
]

const solucoes = [
  {
    title: 'Integração de Sistemas',
    description: 'Conectamos sistemas legados, ERPs, CRMs e APIs modernas, garantindo que a informação flua sem atrito por toda a sua organização.',
    features: ['Sincronização Bidirecional', 'Integração via APIs REST / GraphQL', 'Webhooks e Eventos Corporativos'],
    icon: Network
  },
  {
    title: 'Automação de Rotinas',
    description: 'Eliminamos trabalhos manuais e repetitivos construindo fluxos lógicos automatizados, liberando seu time para tarefas estratégicas.',
    features: ['RPA (Robotic Process Automation)', 'Aprovação e Notificações Automatizadas', 'Tratamento Automático de Erros'],
    icon: Settings2
  },
  {
    title: 'Engenharia de Dados & ETLs',
    description: 'Estruturamos pipelines robustos de Extração, Transformação e Carga (ETL) para consolidar seus dados em Data Lakes ou Data Warehouses.',
    features: ['Extração de múltiplas fontes', 'Limpeza e padronização de dados', 'Carga otimizada para Analytics'],
    icon: Database
  },
  {
    title: 'Arquiteturas Orientadas a Eventos',
    description: 'Sistemas que reagem instantaneamente a ações do usuário ou alterações no banco de dados, utilizando processamento de stream.',
    features: ['Data Streaming de Alta Vazão', 'Baixa Latência', 'Tolerância a Falhas'],
    icon: Activity
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
            <Workflow class="w-4 h-4" /> Integrações e Automações
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Conecte Sistemas.<br />
            <span class="gradient-text">Escale sua Operação.</span>
          </h1>
          
          <p class="text-xl text-zinc-400 mb-10 leading-relaxed">
            Desenvolvemos pipelines robustos, automatizamos rotinas complexas e estruturamos o seu fluxo de dados usando as tecnologias de engenharia mais avançadas do mercado.
          </p>
          
          <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-[#A49274] hover:bg-[#8c7a5e] text-black rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Falar com um Engenheiro <ArrowRight class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <!-- Stack Tecnológico Section -->
    <section class="py-24 bg-[#0A0A0A]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Stack Tecnológico</h2>
          <p class="text-zinc-400 max-w-2xl mx-auto">Utilizamos ferramentas de classe mundial para garantir performance, segurança e escalabilidade nos seus processos.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="tech in tecnologias" :key="tech.name" class="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#A49274]/30 transition-colors flex flex-col items-start">
            <div class="mb-4">
              <TerminalSquare class="w-8 h-8 text-white/80" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-1">{{ tech.name }}</h3>
            <span class="text-sm font-medium text-[#A49274] mb-4">{{ tech.role }}</span>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Soluções e Aplicações -->
    <section class="py-24 bg-[#000000]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16 md:flex justify-between items-end">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Aplicações Práticas</h2>
            <p class="text-zinc-400">Desde simples transferências de dados até arquiteturas complexas de processamento em tempo real.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="sol in solucoes" :key="sol.title" class="relative group bg-[#0A0A0A] p-8 md:p-10 rounded-2xl border border-white/5 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-[#A49274]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-center text-[#A49274] mb-6 shadow-xl">
                <component :is="sol.icon" class="w-7 h-7" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">{{ sol.title }}</h3>
              <p class="text-zinc-400 mb-8">{{ sol.description }}</p>
              
              <ul class="space-y-4">
                <li v-for="feature in sol.features" :key="feature" class="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 class="w-5 h-5 text-[#A49274] shrink-0" />
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
      <div class="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
        <ServerCog class="w-96 h-96 text-[#A49274]" />
      </div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para otimizar seus processos?</h2>
        <p class="text-zinc-400 mb-10 text-lg">Agende uma demonstração de como nossas integrações podem reduzir custos operacionais e escalar seu negócio.</p>
        <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold transition-all shadow-xl">
          Descobrir Soluções <CheckCircle2 class="w-5 h-5" />
        </a>
      </div>
    </section>

  </div>
</template>
