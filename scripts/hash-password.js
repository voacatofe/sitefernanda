const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('Por favor, forneça uma senha como argumento');
  process.exit(1);
}

bcrypt.hash(password, 10).then(hash => {
  console.log('Hash da senha:', hash);
}); 