import React, { useState, useEffect, useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useTranslation } from 'react-i18next'; 
import './JavaIDE.css';

const JavaIDE = () => {
  const { t } = useTranslation(); 
  const [code, setCode] = useState(`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Introduce la cantidad de números a ingresar: ");
        int n = scanner.nextInt();
        
        int[] numeros = new int[n];
        
        System.out.println("Introduce los " + n + " números:");
        for (int i = 0; i < n; i++) {
            numeros[i] = scanner.nextInt();
        }
        
        System.out.println("Números ingresados en orden inverso:");
        for (int i = n - 1; i >= 0; i--) {
            System.out.println(numeros[i]);
        }
        
        scanner.close();
    }
}
  `);
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [socket, setSocket] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    initializeWebSocket(); 
    return closeWebSocket; 
  }, []);

  const initializeWebSocket = () => {
    const ws = new WebSocket('ws://localhost:5000/run');
    ws.onopen = () => console.log("WebSocket connected");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.output) setOutput((prevOutput) => prevOutput + data.output);
      if (data.error) setOutput((prevOutput) => prevOutput + data.error);
      if (data.status === 'finished') setIsRunning(false);
    };

    ws.onclose = () => setSocket(null);
    setSocket(ws);
  };

  const closeWebSocket = () => {
    if (socket) socket.close();
  };

  const runCode = () => {
    if (!isRunning && socket) {
      setOutput('');
      setIsRunning(true);
      socket.send(JSON.stringify({ code: code }));
    } else {
      initializeWebSocket();
    }
  };

  const sendInput = () => {
    if (socket && isRunning) {
      const userInput = inputRef.current.value;
      socket.send(userInput);
      setInput('');
      inputRef.current.value = '';
    }
  };

  const stopExecution = () => {
    if (socket && isRunning) {
      socket.close();
      setIsRunning(false);
      setOutput((prevOutput) => prevOutput + `\n\n--- ${t('Ejecución detenida por el usuario')} ---\n`);
    }
  };

  const toggleInfoModal = () => setShowInfoModal(!showInfoModal);

  return (
    <div className="java-ide">
      <header className="java-ide-header">
        <h1>{t('Netbeans en Web')}</h1>
        <button className="info-button" onClick={toggleInfoModal}>ⅰ</button>
        <button className={`stop-button ${isRunning ? '' : 'hidden'}`} onClick={stopExecution}>◼︎</button>
      </header>
      <div className="modal" style={{ display: showInfoModal ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={toggleInfoModal}>&times;</span>
          <h2>{t('Instrucciones de uso')}</h2>
          <p>
            - {t('Escribe tu código Java en el editor')}<br />
            - {t('Haz clic en el botón Run para ejecutar el código')}<br />
            - {t('Durante la ejecución, puedes introducir datos')}<br />
            - {t('Utiliza el botón Enviar para enviar datos')}<br />
            - {t('Para detener la ejecución del programa, usa STOP')}<br />
            - {t('Recuerda que esto no es un IDE real')}
          </p>
        </div>
      </div>
      <div className="editor-container">
        <MonacoEditor height="50vh" language="java" value={code} onChange={setCode} />
      </div>
      <div className="button-container">
        <button className="run-button" onClick={runCode} disabled={isRunning}>
          {isRunning ? t('Ejecutar...') : t('Ejecutar')}
        </button>
      </div>
      <div className="input-container">
        <textarea
          ref={inputRef}
          className="input-textarea"
          disabled={!isRunning}
          placeholder={t('Entrada de datos')}
          rows="5"
          cols="50"
        />
        <button className="input-button" onClick={sendInput} disabled={!isRunning}>
          {t('Enviar')}
        </button>
      </div>
      <div className="output-container">
        <pre className="output">{output}</pre>
      </div>
    </div>
  );
};

export default JavaIDE;
