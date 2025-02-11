import { toast } from "react-toastify";
import { errors } from "./errors";
import { UserInfo } from "../store/user";

export const checkMetaletInstalled = async () => {
	const metalet = window?.metaidwallet;
	// const connectRes = await metalet?.connect();

	if (typeof metalet === "undefined") {
		toast.error(errors.NO_METALET_DETECTED);
		throw new Error(errors.NO_METALET_DETECTED);
	}
	const connectRes = await metalet.connect();
	if (connectRes?.status === "not-logged-in") {
		toast.error(errors.NO_METALET_LOGIN);
		throw new Error(errors.NO_METALET_LOGIN);
	}
};

export const conirmMetaletTestnet = async () => {
	const metalet = window?.metaidwallet;
	const network = await metalet?.getNetwork();
	if (network?.network === "mainnet") {
		toast.error(errors.SWITCH_TESTNET_ALERT);
		await window.metaidwallet.switchNetwork({ network: "testnet" });

		throw new Error(errors.SWITCH_TESTNET_ALERT);
	}
};

export const checkMetaletConnected = async (connected: boolean) => {
	if (!connected) {
		toast.error(errors.NO_WALLET_CONNECTED);
		throw new Error(errors.NO_WALLET_CONNECTED);
	}
};

export const checkMetaidInitStillPool = (userInfo: UserInfo) => {
	if (userInfo.unconfirmed.split(",").includes("number")) {
		toast.error(errors.INIT_STILL_MEMPOOL);
		// throw new Error(errors.INIT_STILL_MEMPOOL);
	}
	return userInfo.unconfirmed.split(",").includes("number"); // true still mempool
};
