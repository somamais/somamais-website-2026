import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SolucoesDigitais from '../views/SolucoesDigitais.vue'
import InteligenciaArtificial from '../views/InteligenciaArtificial.vue'
import IntegracoesAutomacoes from '../views/IntegracoesAutomacoes.vue'
import Manydesk from '../views/products/Manydesk.vue'
import ClinicIA from '../views/products/ClinicIA.vue'
import PortFacil from '../views/products/PortFacil.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/solucoes-digitais',
      name: 'solucoes-digitais',
      component: SolucoesDigitais
    },
    {
      path: '/inteligencia-artificial',
      name: 'inteligencia-artificial',
      component: InteligenciaArtificial
    },
    {
      path: '/integracoes-automacoes',
      name: 'integracoes-automacoes',
      component: IntegracoesAutomacoes
    },
    {
      path: '/produto/manydesk',
      name: 'manydesk',
      component: Manydesk
    },
    {
      path: '/produto/soma-clinic-ia',
      name: 'clinicia',
      component: ClinicIA
    },
    {
      path: '/produto/port-facil',
      name: 'portfacil',
      component: PortFacil
    },
    {
      path: '/termos-de-uso',
      name: 'termos-de-uso',
      component: TermsOfUse
    },
    {
      path: '/politica-de-privacidade',
      name: 'politica-de-privacidade',
      component: PrivacyPolicy
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
