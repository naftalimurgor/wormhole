import keccak256 from "keccak256";
import { parseVaa, SignedVaa } from "../solana/wormhole/parse";

export async function getSignedVAAHash(signedVaa: SignedVaa) {
  return Uint8Array.from(keccak256(parseVaa(signedVaa).hash));
}
