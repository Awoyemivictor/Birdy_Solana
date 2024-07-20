import "dotenv/config";
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers";
import { Connection, clusterApiUrl, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { createCreateMetadataAccountV3Instruction } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID, createMint, createMintToInstruction, getOrCreateAssociatedTokenAccount, createSetAuthorityInstruction, AuthorityType } from "@solana/spl-token";

// Load user keypair from environment
const user = getKeypairFromEnvironment("SECRET_KEY");

if (!user) {
  throw new Error('SECRET_KEY environment variable is not defined.');
}
console.log(`🔑 We've loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`);

const connection = new Connection(clusterApiUrl("devnet"), 'confirmed');
const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

// Creating the main token Mint account
const tokenMintAccount = await createMint(connection, user, user.publicKey, null, 2);
const link = getExplorerLink("address", tokenMintAccount.toString(), "devnet");
console.log(`✅ Finished! Created token mint: ${link}`);

// Tokenomics details
const totalSupply = 1000000000;
const charityWalletPercentage = 0.10;
const communityRewardsPercentage = 0.20;
const developmentFundPercentage = 0.10;
const circulatingSupplyPercentage = 0.60;

const charityWalletAmount = totalSupply * charityWalletPercentage;
const communityRewardsAmount = totalSupply * communityRewardsPercentage;
const developmentFundAmount = totalSupply * developmentFundPercentage;
const circulatingSupplyAmount = totalSupply * circulatingSupplyPercentage;

// Wallet public keys
const charityWallet = new PublicKey("6gdF9sSrSPTh894qdzLfPxBz2Chd1Z89vNkgdahNPdcY");
const communityRewardsWallet = new PublicKey("GDTQB46AcfkWgBtJt3j7ogwsugfEXUPRGCbegxqmu56c");
const developmentFundWallet = new PublicKey("FEwpJun8WZzBDNHd5cBuYyaTnpRDXsgxY6kkcjpaMD63");
const circulatingSupplyWallet = new PublicKey("Hbt8QJu3o6QW5RJ3WcL1woiM7ijnPKMMyGiX4CDg7C2A");

// Function to create and mint tokens to a wallet
async function createAndMintTokens(wallet, amount) {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      user,
      tokenMintAccount,
      wallet
    );

    const mintTransaction = new Transaction().add(
      createMintToInstruction(
        tokenMintAccount,
        tokenAccount.address,
        user.publicKey,
        amount
      )
    );

    const mintTx = await sendAndConfirmTransaction(connection, mintTransaction, [user]);
    console.log(`✅ Minted ${amount} tokens to ${wallet.toBase58()}. Transaction: ${getExplorerLink('transaction', mintTx, 'devnet')}`);
  } catch (error) {
    console.error(`Failed to create and mint tokens to wallet ${wallet.toBase58()}:`, error);
  }
}

// Mint tokens to respective wallets
await createAndMintTokens(charityWallet, charityWalletAmount);
await createAndMintTokens(communityRewardsWallet, communityRewardsAmount);
await createAndMintTokens(developmentFundWallet, developmentFundAmount);
await createAndMintTokens(circulatingSupplyWallet, circulatingSupplyAmount);

// Metadata information
const metadataData = {
  name: "Birdy",
  symbol: "Birdy",
  uri: "https://gray-immediate-hornet-865.mypinata.cloud/ipfs/QmfDfb8LCWDwhSVe4wBw9uWbEDhqBg7T4cmynh4YCSpgem",
  sellerFeeBasisPoints: 0,
  creators: null,
  collection: null,
  uses: null,
};

// Find the PDA for the metadata
const [metadataPDA, metadataBump] = await PublicKey.findProgramAddress([
  Buffer.from("metadata"),
  TOKEN_METADATA_PROGRAM_ID.toBuffer(),
  tokenMintAccount.toBuffer()
], TOKEN_METADATA_PROGRAM_ID);

// Ensure metadata PDA is valid
if (!metadataPDA) {
  throw new Error('Failed to find valid metadata PDA.');
}

console.log(`Metadata PDA: ${metadataPDA.toBase58()}`);

// Create metadata account
let transaction = new Transaction().add(
  createCreateMetadataAccountV3Instruction({
    metadata: metadataPDA,
    mint: tokenMintAccount,
    mintAuthority: user.publicKey,
    payer: user.publicKey,
    updateAuthority: user.publicKey,
  }, {
    createMetadataAccountArgsV3: {
      collectionDetails: null,
      data: metadataData,
      isMutable: true,
    },
  })
);

// Send the transaction to create metadata account
try {
  const createMetadataTx = await sendAndConfirmTransaction(connection, transaction, [user]);
  console.log(`✅ Metadata account created! Transaction: ${getExplorerLink('transaction', createMetadataTx, 'devnet')}`);
} catch (error) {
  console.error('Error creating metadata account:', error);
}

// Revoke minting authority
transaction = new Transaction().add(
  createSetAuthorityInstruction(
    tokenMintAccount,
    user.publicKey,
    AuthorityType.MintTokens,
    null
  )
);

// Send the transaction to revoke authorities
try {
  const revokeAuthoritiesTx = await sendAndConfirmTransaction(connection, transaction, [user]);
  console.log(`✅ Authorities revoked! Transaction: ${getExplorerLink('transaction', revokeAuthoritiesTx, 'devnet')}`);
} catch (error) {
  console.error('Error revoking authorities:', error);
}

// Get mint address link
const tokenMintLink = getExplorerLink("address", tokenMintAccount.toString(), "devnet");
console.log(`✅ Look at the token mint again: ${tokenMintLink}`);
