import FtpDeploy from 'ftp-deploy';
import { resolve } from 'path';
import configVars from './deploy-config.js'; // Importa las variables desde el archivo

// Imprime las variables de entorno para depuración
console.log('FTP_HOST:', configVars.FTP_HOST);
console.log('FTP_USER:', configVars.FTP_USER);
console.log('FTP_PASSWORD:', configVars.FTP_PASSWORD);
console.log('FTP_PORT:', configVars.FTP_PORT);
console.log('FTP_REMOTE_PATH:', configVars.FTP_REMOTE_PATH);

const ftpDeploy = new FtpDeploy();

const config = {
  user: configVars.FTP_USER,
  password: configVars.FTP_PASSWORD,
  host: configVars.FTP_HOST,
  port: configVars.FTP_PORT || 21,
  localRoot: resolve('./dist'),
  remoteRoot: configVars.FTP_REMOTE_PATH,
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true
};

console.log('Iniciando deploy vía FTP...');

ftpDeploy.deploy(config)
  .then(result => {
    console.log('Deploy finalizado:', result);
  })
  .catch(err => {
    console.error('Error en el deploy:', err);
  });
