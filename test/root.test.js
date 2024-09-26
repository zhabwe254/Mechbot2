import { expect } from 'chai';
import fs from 'fs';
import path from 'path';

describe('Project Structure', () => {
  it('has a backend directory', () => {
    expect(fs.existsSync(path.join(__dirname, '..', 'backend'))).to.be.true;
  });

  it('has a frontend directory', () => {
    expect(fs.existsSync(path.join(__dirname, '..', 'frontend'))).to.be.true;
  });

  it('has a README.md file', () => {
    expect(fs.existsSync(path.join(__dirname, '..', 'README.md'))).to.be.true;
  });
});
