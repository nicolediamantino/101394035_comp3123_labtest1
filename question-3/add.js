
const fs = require('fs');
const path = require('path');

// Get the current directory
const currentDir = process.cwd();

// Create the Logs directory path
const logsDir = path.join(currentDir, 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Change current working directory to Logs
process.chdir(logsDir);

// Create 10 log files
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;

    fs.writeFileSync(fileName, `This is log file ${i}`);

    console.log(fileName);
}
