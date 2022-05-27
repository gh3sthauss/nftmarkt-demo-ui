import {
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useNetwork,
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";

import Modal from "react-modal";
import { useState } from "react";


export const ConnectWallet = () => {
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();

  const [modalIsOpen, setIsOpen] = useState();


  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      
    },
    overlay: {
      background: "rgba(156, 163, 175, 0.308)",

    }
  };
  


  // If a wallet is connected, show address, chainId and disconnect button

  if (address) {
    return (
      <div className="overflow-hidden truncate w-[10rem] text-white">
        <span className="text-white">{address}</span>
        {/* <button onClick={disconnectWallet}>Disconnect</button> */}
      </div>
    );
  } else {
    return (
      <div className="z-40">
        <button onClick={() => connectWithMetamask()} className="px-[15px] bg-indigo-500 rounded-2xl py-[8px]">Connect Wallet</button>
        
      </div>
    );
  }
};
