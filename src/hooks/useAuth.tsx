import { useAppContext } from "@/contexts/AppContext";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export function useAuth() {
    const { address, isConnected } = useAccount();

    const { setAddress, setIsConnected } = useAppContext();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    }); 

    const { disconnect } = useDisconnect();
    const handleConnect = async () => {
        try {
            if (isConnected) {
                await handleConnect();
            }

            await connect();
            setAddress(address || "");
            setIsConnected(isConnected);
        } catch (error) {
            console.error("Connection error:", error);    
        }
    };
    
    const handleDisconnect = async () => {
        try {
            await disconnect();
            setAddress(address || "");
            setIsConnected(isConnected);
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