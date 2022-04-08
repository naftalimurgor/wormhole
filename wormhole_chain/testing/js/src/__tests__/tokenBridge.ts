import { describe, jest, test, expect } from "@jest/globals";
import {
  HOLE_DENOM,
  TENDERMINT_URL,
  TEST_TRANSFER_VAA,
  TEST_WALLET_MNEMONIC_1,
  TEST_WALLET_MNEMONIC_2,
} from "../consts";
import { redeemVaaMsg } from "../core/tokenBridge";
import {
  getAddress,
  getBalance,
  getWallet,
  getZeroFee,
  sendTokens,
  signSendAndConfirm,
} from "../core/walletHelpers";
import { getWormchainSigningClient } from "wormhole-chain-sdk";

jest.setTimeout(60000);

describe("Token bridge tests", () => {
  test("simple VAA redeem", async () => {
    // try {
    //   const wallet1 = await getWallet(TEST_WALLET_MNEMONIC_1);
    //   const wallet1Address = await getAddress(wallet1);
    //   const wallet1InitialBalance = await getBalance(
    //     HOLE_DENOM,
    //     wallet1Address
    //   );
    //   //VAA for 100 hole to this specific wallet
    //   const msg = redeemVaaMsg(TEST_TRANSFER_VAA);
    //   await signSendAndConfirm(wallet1, [msg]);
    //   const wallet1BalanceAfterTransfer = await getBalance(
    //     HOLE_DENOM,
    //     wallet1Address
    //   );
    //   expect(wallet1BalanceAfterTransfer - wallet1InitialBalance).toBe(
    //     100000000
    //   ); //100 hole = 100000000 uhole
    // } catch (e) {
    //   expect(true).toBe(false);
    //   console.error(e);
    // }
  });
  test("simple transfer out", async () => {
    try {
      const wallet2 = await getWallet(TEST_WALLET_MNEMONIC_2);
      const wallet2Address = await getAddress(wallet2);
      const wallet2InitialBalance = await getBalance(
        HOLE_DENOM,
        wallet2Address
      );
      //VAA for 100 hole to this specific wallet
      const client = await getWormchainSigningClient(TENDERMINT_URL, wallet2);

      const msg = client.tokenbridge.msgTransfer({
        creator: wallet2Address,
        amount: { amount: "100", denom: "uhole" },
        toChain: 2,
        toAddress: new Uint8Array(32),
        fee: "0",
      });

      //@ts-ignore
      const receipt = await client.signAndBroadcast(
        wallet2Address,
        [msg],
        getZeroFee()
      );

      const wallet2BalanceAfterTransfer = await getBalance(
        HOLE_DENOM,
        wallet2Address
      );
      console.log("balance before bridge ", wallet2InitialBalance);
      console.log("balance after bridge ", wallet2BalanceAfterTransfer);
      expect(
        parseInt(wallet2InitialBalance) - parseInt(wallet2BalanceAfterTransfer)
      ).toBe(100);
    } catch (e) {
      console.error(e);
      expect(true).toBe(false);
    }
  });
});
