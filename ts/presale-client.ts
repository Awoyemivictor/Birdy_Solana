import * as anchor from '@project-serum/anchor';
import { Connection, PublicKey, Keypair, SystemProgram } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction } from '@solana/spl-token';
import idl from './idl.json'; // Import the IDL for your program

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const provider = new anchor.AnchorProvider(connection, Keypair.generate(), anchor.AnchorProvider.defaultOptions());
anchor.setProvider(provider);

const programId = new PublicKey('YOUR_PROGRAM_ID');
const program = new anchor.Program(idl, programId, provider);

async function initializePresale(admin: Keypair) {
  const [statePda, bump] = await PublicKey.findProgramAddress(
    [Buffer.from('presale_state')],
    program.programId
  );

  await program.methods.initialize(bump).accounts({
    state: statePda,
    admin: admin.publicKey,
    systemProgram: SystemProgram.programId,
  }).signers([admin]).rpc();
  console.log(`Presale initialized: ${statePda.toBase58()}`);
}

async function startPresale(admin: Keypair) {
  const [statePda] = await PublicKey.findProgramAddress(
    [Buffer.from('presale_state')],
    program.programId
  );

  await program.methods.startPresale().accounts({
    state: statePda,
    admin: admin.publicKey,
  }).signers([admin]).rpc();
  console.log('Presale started');
}

async function buyTokens(user: Keypair, amount: number) {
  const [statePda] = await PublicKey.findProgramAddress(
    [Buffer.from('presale_state')],
    program.programId
  );

  const userTokenAccount = new PublicKey('USER_TOKEN_ACCOUNT_PUBLIC_KEY');
  const presaleAccount = new PublicKey('PRESALE_ACCOUNT_PUBLIC_KEY');

  await program.methods.buyTokens(new anchor.BN(amount)).accounts({
    state: statePda,
    userTokenAccount,
    presaleAccount,
    userAuthority: user.publicKey,
    tokenProgram: TOKEN_PROGRAM_ID,
  }).signers([user]).rpc();
  console.log('Tokens bought');
}

// Example usage
const admin = Keypair.fromSecretKey(Uint8Array.from([...]));
await initializePresale(admin);
await startPresale(admin);

const user = Keypair.fromSecretKey(Uint8Array.from([...]));
await buyTokens(user, 100);
