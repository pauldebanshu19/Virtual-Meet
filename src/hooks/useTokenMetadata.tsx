import { useCallback, useEffect, useState } from "react";
import Moralis from "moralis";
import { TokenData } from "@/types/TokenData";
import { apiKey, token_address_list } from "@/util/addresses";
import { current_chain } from "@/util/chain";

interface MoralisToken {
    address: string;
    symbol: string;
    name: string;
    decimals: string;
    logo?: string | null;
    thumbnail?: string | null;
    logo_hash?: string | null;
    block_number?: string | number;
    validated?: number;
    created_at?: string;
    possible_spam?: boolean;
    verified_contract?: boolean;
}

export function useTokenMetadata() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [tokens, setTokens] = useState<TokenData[]>([]);

    const fetchTokenMetadata = useCallback(async () => {
        try {
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }

            const token_metadatas = await Moralis.EvmApi.token.getTokenMetadata(
                {
                    addresses: token_address_list,
                    chain: current_chain,
                }
            );
            const formattedTokens: TokenData[] = token_metadatas.toJSON().map((token: MoralisToken) => ({
                address: token.address,
                name: token.name,
                symbol: token.symbol,
                decimals: token.decimals,
                logo: token.logo,
                logo_hash: token.logo_hash,
                thumbnail: token.thumbnail,
                block_number: token.block_number ? String(token.block_number) : undefined,
                validated: token.validated,
                created_at: token.created_at,
                possible_spam: token.possible_spam ?? false,
                verified_collection: token.verified_contract ?? false,
            }));

            setTokens(formattedTokens);
        } catch (error) {
            console.log("Error fetching token metadata:", error);
            setMessage("Error fetching token metadata");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTokenMetadata();
    }, [fetchTokenMetadata]);

    return {
        loading,
        message,
        tokens,
    };
}