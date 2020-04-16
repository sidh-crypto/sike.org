---
layout: main.pug
---

<br>

## Implementation updates (April 15, 2020)

The [specification document](files/SIDH-spec.pdf) has been updated to reflect the following recent developments from members of the SIKE team.

| Updates from the SIKE team (included in updated specification) |
|-|

- New x64 and ARMv8 assembly optimized implementations, with 5-10% faster performance, available in the [Microsoft SIDH library](https://github.com/Microsoft/PQCrypto-SIDH).

- New compressed SIKE implementation based on [ePrint:2020/431](https://eprint.iacr.org/2020/431), available in the [Microsoft SIDH library](https://github.com/Microsoft/PQCrypto-SIDH).
  - Decapsulation is ~1.6 times faster than NIST round 2 compressed SIKE implementation, and only 5-7% slower than uncompressed SIKE.
  - Static library size is 1.5 to 4 times smaller than NIST round 2 compressed SIKE implementation (for example, `SIKEp504_compressed` code size has decreased from 5.6MB to 1.4MB) due to smaller discrete logarithm tables.
  - Decapsulation no longer requires any discrete logarithm tables.
  - Ciphertext sizes are 12.5% larger than NIST round 2 compressed SIKE implementation. Public keys are 1 byte larger. Secret keys are ~50% larger.

- New ARM Cortex-M4 assembly optimized implementation ([paper](https://eprint.iacr.org/2020/410), [source code](https://github.com/solowal/SIKE_M4)).

- New hardware/software co-design implementation ([paper](https://eprint.iacr.org/2020/040), [source code](https://github.com/pmassolino/hw-sike)).

- New speed-optimized VHDL implementation ([paper](https://eprint.iacr.org/2019/711), [source code](https://github.com/kozielbrian/VHDL-SIKE_R2))

| Other recent developments (not included in updated specification) |
|-|

- New [quantum cryptanalysis](https://eprint.iacr.org/2020/424) of SIKE by Jaques and Schrottenloher, improving upon [previous results](https://eprint.iacr.org/2019/103) of Jaques and Schanck. Note that even under the new cryptanalysis, the SIKE parameter sets still satisfy their respective claimed NIST security levels.
