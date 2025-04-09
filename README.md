# Kurocado Studio QA

This repository contains the **Quality Assurance (QA)** resources, guidelines, and automated
workflows for [Kurocado Studio](https://www.kurocado.studio). It is designed to streamline testing,
ensure code quality, and provide standardized workflows for both internal teams and client projects.

## Documentation

For an overview of this QA solution’s objectives, scope, and use cases, see the
[QA Overview](https://kurocado-studio.github.io/qa).

## Prerequisites

- **Node.js v20 or higher**  
  [Download Node.js](https://nodejs.org/)

- **PNPM**  
  [PNPM Installation Guide](https://pnpm.io/installation)  
  You can install PNPM globally with:
  ```bash
  npm install -g pnpm
  ```

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Kurocado-Studio/qa.git
   cd qa
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Initial setup**:
   ```bash
   pnpm run setup
   ```
   This command will install all required packages and run any setup scripts (e.g., installing Husky
   hooks).

## Local Development

- **Run Linting**:

  ```bash
  pnpm run lint
  ```

- **Build**
  ```bash
  pnpm run build
  ```
