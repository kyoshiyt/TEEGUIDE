const fs = require('fs');
let c = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

c = c.replace("import { Logo } from '../ui/Logo'; from '../../config';", "import { Logo } from '../ui/Logo';");

fs.writeFileSync('src/components/layout/Footer.tsx', c);
