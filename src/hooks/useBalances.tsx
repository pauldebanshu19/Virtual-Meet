import { useAppContext } from "@/contexts/AppContext";
import Moralis from "moralis";
import { useCallback, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;

export function useBalances() {
    const { address } = useAppContext();
    const [loading, setLoading] = useState(true);

    const getNativeBalance = useCallback(async () => {
        if (!address) return;
        try {
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }
        } catch (error) {
            console.error(error);
        }
    }, [address]);

    const getTokenBalances = useCallback(async () => {
        if (!address) return;
        setLoading(true);
        try {
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [address]);

    const getBalances = useCallback(async () => {
        if (!address) {
            console.log("No address found");
            return;
        }
        await getNativeBalance();
        await getTokenBalances();
    }, [address, getNativeBalance, getTokenBalances]);

    useEffect(() => {
        if (address) {
            getBalances();
        }
    }, [address, getBalances]);

    return {
        loading,
        getBalances,
    };
}