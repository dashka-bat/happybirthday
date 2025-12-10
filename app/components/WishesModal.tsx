import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface WishesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const wishes = [
  { id: 1, gender: 'male', name: 'Dashka', text: "Nasan bayrin mendee minii naiz setegleerei ystoi mundagshu za teged onoodor oroi alyaa ", color: "from-blue-400 to-blue-600", img: "/eregtei 2.jpg" },
  { id: 2, gender: 'male', name: 'Super Boy', text: "May your year be as awesome as you are!", color: "from-indigo-400 to-indigo-600", img: "/image copy 6.png" },
  { id: 3, gender: 'female', name: 'Sweetie', text: "You are beautiful inside and out!", color: "from-pink-400 to-pink-600", img: "/image copy 7.png" },
  { id: 4, gender: 'female', name: 'LkhagvaTsend', text: "Nz gdg hun ymr bhiin hamgiin tod jishee shuu chi 😘 Tsaashdaa bidnii nohorlol udaan urgeljilj olon shn dursamjuudiig hamtdaa buteene gedgtee itgeltei bn 😉 Hairtai shuu broji", color: "from-rose-400 to-rose-600", img: "/image copy 8.png" },
  { id: 5, gender: 'female', name: 'Angel', text: "Sending you love and warm hugs!", color: "from-fuchsia-400 to-fuchsia-600", img: "/image copy 9.png" },
  { id: 6, gender: 'female', name: 'Cutie', text: "Smile big and laugh often today!", color: "from-purple-400 to-purple-600", img: "/image copy 10.png" },
  { id: 7, gender: 'female', name: 'Star', text: "Happy Birthday! Keep shining bright!", color: "from-red-400 to-red-600", img: "/image copy 11.png" },
];

export default function WishesModal({ isOpen, onClose }: WishesModalProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedWish = wishes.find(w => w.id === selectedId);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#fff0f3] rounded-3xl p-6 sm:p-8 max-w-4xl w-full relative shadow-[0_20px_60px_rgba(255,103,129,0.3)] border-4 border-[#ffb7c5] max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-[#ff6781] hover:bg-[#ffbcc9] w-8 h-8 rounded-full flex items-center justify-center transition-colors font-bold z-10"
            >
              ✕
            </button>

            <div className="text-center">
               <h2 className="text-3xl text-[#ff6781] mb-8 font-[family-name:var(--font-titan-one)] drop-shadow-sm">
                 Pick One to See a Wish!
               </h2>
               
               {/* Toys Grid */}
               <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                 {wishes.map((wish, index) => (
                   <motion.button
                     key={wish.id}
                     onClick={() => setSelectedId(wish.id)}
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: index * 0.1 }}
                     whileHover={{ scale: 1.1, rotate: 5 }}
                     whileTap={{ scale: 0.9 }}
                     className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[4px] shadow-md flex items-center justify-center overflow-hidden bg-white
                       ${selectedId === wish.id ? 'ring-4 ring-offset-2 ring-[#ff6781]' : ''}
                       ${wish.gender === 'male' ? 'border-blue-300' : 'border-pink-300'}
                     `}
                   >
                     {/* Using specific images with blend mode */}
                     <img 
                       src={wish.img} 
                       alt={wish.name}
                       className="w-full h-full object-cover mix-blend-multiply brightness-110 contrast-110"
                     />
                     <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${wish.color} pointer-events-none`}></div>
                   </motion.button>
                 ))}
               </div>

               {/* Selected Wish Message */}
               <AnimatePresence mode="wait">
                 {selectedWish ? (
                   <motion.div
                     key={selectedWish.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     className="bg-white/80 p-6 rounded-2xl border border-pink-100 shadow-sm inline-block max-w-2xl"
                   >
                     <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${selectedWish.color} bg-clip-text text-transparent font-[family-name:var(--font-titan-one)]`}>
                       {selectedWish.name} Says:
                     </h3>
                     <p className="text-xl sm:text-2xl text-[#d65c75] font-[family-name:var(--font-geist-mono)] leading-relaxed italic">
                       "{selectedWish.text}"
                     </p>
                   </motion.div>
                 ) : (
                   <div className="h-32 flex items-center justify-center text-[#ff8ca0]/60 italic font-[family-name:var(--font-titan-one)]">
                     (Click on a character above!)
                   </div>
                 )}
               </AnimatePresence>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
