#!/bin/bash
tsc src/index.ts --resolveJsonModule --esModuleInterop --skipLibCheck
node src/index.js
rm  src/*.js
rm src/Boundary/*.js
rm src/Items/*.js
rm src/Repository/*.js
rm src/Console/*.js
rm test/*.js