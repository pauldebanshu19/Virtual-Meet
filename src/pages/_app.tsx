import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { http, fallback } from "viem";
import { AppContextProvider } from "@/contexts/AppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: fallback([
            http("https://rpc.ankr.com/eth"),
            http("https://mainnet.chainnodes.org/a7b181ab-2b3d-4a1b-8b1a-9b8e2b8c3d4a"),
        ]),
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig config={config}>
            <QueryClientProvider client={queryClient}>
                <AppContextProvider>
                    <Component {...pageProps} />
                </AppContextProvider>
            </QueryClientProvider>
        </WagmiConfig>
    );
}