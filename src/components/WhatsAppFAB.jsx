function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/2340000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-transform animate-float-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined text-2xl">chat</span>
    </a>
  );
}

export default WhatsAppFAB;

