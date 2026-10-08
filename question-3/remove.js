
const fs = require('fs');
const path = require('path');

// Get the current directory
const currentDir = process.cwd();

// Get the Logs directory path
const logsDir = path.join(currentDir, 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logsDir)) {

    // Get all files inside Logs
    const files = fs.readdirSync(logsDir);

    // Delete each file
    files.forEach(file => {
        const filePath = path.join(logsDir, file);

        if (fs.statSync(filePath).isFile()) {
            console.log(`Deleting: ${file}`);
            fs.unlinkSync(filePath);
        }
    });

    // Remove Logs directory
    fs.rmdirSync(logsDir);

    console.log('Logs directory removed successfully!');
} else {
    console.log('Logs directory does not exist.');
}
