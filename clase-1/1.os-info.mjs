import os from 'node:os'

console.log('Información del sistema operativo')
console.log('------------------')

console.log('Nombre del sistema operativo:', os.platform())
console.log('Version del sistema operativo:', os.release())
console.log('Arquitecura del sistema operativo:', os.arch())
console.log('Memoria libre del sistema operativo:', os.freemem() / 1024 / 1024, 'MB')
console.log('Memoria total del sistema operativo:', os.totalmem() / 1024 / 1024, 'MB')
console.log('uptime del sistema operativo:', os.uptime() / 60 / 60, 'horas')