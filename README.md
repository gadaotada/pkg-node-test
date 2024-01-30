# Node.js Server with pkg

This project demonstrates a basic Node.js server that can be packaged into an executable for Windows or Linux using `pkg`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installing

Clone the repository to your local machine:
- Ensure you have Git installed on your machine.!

```bash
git clone https://github.com/gadaotada/pkg-node-test.git

```
Navigate to the cloned directory and install the dependencies(pkg is a global dep):

```bash
cd pkg-node-test
npm install -g pkg
npm install
```
## Generating the binary executable: 
# Windows: 
```bash
pkg . -t node-latest-win
```
# Linux: 
```bash
pkg . -t node-latest-linux
```

### Running the Server
# Without binary
```bash
node run start
```
# With binary
```bash
./test-node-pkg
```

### Code Overview:
- src/server.js: Main server file that sets up the Express server with CORS and JSON parsing.
- src/general.js: Contains utility functions like timeStampGen for generating timestamps.
- src/os/check.js: Includes shouldRun function to check the operating system conditions.