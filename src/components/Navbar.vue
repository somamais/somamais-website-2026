<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ChevronDown } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

interface NavLink {
  name: string
  href?: string
  children?: { name: string, href: string }[]
}

const navLinks: NavLink[] = [
  { name: 'Início', href: '/' },
  {
    name: 'Soluções',
    children: [
      { name: 'Soluções Digitais', href: '/solucoes-digitais' },
      { name: 'Inteligência Artificial', href: '/inteligencia-artificial' },
      { name: 'Integrações e Automação', href: '/integracoes-automacoes' }
    ]
  },
  {
    name: 'Produtos',
    children: [
      { name: 'Manydesk', href: '/produto/manydesk' },
      { name: 'Soma Clinic IA', href: '/produto/soma-clinic-ia' },
      { name: 'Port Fácil IA', href: '/produto/port-facil' }
    ]
  },
  { name: 'Quem Somos', href: '/#sobre' },
  { name: 'Contato', href: '/#contato' }
]
</script>

<template>
  <header 
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6'
    ]"
  >
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-full">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group">
            <img 
              src="/logo-soma.png" 
              alt="Soma+ Tecnologia" 
              class="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(164,146,116,0.3)]"
            />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
          <div v-for="(link, index) in navLinks" :key="index" class="relative group h-full flex items-center px-3">
            <template v-if="link.children">
              <button :class="[
                'flex items-center text-sm font-semibold transition-colors py-4',
                isScrolled ? 'text-white' : 'text-white/90',
                'hover:text-[#A49274]'
              ]">
                {{ link.name }}
                <ChevronDown class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <!-- Dropdown -->
              <div class="absolute left-0 top-full w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-0">
                <div class="bg-[#111111] rounded-2xl shadow-2xl border border-white/10 py-3 overflow-hidden backdrop-blur-xl mt-2">
                  <router-link 
                    v-for="child in link.children" 
                    :key="child.name" 
                    :to="child.href" 
                    class="block px-6 py-3 text-sm text-white/70 hover:text-[#A49274] hover:bg-white/5 transition-all font-medium"
                  >
                    {{ child.name }}
                  </router-link>
                </div>
              </div>
            </template>
            <template v-else>
              <router-link v-if="link.href?.startsWith('/') && !link.href?.includes('#')" :to="link.href" :class="[
                'text-sm font-semibold transition-colors py-4',
                isScrolled ? 'text-white' : 'text-white/90',
                'hover:text-[#A49274]'
              ]">
                {{ link.name }}
              </router-link>
              <a v-else :href="link.href" :class="[
                'text-sm font-semibold transition-colors py-4',
                isScrolled ? 'text-white' : 'text-white/90',
                'hover:text-[#A49274]'
              ]">
                {{ link.name }}
              </a>
            </template>
          </div>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="https://wa.me/message/XLKRYBVETX4YC1" target="_blank" rel="noopener noreferrer" 
            :class="[
              'px-6 py-2.5 rounded-xl font-bold transition-all text-sm border',
              isScrolled 
                ? 'bg-white text-black border-white hover:bg-white/90' 
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            ]"
          >
            Atendimento
          </a>
          <a href="/#contato" class="bg-[#A49274] hover:bg-[#8c7a5e] text-black px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-[#A49274]/20 hover:shadow-[#A49274]/40 hover:-translate-y-0.5 text-sm">
            Agendar Demonstração
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white/90 hover:text-[#A49274] p-2 transition-colors">
            <Menu v-if="!mobileMenuOpen" class="h-7 w-7" />
            <X v-else class="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-black/95 border-t border-white/10 absolute w-full shadow-2xl backdrop-blur-lg max-h-[calc(100vh-80px)] overflow-y-auto">
      <div class="px-4 pt-2 pb-6 space-y-1">
        <template v-for="(link, index) in navLinks" :key="index">
          <div v-if="link.children" class="py-2">
            <div class="px-3 text-base font-bold text-white/80 mb-2">{{ link.name }}</div>
            <div class="space-y-1 pl-4 border-l-2 border-[#A49274]/30 ml-3">
              <router-link 
                v-for="child in link.children" 
                :key="child.name" 
                :to="child.href" 
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-[#A49274] hover:bg-white/5"
              >
                {{ child.name }}
              </router-link>
            </div>
          </div>
          <router-link 
            v-else-if="link.href?.startsWith('/') && !link.href?.includes('#')"
            :to="link.href" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-3 rounded-md text-base font-medium text-white/80 hover:text-[#A49274] hover:bg-white/5"
          >
            {{ link.name }}
          </router-link>
          <a 
            v-else
            :href="link.href" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-3 rounded-md text-base font-medium text-white/80 hover:text-[#A49274] hover:bg-white/5"
          >
            {{ link.name }}
          </a>
        </template>
        
        <div class="pt-6 space-y-3">
          <a href="https://wa.me/message/XLKRYBVETX4YC1" target="_blank" rel="noopener noreferrer" @click="mobileMenuOpen = false" class="block w-full text-center border border-[#A49274] text-[#A49274] hover:bg-[#A49274]/10 px-5 py-3 rounded-xl font-bold transition-colors">
            Atendimento
          </a>
          <a href="/#contato" @click="mobileMenuOpen = false" class="block w-full text-center bg-[#A49274] hover:bg-[#8c7a5e] text-black px-5 py-3 rounded-xl font-bold transition-colors">
            Agendar Demonstração
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
