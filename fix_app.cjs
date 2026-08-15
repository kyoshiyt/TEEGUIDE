const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(
  "import { Quiz } from './pages/Quiz';",
  "import { Quiz } from './pages/Quiz';\nimport { Search } from './pages/Search';"
);

c = c.replace(
  '<Route path="find-your-tshirt" element={<Quiz />} />',
  '<Route path="find-your-tshirt" element={<Quiz />} />\n            <Route path="search" element={<Search />} />'
);

fs.writeFileSync('src/App.tsx', c);
