import React from 'react';
import { motion } from 'framer-motion';

const JeitoDimas = () => {
  return (
    <section className="py-16 bg-[#181817]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Soluções únicas em moradia</h2>
        <p className="text-center mb-12 text-white/70 max-w-2xl mx-auto">
          Desenvolvemos uma linha de produtos específica para cada tipo de modo de vida. São produtos que englobam desde o luxo até os detalhes mais práticos da rotina.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Home Design",
              description: "Design como solução. Plantas inteligentes em empreendimentos de torre única, reunindo um mix de tipologias e estilos de vida em um só.",
              imgSrc: "https://www.dimasconstrucoes.com.br/static/home-design-c094cff2be32195b8d7ee24fd7ed318e.jpg",
              alt: "Home Design",
            },
            {
              title: "Residence Club",
              description: "Empreendimentos multi torres com estrutura completa para o lazer de toda a família.",
              imgSrc: "https://www.dimasconstrucoes.com.br/static/residence-club-6070fdd623c33511e8aaa1ed94c70703.jpg",
              alt: "Residence Club",
            },
            {
              title: "Smart Living",
              description: "Um lugar com centralidade, perto das principais rotas da cidade.",
              imgSrc: "https://www.dimasconstrucoes.com.br/static/smart-living-b659af73fcb92fe90b802ba416b101ec.jpg",
              alt: "Smart Living",
            },
            {
              title: "Beach Concept",
              description: "Empreendimentos junto ao mar com o jeito Dimas de viver a praia.",
              imgSrc: "https://www.dimasconstrucoes.com.br/static/beach-concept-c87c65af1439f796e1823925d3181dc0.jpg",
              alt: "Beach Concept",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={item.imgSrc} alt={item.alt} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-dimas-black mb-4">{item.title}</h3>
                <p className="text-dimas-black/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JeitoDimas; 