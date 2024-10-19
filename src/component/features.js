import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import risol from '../assets/risol.jpg';
import minuman from '../assets/minuman2.jpeg'; 
import miejebew from '../assets/miejebew.jpg'; 
import lego from '../assets/lego.jpg';  // The same image for all products in this case, replace if needed

// Step 1: Create product data and export it
export const products = [
  {
    id: 1,
    name: "Risol",
    description: "Lapar tapi bingung mau ngemil apa? Risols kami hadir dengan isian yang melimpah dan kulit yang super renyah, pas banget buat teman nonton atau kerja! Jangan lewatkan kelezatan yang selalu bikin nagih di setiap gigitannya. Pesan sekarang dan rasakan kenikmatan risols yang menggugah selera, kapan saja dan di mana saja!",
    image: risol
  },
  {
    id: 2,
    name: "Minuman",
    description: "Haus setelah seharian beraktivitas? Minuman rencengan kami siap menyegarkan tubuhmu dengan kesegaran yang praktis di setiap tegukan. Kecil, praktis, dan bisa dibawa ke mana saja, cocok banget buat temani perjalanan panjang atau sekadar rehat di tengah sibuknya harimu. Ambil minuman favoritmu sekarang dan nikmati sensasi segarnya kapan pun kamu butuh!",
    image: minuman
  },
  {
    id: 3,
    name: "Mie Jebew",
    description: "Bangun kreativitasmu dan ciptakan dunia seru dengan Lego Bricks! Dengan pilihan tak terbatas, kamu bisa membuat apapun yang kamu inginkan, dari gedung tinggi hingga petualangan imajinatif. Ajak teman-temanmu yang paling kamu suka dan buat momen bermain jadi lebih menyenangkan. Karena, apa yang lebih seru daripada membangun bersama orang-orang spesial? Mulai petualangan baru dengan Lego Bricks hari ini!",
    image: miejebew
  },
  {
    id: 4,
    name: "Lego Bricks ",
    description: "Bangun kreativitasmu dan ciptakan dunia seru dengan Lego Bricks! Dengan pilihan tak terbatas, kamu bisa membuat apapun yang kamu inginkan, dari gedung tinggi hingga petualangan imajinatif. Ajak teman-temanmu yang paling kamu suka dan buat momen bermain jadi lebih menyenangkan. Karena, apa yang lebih seru daripada membangun bersama orang-orang spesial? Mulai petualangan baru dengan Lego Bricks hari ini!",
    image: lego
  }
];


const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Product Kita</h2>

        <div
          className="grid grid-cols-1 gap-8"
          ref={featureRef}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} bg-white p-6 shadow-lg rounded-lg`}
              initial={{ opacity: 0, y: 50 }} // Starting animation state
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to these properties
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay each card animation
              whileHover={{ scale: 1.05 }} // Hover effect animation
            >
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg w-3/4 h-96 ml-10 object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
