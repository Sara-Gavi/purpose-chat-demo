import { useState } from "react";

function ChatPage() {
  const [step, setStep] = useState(0); // empezamos desde 0
  // Simulamos una conversación para maquetar
  const conversation = [
    {
      from: "user",
      text: "Me preocupa que como humanidad no estemos a la altura del cambio que necesitamos.",
    },
    {
      from: "bot",
      text: "A veces no lo parece, pero hay información que nos dice que vamos por buen camino.",
    },
  ];

  return (
    <main className="chat">
      <section className="chat__container">
        {/* Aquí se mostrará la conversación cargada desde JSON */}
        <p>Cargando conversación...</p>
      </section>
    </main>
  );
}

export default ChatPage;
