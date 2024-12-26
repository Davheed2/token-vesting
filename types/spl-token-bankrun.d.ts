declare module "spl-token-bankrun" {
  import { PublicKey } from "@solana/web3.js";
  import { BanksClient } from "solana-bankrun";

  export function createMint(
    banksClient: BanksClient,
    payer: any,
    mintAuthority: PublicKey,
    freezeAuthority: PublicKey | null,
    decimals: number
    ): Promise<PublicKey>;
    
    export function mintTo(
        banksClient: BanksClient,
        payer: any,
        mint: PublicKey,
        destination: PublicKey,
        authority: any,
        amount: number
      ): Promise<void>;
}
