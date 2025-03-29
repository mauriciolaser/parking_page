import 'dotenv/config'; // Carga automáticamente las variables de entorno
import FtpDeploy from 'ftp-deploy';
import { resolve } from 'path';

// Imprime las variables de entorno para depuración
console.log('FTP_HOST:', process.env.FTP_HOST);
console.log('FTP_USER:', process.env.FTP_USER);
console.log('FTP_PASSWORD:', process.env.FTP_PASSWORD);
console.log('FTP_PORT:', process.env.FTP_PORT);
console.log('FTP_REMOTE_PATH:', process.env.FTP_REMOTE_PATH);

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT || 21,
  localRoot: resolve('./dist'), // Ruta local del build
  remoteRoot: process.env.FTP_REMOTE_PATH, // Ruta remota en el servidor FTP
  include: ['*', '**/*'], // Incluir todos los archivos y subdirectorios
  deleteRemote: false, // No borrar archivos remotos que ya no existan localmente (ajusta si lo requieres)
  forcePasv: true // Usar modo PASV
};

console.log('Iniciando deploy vía FTP...');

ftpDeploy.deploy(config)
  .then(result => {
    console.log('Deploy finalizado:', result);
  })
  .catch(err => {
    console.error('Error en el deploy:', err);
  });
