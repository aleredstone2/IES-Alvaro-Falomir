const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec, spawn } = require('child_process');
const fs = require('fs');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

app.use(bodyParser.json());
app.use(cors());

let childProcess = null; // Variable para almacenar el proceso hijo

app.ws('/run', (ws, req) => {
  ws.on('message', (msg) => {
    console.log("Received message:", msg);
    try {
      const data = JSON.parse(msg);
      const code = data.code;

      if (!code) {
        console.log("No code provided in the message");
        ws.send(JSON.stringify({ error: '' }));
        return;
      }

      console.log("Writing code to Main.java");
      fs.writeFile('Main.java', code, (err) => {
        if (err) {
          ws.send(JSON.stringify({ error: err.toString() }));
          return;
        }

        console.log("Compiling Main.java");
        exec('javac Main.java', (err, stdout, stderr) => {
          if (err) {
            ws.send(JSON.stringify({ error: stderr }));
            return;
          }

          console.log("Running Main.class");

          // Terminar el proceso anterior si existe
          if (childProcess) {
            childProcess.kill();
            childProcess = null;
          }

          // Ejecutar el programa Java
          childProcess = spawn('java', ['Main']);
          
          childProcess.stdout.on('data', (data) => {
            ws.send(JSON.stringify({ output: data.toString() }));
          });

          childProcess.stderr.on('data', (data) => {
            ws.send(JSON.stringify({ error: data.toString() }));
          });

          childProcess.on('close', (code) => {
            ws.send(JSON.stringify({ status: 'finished', code: code }));
          });

          ws.on('message', (input) => {
            console.log("Received input:", input);
            childProcess.stdin.write(input + '\n');
          });

          ws.on('close', () => {
            childProcess.stdin.end();
          });
        });
      });
    } catch (error) {
      ws.send(JSON.stringify({ error: 'Error processing message: ' + error.message }));
    }
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
