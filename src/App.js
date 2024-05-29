import React, { useState } from 'react';
import './App.css';

function App() {
    const [address, setAddress] = useState(null);

    const connectWallet = async () => {
        if (window.arweaveWallet) {
            try {
                await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'ACCESS_PUBLIC_KEY']);
                const addr = await window.arweaveWallet.getActiveAddress();
                setAddress(addr);
            } catch (error) {
                console.error('Error connecting to wallet:', error);
            }
        } else {
            console.error('ArConnect wallet not found');
        }
    };

    return (
        <div className="container">
            <h1>Welcome to, Hyper. Parallel. Computer.</h1>
            <div className="wallet-section">
                {address ? (
                    <p>Connected wallet address: {address}</p>
                ) : (
                    <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
                )}
            </div>
            <div className="links-section">
                <h2>Useful Links</h2>
                <ul>
                    <li><a href="https://discord.gg/du2mbc9P" target="_blank" rel="noopener noreferrer">Discord</a></li>
                    <li><a href="https://x.com/aoTheComputer" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://cookbook_ao.g8way.io/" target="_blank" rel="noopener noreferrer">Get Started With AO Cookbook</a></li>
                    <li><a href="https://ao.arweave.dev/" target="_blank" rel="noopener noreferrer">AO</a></li>
                </ul>
            </div>
        </div>
    );
}

export default App;