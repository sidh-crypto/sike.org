---
layout: main.pug
---

# SIKE – <small>Supersingular Isogeny Key Encapsulation</small>

SIKE is an isogeny-based key encapsulation suite based on
pseudo-random walks in supersingular isogeny graphs, thay was
submitted to the [NIST standardization
process](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography) on
post-quantum cryptography. It contains two algorithms: 

- A CPA-secure public key encryption algorithm **SIKE.PKE**, and
- A CCA-secure key encapsulation mechanism **SIKE.KEM**,

each instantiated with three parameter sets: **SIKEp503**,
**SIKEp571** and **SIKEp964**.

| News |
|-|
| **2017-11-30:** | SIKE proposal submitted to [NIST PQC process](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography).

## Specification

### Related documents

#### Research articles, lecture notes:

- Luca De Feo. [Mathematics of Isogeny Based
  Cryptography](https://arxiv.org/abs/1711.04062), 2017.

- Craig Costello, Patrick Longa and Michael Naehrig. [Efficient
  algorithms for supersingular isogeny
  Diffie-Hellman](https://eprint.iacr.org/2016/413), 2016.

- Luca De Feo, David Jao and Jérôme Plût. [Towards Quantum-Resistant
  Cryptosystems From Supersingular Elliptic Curve
  Isogenies](https://eprint.iacr.org/2011/506), 2011.

#### Talks:

- Craig Costello. [Key encapsulation using supersingular
  isogenies](https://ecc2017.cs.ru.nl/slides/ecc2017-costello.pdf),
  Nov. 2017.

- Luca De Feo. [20 Years of Isogeny-Based
  Cryptography](http://defeo.lu/docet/assets/slides/2017-11-14-ecc.pdf),
  Nov. 2017.

## Implementation

### Known Answer Test

## Authors

### Contact
