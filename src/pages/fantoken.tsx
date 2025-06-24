import React from "react";
import styles from "@/styles/Home.module.css";
import { useAuth } from "@/hooks/useAuth";
import { useTokenMetadata } from "@/hooks/useTokenMetadata";
import BackToHub from "@/components/BackToHub";
import Image from "next/image";
import { TokenData } from "@/types/TokenData";

const TokenCard: React.FC<TokenData> = (token) => {
    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md ">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-1">{token.name}</h2>
                    <strong>Symbol:</strong> {token.symbol}
                    <div className="mt-1 ">
                        <strong>Token Address:</strong> {token.address}
                    </div>
                </div>

                {token.logo && (
                    <Image
                        src={token.logo}
                        alt={`${token.name} logo`}
                        className="mb-2 w-24 h-24 rounded-full"
                        width={96}
                        height={96}
                    />
                )}
            </div>
            <hr className="border-t-2 border-gray-300 my-4" />

            <div className="mb-2">
                <strong>Decimals:</strong> {token.decimals}
            </div>

            <div className="mb-2">
                <strong>Possible Spam:</strong>{" "}
                {token.possible_spam ? "Yes" : "No"}
            </div>
            <div className="mb-2">
                <strong>Verified Collection:</strong>{" "}
                {token.verified_collection ? "Yes" : "No"}
            </div>
        </div>
    );
};

function FanToken() {
    useAuth();
    const { tokens, loading } = useTokenMetadata();
    const date = new Date().getFullYear();

    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div>
                    <h1 className="my-8 text-center text-3xl font-bold">
                        Fan Tokens
                    </h1>
                    {loading ? (
                        <p>Loading tokens...</p>
                    ) : (
                        <div className=" mx-4 my-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            {tokens.map((token) => (
                                <TokenCard key={token.address} {...token} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <BackToHub />
            <footer className="text-center text-gray-500 text-sm mt-8">
                <p>&copy; {date} Virtual Meet. All rights reserved.</p>
            </footer>
        </main>
    );
}

export default FanToken;