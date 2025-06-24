# Virtual Meet

A Web3 virtual meeting application built with Next.js and wagmi. This project allows users to connect their Ethereum wallets, view token balances, and access exclusive content based on token ownership.

## Features

- **Wallet Connection**: Connect to the application using MetaMask or other browser wallets.
- **Balance Checker**: View your native ETH balance and ERC-20 token balances.
- **Fan Tokens**: See metadata for a predefined list of fan tokens.
- **Virtual Meeting**: A dedicated page for virtual meetings.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Web3**:
  - [wagmi](https://wagmi.sh/): React Hooks for Ethereum.
  - [viem](https://viem.sh/): A TypeScript interface for Ethereum.
  - [Moralis](https://moralis.io/): Web3 APIs for fetching on-chain data.
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/)
- A browser with a Web3 wallet extension (e.g., [MetaMask](https://metamask.io/))

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd virtual-meet
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env.local` file in the root of the project and add your Moralis API key:
    ```
    NEXT_PUBLIC_MORALIS_API_KEY=your_moralis_api_key_here
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
