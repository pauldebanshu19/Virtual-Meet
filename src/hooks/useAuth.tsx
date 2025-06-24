import { useAppContext } from "@/contexts/AppContext";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useEffect } from "react";

export function useAuth() {
    const { address, isConnected } = useAccount();

    const { setAddress, setIsConnected } = useAppContext();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    useEffect(() => {
        setAddress(address ?? "");
        setIsConnected(isConnected);
    }, [address, isConnected, setAddress, setIsConnected]);

    const handleConnect = async () => {
        try {
            const injectedConnector = connectors.find(
                (connector) => connector.id === "injected"
            );

            if (injectedConnector) {
                await connect({ connector: injectedConnector });
            } else if (connectors.length > 0) {
                await connect({ connector: connectors[0] });
            } else {
                console.log("No connectors available.");
            }
        } catch (error) {
            console.error("Connection error:", error);
        }
    };

    const handleDisconnect = () => {
        try {
            disconnect();
        } catch (error) {
            console.error("Disconnection error:", error);
        }
    };

    return {
        address,
        isConnected,
        handleConnect,
        handleDisconnect,
    };
}    