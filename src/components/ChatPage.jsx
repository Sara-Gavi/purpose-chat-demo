import { useState } from "react";

function ChatPage() {
  // Guardamos cuántos mensajes mostrar (empezamos por el primero)
  const [currentStep, setCurrentStep] = useState(0);
  // Simulamos una conversación para maquetar
  // Mensajes simulados: uno del usuario y uno del bot
  const messages = [
    {
      from: "user",
      text: "Me preocupa que como humanidad no estemos a la altura del cambio que necesitamos.",
    },
    {
      from: "bot",
      text: "A veces no lo parece, pero hay información que nos dice que vamos por buen camino.",
    },
  ];

  // Mostramos solo los mensajes hasta el paso actual
  const visibleMessages = messages.slice(0, currentStep + 1);

  // Función que avanza al siguiente mensaje
  function handleNextClick() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <main className="chat">
      <div className="chat__container">
        {/* Recorremos los mensajes visibles y los mostramos en pantalla */}
        {visibleMessages.map((message, index) => {
          const bubbleClass =
            message.from === "user" ? "chat__user" : "chat__bot";

          return (
            <div key={index} className={`chat__bubble ${bubbleClass}`}>
              {message.text}
            </div>
          );
        })}

        {/* Si quedan mensajes por mostrar, aparece el botón */}
        {currentStep < messages.length - 1 && (
          <button className="chat__button" onClick={handleNextClick}>
            Conocer más
          </button>
        )}
      </div>
    </main>
  );
}

export default ChatPage;
