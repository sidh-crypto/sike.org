---
layout: main.pug
---

<br>

## Implementation updates (April 15, 2020)

The [specification document](files/SIDH-spec.pdf) has been updated to reflect the following recent developments from members of the SIKE team.

### SIKE team updates

| Algorithmic improvements (applicable to all platforms) |
|-|

- New field arithmetic algorithms, available in the [Microsoft SIDH library](https://github.com/Microsoft/PQCrypto-SIDH). With the new optimizations, Encaps+Decaps runs in 5.9 msec., 8.2 msec., 16.1 msec. and 24.9 msec. for `SIKEp434`, `SIKEp503`, `SIKEp610` and `SIKEp751`, respectively, on a 3.4GHz x64 Intel (Skylake) CPU.

- New compressed SIKE implementation, which now includes the improvements described in [\[Naehrig and Renes, 2019\]](https://eprint.iacr.org/2019/499) and [\[Pereira et al., 2020\]](https://eprint.iacr.org/2020/431), available in the [Microsoft SIDH library](https://github.com/microsoft/PQCrypto-SIDH), resulting in the following changes:
  - Decapsulation is now ~1.6 times faster than the NIST round 2 compressed SIKE implementation, and only 5-9% slower than uncompressed SIKE. KeyGen is ~1.6 times faster, and Encapsulation is ~1.3 times faster.
  - Static library size is 1.5 to 4 times smaller than the NIST round 2 compressed SIKE implementation due to smaller discrete logarithm tables. For example, the `SIKEp503_compressed` library size has decreased from 5.6MB to 1.4MB.
  - Decapsulation no longer requires any discrete logarithm tables. As a result, decapsulation-only routines now have nearly the same static library size as SIKE without key compression.
  - Ciphertext sizes are 12.5% larger than the NIST round 2 compressed SIKE implementation. Public keys are 1 byte larger. Secret keys are ~50% larger.

| Platform-specific improvements |
|-|

- New ARMv8 optimized implementations, available in the [Microsoft SIDH library](https://github.com/Microsoft/PQCrypto-SIDH), representing a further improvement over previous work published by [\[Seo et al.\]](https://doi.org/10.1109/TCSI.2020.2979410) in TCAS (to appear). Encaps+Decaps for `SIKEp434`, `SIKEp503`, `SIKEp610` and `SIKEp751` now run in 29.4 ms, 40.9 ms, 94.9 ms and 141.6 ms, respectively, on a 1.992GHz 64-bit ARM Cortex-A72 processor.

- New speed-optimized pure hardware (FPGA, Artix-7) implementations by Brian Koziel, A-Bon Ackie, Rami El Khatib, Reza Azarderakhsh, and Mehran Mozaffari-Kermani ([preprint](https://eprint.iacr.org/2019/711), [source code](https://github.com/kozielbrian/VHDL-SIKE_R2)). The new results are faster and smaller than the previous work. For example, `SIKEp434` takes 14.4ms for Encap+Decap and occupies 8K slices, 240 DSPs and 26.5 BRAMs. 

- New ARM Cortex-M4 assembly optimized implementations by Hwajeong Seo, Mila Anastasova, Amir Jalali, and Reza Azarderakhsh ([preprint](https://eprint.iacr.org/2020/410), [source code](https://github.com/solowal/SIKE_M4)). The new results are 1.8x faster than previously reported results of [\[Seo et al.\]](https://doi.org/10.1109/TCSI.2020.2979410) from CANS 2019. For example, `SIKEp434` runs in a total time of 1.08s @168MHz (Encap+Decap). Results for energy and power consumption have been added to the updated specification document.

- New compact and efficient hw/sw co-design implementation by Pedro M.C. Massolino, Patrick Longa, Joost Renes and Lejla Batina ([preprint](https://eprint.iacr.org/2020/040), [source code](https://github.com/pmassolino/hw-sike), to appear in CHES 2020), targeting embedded applications. The smallest architecture based on a 128-bit MAC unit takes only 3415 slices, 21 BRAMs and 57 DSPs on a Virtex 7 690T and can perform key generation, encapsulation and decapsulation in 14.4, 24.4 and 26.0 milliseconds for `SIKEp434`, respectively.

### Other developments

The following additional recent developments may also be of interest to the community. The updated specification file does not reflect these developments.

- New [quantum cryptanalysis](https://eprint.iacr.org/2020/424) of SIKE by Jaques and Schrottenloher, improving upon [previous results](https://eprint.iacr.org/2019/103) of Jaques and Schanck. Note that even under the new cryptanalysis, the SIKE parameter sets still satisfy their respective claimed NIST security levels.
