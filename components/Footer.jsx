"use client"; // Necessário para hooks como useState e event handlers em Next.js App Router

import { useState } from 'react'; // Hook para gerenciar o estado do email e do status
import { motion } from "framer-motion"; // Para animações
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa"; // Ícones

export default function Footer() {
  // Estado para armazenar o valor do campo de email
  const [email, setEmail] = useState('');
  // Estado para mostrar mensagens de feedback (ex: Enviando..., Enviado com sucesso, Erro)
  const [status, setStatus] = useState('');

  // Função assíncrona para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    setStatus('Enviando...'); // Atualiza o status para feedback visual

    try {
      // Envia os dados para o SEU endpoint do Formspree
      const response = await fetch('https://formspree.io/f/manonbzy', { // <<< SUA URL INTEGRADA AQUI!
        method: 'POST', // Método HTTP para enviar dados
        headers: {
          'Content-Type': 'application/json', // Informa que estamos enviando JSON
          'Accept': 'application/json'      // Pede ao Formspree para responder em JSON
        },
        // Corpo da requisição: o email do usuário em formato JSON
        // Nota: Este código envia apenas o campo 'email'.
        // Se você adicionar outros campos ao formulário (como 'message'),
        // precisará adicioná-los aqui também. Ex: body: JSON.stringify({ email: email, message: suaVariavelDeMensagem })
        body: JSON.stringify({ email: email })
      });

      // Verifica se a requisição foi bem-sucedida (status 2xx)
      if (response.ok) {
        setStatus('Obrigado! Email enviado com sucesso.');
        setEmail(''); // Limpa o campo de email após o envio bem-sucedido
      } else {
        // Se houve erro no lado do servidor (ex: validação do Formspree)
        const data = await response.json(); // Tenta ler a resposta de erro JSON
        if (data.errors && data.errors.length > 0) {
          // Mostra a mensagem de erro específica do Formspree
          setStatus(`Erro: ${data.errors[0].message}`);
        } else {
          // Mensagem de erro genérica se não houver detalhes
          setStatus('Ops! Algo deu errado ao enviar.');
        }
      }
    } catch (error) {
      // Captura erros de rede ou outros problemas na requisição
      console.error("Erro na requisição fetch:", error);
      setStatus('Erro de conexão ao tentar enviar.');
    }
  };

  // Renderização do componente
  return (
    <section className="w-full bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 px-10 md:px-24 lg:px-40 rounded-t-3xl">
      <div className="max-w-5xl mx-auto">
        {/* Animação com Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título e linha decorativa */}
          <h2 className="text-4xl font-bold mb-2">Vamos criar algo incrível juntos</h2>
          <div className="h-1 w-24 bg-yellow-300 mb-8"></div>

          {/* Layout em Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Coluna da esquerda: Texto e Formulário */}
            <div>
              <p className="text-lg mb-6">
                Estou sempre aberto a novos desafios e oportunidades de colaboração. Se você tem um projeto em mente ou precisa de ajuda para dar vida a uma ideia, vamos conversar!
              </p>

              {/* Formulário com manipulador de envio */}
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex">
                  {/* Input de Email controlado pelo React */}
                  <input
                    type="email"
                    name="email" // Importante para o Formspree identificar o campo
                    placeholder="Seu email"
                    className="px-4 py-3 rounded-l-lg w-full bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-gray-400" // Ajuste de cor para placeholder
                    value={email} // Vincula o valor ao estado 'email'
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email' ao digitar
                    required // Torna o campo obrigatório
                  />
                  {/* Botão de Envio */}
                  <button
                    type="submit" // Define o botão para submeter o formulário
                    className={`bg-yellow-300 text-blue-900 rounded-r-lg px-6 hover:bg-yellow-400 transition-colors duration-300 flex items-center ${status === 'Enviando...' ? 'opacity-50 cursor-not-allowed' : ''}`} // Estilo e desabilita/muda cursor durante envio
                    disabled={status === 'Enviando...'} // Desabilita o botão durante o envio
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </form>
              {/* Exibe a mensagem de status (feedback) abaixo do formulário */}
              {status && <p className="mt-3 text-sm text-gray-300">{status}</p>}
            </div>

            {/* Coluna da direita: Links de Contato/Redes Sociais */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Ajuste para melhor responsividade */}
                {/* Link GitHub */}
                <a href="https://github.com/gustavokurtz" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-4 bg-blue-900 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                  <FaGithub className="text-3xl mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">GitHub</h3>
                    <p className="text-sm text-blue-300">Ver GitHub</p>
                  </div>
                </a>
                {/* Link LinkedIn */}
                <a href="https://www.linkedin.com/in/gustavonascimentoo/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-4 bg-blue-900 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                  <FaLinkedin className="text-3xl mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">LinkedIn</h3>
                    <p className="text-sm text-blue-300">Conecte-se comigo</p>
                  </div>
                </a>
                {/* Link WhatsApp */}
                <a href="https://wa.me/+5532991532659" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-4 bg-blue-900 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                  <FaWhatsapp className="text-3xl mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">WhatsApp</h3>
                    <p className="text-sm text-blue-300">Chat rápido</p>
                  </div>
                </a>
                {/* Link Email */}
                <a href="mailto:gustavoocontact@gmail.com" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-4 bg-blue-900 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                  <FaEnvelope className="text-3xl mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-blue-300">Contato</p>
                  </div>
                </a>
              </div>
            </div>
          </div> {/* Fim do Grid Principal */}

          {/* Rodapé inferior com direitos autorais */}
          <div className="border-t border-blue-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Gustavo Nascimento. Todos os direitos reservados.</p>
            <p>Feito com <span className="text-red-500 mx-1">❤</span> e muito código</p>
          </div>
        </motion.div> {/* Fim da Animação */}
      </div> {/* Fim do Container Principal */}
    </section> // Fim da Seção
  );
}