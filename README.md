# StellarShelter

A decentralized rental platform built on Stellar blockchain enabling peer-to-peer property rentals with minimal fees, instant payments, and complete transparency.

## Why StellarShelter?

Traditional rental platforms impose high fees (7%-20%), slow payment processing, and lack transparency. StellarShelter leverages Stellar's blockchain to provide:

- **Low Fees**: Near-zero transaction costs (~$0.000001)
- **Fast Payments**: 3-5 second settlement times
- **Transparency**: All transactions on public ledger
- **Global Access**: No intermediaries or geographic restrictions

## Architecture

This is a monorepo containing three main applications:

- **Frontend** (`apps/web`): Next.js web application with React
- **Backend** (`apps/backend`): Node.js/Express API server
- **Smart Contracts** (`apps/contracts`): Soroban contracts on Stellar

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Rust and Cargo (for smart contracts)
- Stellar CLI (optional, for contract deployment)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd StellarShelter

# Install dependencies
npm install

# Install dependencies for each app
cd apps/web && npm install
cd ../backend && npm install
```

### Running Locally

**Frontend:**
```bash
cd apps/web
npm run dev
# Visit http://localhost:3000
```

**Backend:**
```bash
cd apps/backend
cp .env.example .env
npm run dev
# API runs on http://localhost:3001
```

**Smart Contracts:**
```bash
cd apps/contracts
cargo build --target wasm32-unknown-unknown --release
```

## Features

### Current
- Basic project structure
- Property listing UI component
- API health check endpoint
- Minimal rental smart contract

### Planned
- Property listing and search
- USDC payment integration
- Escrow system for secure payments
- User authentication with Stellar wallets
- Rental agreement management
- Review and rating system

## Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

1. **Code Contributions**: Fix bugs, add features, improve performance
2. **Documentation**: Improve README, add code comments, write guides
3. **Testing**: Write tests, report bugs, test new features
4. **Design**: UI/UX improvements, create mockups
5. **Community**: Help others, answer questions, spread the word

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/StellarShelter.git
   cd StellarShelter
   ```

3. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

### Commit Convention

We use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Example: `feat: add property search functionality`

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Add comments for complex logic
- Keep functions small and focused

### Pull Request Guidelines

- Describe what your PR does and why
- Reference any related issues
- Ensure code runs without errors
- Keep PRs focused on a single feature/fix
- Be responsive to feedback

### Development Workflow

1. Check [Issues](../../issues) for tasks to work on
2. Comment on an issue to claim it
3. Create a branch and implement your changes
4. Test your changes locally
5. Submit a PR with clear description
6. Address review feedback
7. Celebrate when merged! 🎉

### Need Help?

- Open an [Issue](../../issues) for bugs or questions
- Check existing issues and PRs first
- Be respectful and constructive

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Blockchain**: Stellar, Soroban smart contracts
- **Smart Contracts**: Rust, Soroban SDK

## Project Status

🚧 **Early Development** - This project is in active development. Core features are being built.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub Issues: [Report bugs or request features](../../issues)
- Discussions: [Join the conversation](../../discussions)

---

Built with ❤️ on Stellar blockchain