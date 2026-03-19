// src/components/ModalTrigger.jsx
export default function ModalTrigger({ 
  openModal, 
  icon,
  label = "Start Your Project",
  btnClass = "w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-slate-700 text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105 transition-all"
}) {
    
  return (
    <button
      onClick={openModal}
      className={btnClass}
    >
      {label}
      {icon && <span className="transition-transform">{icon}</span>}
    </button>
  );
}