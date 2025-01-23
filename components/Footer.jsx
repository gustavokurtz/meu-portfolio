"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <section>
    {/* Seção de Contato */}
    <h2 className="text-3xl font-bold mt-12 text-center">Contato</h2>
    <div className="flex justify-center gap-8 mt-6 pb-8">
      <a href="https://github.com/gustavokurtz" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-5xl text-black transition-transform transform hover:scale-110" />
      </a>
      <a href="https://www.linkedin.com/in/gustavonascimentoo/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-5xl text-black transition-transform transform hover:scale-110" />
      </a>
      <a href="https://wa.me/+5532991532659" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-5xl text-black transition-transform transform hover:scale-110" />
      </a>
    </div>
  </section>
  )
}
