# Table of Contents

1.  [Inbox](#org155bf00)
    1.  [Bootstrap chain](#org819971b)
    2.  [Onboarding guardians](#org60d7dc9)


<a id="org155bf00"></a>

# Inbox


<a id="org819971b"></a>

## TODO Bootstrap chain

The native token of the Wormhole chain is $HOLE. This token is used both for
staking (governance) and fees. These tokens are already minted on Solana, and
they won't be available initially at the genesis of the chain. This presents
a number of difficulties around bootstrapping.

At genesis, the blockchain will be set up in the following way

1.  The staking denom is set to the $HOLE token (of which 0 exist on this chain at this moment)
2.  Producing blocks uses Proof of Authority (PoA) consensus (i.e. no tokens are required to produce blocks)
3.  Fees are set to 0

Then, the $HOLE tokens can be transferred over from Solana, and staking (with
delegation) can be done. At this stage, two different consensus mechanisms will
be in place simultaneously: block validation and guardian set election will
still use PoA, with each guardian having a singular vote. All other governance
votes will reach consensus with DPoS by staking $HOLE tokens.


<a id="org60d7dc9"></a>

## TODO Onboarding guardians

The validators of wormhole chain are going to be the 19 guardians. We need a
way to connect their existing guardian public keys with their wormhole chain
addresses. We will have a registration module where an account can register a
guardian public key with their wormhole chain address. This will entail
signing their wormhole address with their guardian private key, and sending
that signature from their wormhole address. At this point, if the signature
matches, the wormhole address becomes associated with the guardian public key.

After this, the guardian is eligible to become a validator.

Wormhole chain the ECDSA secp256k1 signature scheme, which is the same as what
the guardian signatures use, so we could directly derive a wormhole account for
them, but we choose not to do this in order to allow guardian key rotation.

    priv = ... // guardian private key
    addr = sdk.AccAddress(priv.PubKey().Address())

In theory it is possible to have multiple active guardian sets simultaneously
(e.g. during the expiration period of the previous set). We only want one set of
guardians to be able to produce blocks, so we store the active validator set
(which should typicall by a pointer to the most recent guardian set). We have to
be careful here, because if we update the guardian set to a new set where a
superminority of guardians are not online yet, they won&rsquo;t be able to register
themselves after the switch, since block production will come to a halt, and the
chain becomes deadlocked.

Thus we must only accept a guardian set update if a supermajority of guardians
in the new guardian set are already registered.