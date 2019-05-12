const fs = require('fs');
const path = require('path');

const workspacePath = path.resolve(__dirname, '..', '..', 'test', 'mock-workspace');

/**
 * @param {string} filepath - The relative filepath to the document within the test workspace that should be modified.
 * @param {string} modification - The contents to be written to the file.
 * @return {undefined}
 */
function changeWorkspace(filepath, modification) {
  const target = path.resolve(workspacePath, filepath);
  let newContents;
  if (typeof modification === 'function') {
    let originalContents;
    try {
      originalContents = fs.readFileSync(target, 'utf8');
    } catch (e) {
      originalContents = {};
    }
    newContents = modification(originalContents);
  } else {
    newContents = modification;
  }
  fs.writeFileSync(target, newContents);
}

module.exports = { changeWorkspace };
