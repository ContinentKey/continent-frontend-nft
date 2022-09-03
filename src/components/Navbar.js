import { useMoralis } from "react-moralis";

import { useState } from "react";
import Logo from "../img/Logo.png";

const Navbar = ({ setSelectedTab, setShowWalletModal, setShowDisconnectModal }) => {
  const [isActive, setIsActive] = useState(false);
  const { isWeb3Enabled, chainId, account } = useMoralis();

  const tempAccount = account;
  let truncatedAccount = "";
  if (tempAccount !== null) {
    truncatedAccount = `${tempAccount.slice(0, 4)}...${tempAccount.slice(-4)}`;
  }

  function scrollToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
  }

  async function handleConnectDisconnect() {
    if (isWeb3Enabled) {
      setShowDisconnectModal(true);
    } else {
      setShowWalletModal(true);
    }
  }

  return (
    
  );
};

export default Navbar;