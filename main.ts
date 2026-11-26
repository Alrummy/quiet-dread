const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'entry.txt'),
  // The cat's stare hints at the absent chair's lingering presence.
  "The house has been silent for two days. The cat still stares at the corner where grandfather's chair used to be.\n",
  'utf8'
);
