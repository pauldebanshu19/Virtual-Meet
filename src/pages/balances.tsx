import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useBalances } from "@/hooks/useBalances";
import BackToHub from "@/components/BackToHub";

const Balances = () => {
    const { getBalances } = useBalances();
    const { address, isConnected } = useAuth();

    useEffect(() => {
        getBalances();
    }, [getBalances]);

    if (!isConnected) {
        return <p>Please connect your wallet</p>;
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Balances</h1>
            <div className={styles.container}>
                <div className=" lg:w-3/4 w-full h-full p-4 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-gray-100/10">
                    <h2 className=" text-2xl font-semibold mb-4 text-center ">
                        {`Token Balances for ${address}`}
                    </h2>
                    <div className=" mx-4 my-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                        <Image
                            src="/assets/images/ethereum.png"
                            alt="Ethereum"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>

                <BackToHub />
            </div>
        </div>
    );
};

export default Balances;