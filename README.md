# Texas Exploration

A search fund dedicated to acquiring and growing small businesses in Central Texas.

## About

Texas Exploration is a professional landing page for a search fund focused on acquiring and stewarding exceptional small businesses in Central Texas. The website showcases the fund's values, search criteria, and founder background to connect with business owners, brokers, and investors.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd site
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development

To run the development server with live reload and CSS watching:

```bash
npm run dev
```

This will:
- Start live-server on `http://localhost:8080`
- Watch for CSS changes and rebuild automatically
- Auto-refresh the browser on file changes

### Build for Production

To build the optimized CSS for production:

```bash
npm run build
```

This generates a minified CSS file at `dist/styles.css`.

### Individual Commands

- **Watch CSS only**: `npm run watch:css`
- **Build CSS**: `npm run build:css`
- **Serve only**: `npm run serve`

