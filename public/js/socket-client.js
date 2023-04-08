// Refs

const onlineRef = document.getElementById('online');
const offlineRef = document.getElementById('offline');

const txtMessage = document.getElementById('txtMessage');
const btnSubmit = document.getElementById('btnSubmit');

const socket = io();

socket.on('connect', () => {
  console.log("I'm connected");

  onlineRef.style.display = 'inline-block';
  offlineRef.style.display = 'none';
});

socket.on('disconnect', () => {
  console.log("I'm disconnected");
  onlineRef.style.display = 'none';
  offlineRef.style.display = 'inline-block';
});

socket.on('enviar-mensaje', (payload) => {
  console.log(payload)
})

btnSubmit.addEventListener('click', () => {
  const message = txtMessage.value;

  const payload = {
    message,
    id: 12345678,
    date: new Date().getTime(),
  };

  socket.emit('enviar-mensaje', payload, (id) => {
    // console.log('Desde el server', id);
  });
});
