import { useState, useEffect } from "react";

function ChatPage() {
  //Caja vacía paraguardar las frases que vengan del JSON
  const [messages, setMessages] = useState([]);
  //Al iniciar cargamos las frases desde frases.json
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}frases.json`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error al cargar las frases:", error));
  }, []);

  // Guardamos cuántos mensajes mostrar (empezamos por el primero)
  const [currentStep, setCurrentStep] = useState(0);

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
