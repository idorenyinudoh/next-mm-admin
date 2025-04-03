'use client';
import React, { ReactNode, useEffect } from 'react';
import 'styles/App.css';
import 'styles/Contact.css';
import 'styles/MiniCalendar.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import { connectMetaMask, connectTronLink } from '../utils/wallets';

export default function AppWrappers({ children }: { children: ReactNode }) {
  useEffect(() => {
    async function initializeWallets() {
      try {
        const metaMaskData = await connectMetaMask();
        console.log("Connected to MetaMask:", metaMaskData);

        const tronLinkData = await connectTronLink();
        console.log("Connected to TronLink:", tronLinkData);
      } catch (error) {
        console.error("Wallet connection error:", error);
      }
    }

    initializeWallets();
  }, []);

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
