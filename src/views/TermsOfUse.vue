<script setup lang="ts">
const lastUpdate = new Date().toLocaleDateString('pt-BR');
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
    <h1 class="mb-8 text-4xl font-black text-white">Termos de Uso</h1>
    
    <div class="space-y-8 text-white text-justify">
      <p class="text-sm italic">
        Última atualização: {{ lastUpdate }}
      </p>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">1. Visão Geral</h2>
        <p>
          Bem-vindo ao site e aos serviços da <strong>SOMA+ Tecnologia Ltda.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº <strong>12.345.678/0001-99</strong>, com sede em São Paulo - SP ("SOMA+", "Nós" ou "Empresa").
        </p>
        <p class="mt-2">
          Estes Termos de Uso ("Termos") regem o acesso e uso do nosso website (somamais.ia.br) e de todas as soluções, softwares, APIs, e serviços relacionados (coletivamente, "Serviços"). Ao acessar ou utilizar nossos Serviços, você ("Usuário" ou "Cliente") concorda em cumprir estes Termos. Se você não concordar com qualquer parte destes termos, não deverá acessar ou utilizar nossos Serviços.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">2. Elegibilidade e Cadastro</h2>
        <p>
          Para utilizar certas funcionalidades dos nossos Serviços, você pode precisar se cadastrar e criar uma conta. Ao se cadastrar, você garante que:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>É maior de 18 anos ou possui capacidade civil plena;</li>
          <li>As informações fornecidas são verdadeiras, precisas e completas;</li>
          <li>Manterá a confidencialidade de suas credenciais de acesso, sendo o único responsável por todas as atividades que ocorram em sua conta.</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">3. Uso Aceitável</h2>
        <p>
          O Usuário concorda em utilizar os Serviços apenas para fins lícitos e de acordo com estes Termos. Es estritamente proibido:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>Utilizar os Serviços para qualquer finalidade ilegal ou não autorizada;</li>
          <li>Tentar violar a segurança, realizar engenharia reversa ou interferir na integridade dos nossos sistemas;</li>
          <li>Copiar, modificar, distribuir ou vender qualquer parte dos nossos Serviços sem autorização expressa;</li>
          <li>Utilizar bots, crawlers ou outros meios automatizados para acessar os Serviços;</li>
          <li>Enviar ou transmitir vírus, malwares ou códigos destrutivos.</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">4. Propriedade Intelectual</h2>
        <p>
          Todos os direitos de propriedade intelectual relacionados aos Serviços, incluindo, mas não se limitando a, software, algoritmos, designs, textos, gráficos, logotipos (incluindo a marca "SOMA+"), e segredos comerciais, são de propriedade exclusiva da <strong>SOMA+ Tecnologia Ltda.</strong> ou de seus licenciadores.
        </p>
        <p class="mt-2">
          O uso dos Serviços não confere ao Usuário qualquer direito de propriedade sobre os mesmos, exceto pela licença limitada, não exclusiva e revogável de uso conforme estipulado nestes Termos ou em contrato específico de prestação de serviços.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">5. Planos, Pagamentos e Cancelamento</h2>
        <p>
          Caso o Usuário contrate serviços pagos da SOMA+, os termos específicos de pagamento, renovação e cancelamento serão regidos pelo Contrato de Prestação de Serviços ou pela Proposta Comercial aceita no momento da contratação. Na ausência de tal documento, aplicam-se as leis vigentes de proteção ao consumidor e as práticas comerciais padrão.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">6. Limitação de Responsabilidade</h2>
        <p>
          Os Serviços são fornecidos "como estão" ("as is"). Embora nos esforcemos para manter a alta disponibilidade e precisão dos nossos sistemas de IA e automação:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>Não garantimos que os Serviços serão ininterruptos, livres de erros ou completamente seguros;</li>
          <li>A SOMA+ Tecnologia Ltda. não será responsável por danos indiretos, incidentais, especiais ou consequentes, incluindo perda de lucros, dados ou interrupção de negócios, decorrentes do uso ou incapacidade de uso dos Serviços;</li>
          <li>A responsabilidade total da SOMA+, em qualquer circunstância, limitar-se-á ao valor pago pelo Usuário pelos Serviços nos últimos 12 (doze) meses.</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">7. Proteção de Dados e Privacidade</h2>
        <p>
          O tratamento de dados pessoais coletados durante o uso dos Serviços é regido pela nossa <strong>Política de Privacidade</strong> e está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD). Ao usar nossos Serviços, você concorda com a coleta e uso de informações conforme descrito na referida política.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">8. Links de Terceiros</h2>
        <p>
          Nossos Serviços podem conter links para sites ou serviços de terceiros que não são de propriedade ou controlados pela SOMA+. Não temos controle sobre, e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">9. Modificações dos Termos</h2>
        <p>
          Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão notificadas através do nosso site ou por e-mail. O uso continuado dos Serviços após a publicação das alterações constitui aceitação dos novos Termos.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">10. Legislação e Foro</h2>
        <p>
          Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. As partes elegem o Foro da Comarca de São Paulo - SP como único competente para dirimir quaisquer litígios oriundos destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
        </p>
      </section>

      <section class="pt-8 border-t border-white/20">
        <p class="font-bold">SOMA+ Tecnologia Ltda.</p>
        <p>CNPJ: 12.345.678/0001-99</p>
        <p>E-mail para contato: contact@somamais.ia.br</p>
      </section>
    </div>
  </div>
</template>
