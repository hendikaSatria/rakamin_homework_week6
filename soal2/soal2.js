const fs = require('fs').promises;

async function copyFileContents(sourceFilePath, destinationFilePath) {
  try {
    // Read sample log
    const fileContents = await fs.readFile(sourceFilePath, 'utf-8');

    // Write to log.txt
    await fs.writeFile(destinationFilePath, fileContents);
    console.log('success');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

copyFileContents('sampleLog.txt', 'log.txt');