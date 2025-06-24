export type TokenData = {
    address: string;
    name: string;
    symbol: string;
    decimals: string;
    logo?: string | null;
    logo_hash?: string | null;
    thumbnail?: string | null;
    block_number?: string;
    validated?: number;
    created_at?: string | null;
    possible_spam?: boolean;
    verified_collection?: boolean;
};