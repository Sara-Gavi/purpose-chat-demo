import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoApp from "../images/logo_app.png";

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

  useEffect(() => {
    console.log(messages); // compruebo si las frases llegan bien
  }, [messages]);

  // Guardamos cuántos mensajes mostrar (empezamos por el primero)
  const [currentStep, setCurrentStep] = useState(0);

  const lastMessageRef = useRef(null);

  // Mostramos solo los mesnajes hasta el paso actual
  const visibleMessages = messages.slice(0, currentStep + 1);

  // Función que avanza al siguiente mensaje
  function handleNextClick() {
    setCurrentStep(currentStep + 1);
  }

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStep]);

  return (
    <main className="chat">
      <div className="chat__container">
        {/* Recorremos los mensajes visibles y los mostramos en pantalla */}
        {visibleMessages.map((message, index) => {
          const bubbleClass =
            message.from === "user" ? "chat__user" : "chat__bot";
          // Solo el último mensaje visible tendrá la referencia
          const isLast = index === visibleMessages.length - 1;

          return (
            <div
              key={index}
              className={`chat__bubble ${bubbleClass}`}
              ref={isLast ? lastMessageRef : null}
            >
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
        {/* Logito al final como enlace de regreso a la Landing */}
        {currentStep === messages.length - 1 && messages.length > 0 && (
          <div className="chat__logo-end">
            <Link to="/">
              <img
                src={logoApp}
                alt="Volver al inicio"
                className="chat__logo"
              />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default ChatPage;
