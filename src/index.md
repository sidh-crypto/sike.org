---
layout: main.pug
---

# SIKE – <small>Supersingular Isogeny Key Encapsulation</small>

SIKE is an isogeny-based key encapsulation suite based on pseudo-random
walks in supersingular isogeny graphs, that was submitted to the [NIST
standardization
process](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography) on
post-quantum cryptography. It contains two algorithms:

- A CPA-secure public key encryption algorithm **SIKE.PKE**, and
- A CCA-secure key encapsulation mechanism **SIKE.KEM**,

each instantiated with four parameter sets: **SIKEp434**,
**SIKEp503**, **SIKEp610** and **SIKEp751**.

| News |
|-|
| **2020-10-10:** |
3rd round files available.
| **2020-04-16:** |
[List of implementation updates](implementation-update.html) submitted to NIST.
| **2019-04-17:** |
New version of specification available from this web site ([list of changes and errata](changes.html)).
| **2019-04-10:** |
Updated specification for the 2nd round.
| **2017-11-30:** |
SIKE proposal submitted to [NIST PQC process](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography).

## Specification

### NIST submission

The original submission package can be downloaded from the [NIST web
site](https://csrc.nist.gov/projects/post-quantum-cryptography/round-2-submissions).
An updated version of the submission package (with corrections) is available
from this server, in [tar.gz](files/sike.tar.gz) or [ZIP](files/SIKE.zip) format.

The (updated) specification document alone can also be [downloaded
separately](files/SIDH-spec.pdf).

### Resources

#### Research articles

Hardware implementation

- Reza Azarderakhsh, Rami El Khatib, Brian Koziel, and Brandon
  Langenberg. [Hardware deployment of hybrid
  PQC](https://eprint.iacr.org/2021/541), Apr. 2021.

- Rami Elkhatib, Reza Azarderakhsh and Mehran
  Mozaffari-Kermani. [Efficient and fast hardware architectures for
  SIKE round 2 on FPGA](https://eprint.iacr.org/2020/611), May 2020.
  Published in ARITH 2020.

- Pedro Maat C. Massolino, Patrick Longa, Joost Renes and Lejla
  Batina. [A compact and scalable hardware/software co-design of
  SIKE](https://eprint.iacr.org/2020/040), Jan. 2020. Published in
  TCHES 2020.

- Brian Koziel, A-Bon Ackie, Rami El Khatib, Reza Azarderakhsh, and
  Mehran Mozaffari-Kermani. [SIKE'd Up: Fast and Secure Hardware
  Architectures for Supersingular Isogeny Key
  Encapsulation](https://eprint.iacr.org/2019/711), Jun. 2019. To
  appear in IEEE Transactions on Circuits and Systems I (2020).

- Brian Koziel, Reza Azarderakhsh, and Mehran Mozaffari Kermani. [A
  high-performance and scalable hardware architecture for
  isogeny-based
  cryptography](https://doi.org/10.1109/TC.2018.2815605),
  Mar. 2018. Published in IEEE Transactions on Computers (2018).

Software implementation

- Hwajeong Seo, Pakize Sanal, Wai-Kong Lee, and Reza Azarderakhsh.
  [No Silver Bullet: Optimized Montgomery multiplication on various
  64-bit ARM platforms](https://eprint.iacr.org/2021/185), Feb. 2021.

- Mila Anastasova, Reza Azarderakhsh and Mehran Mozaffari Kermani,
  [Fast strategies for the implementation of SIKE Round 3 on ARM
  Cortex-M4](https://eprint.iacr.org/2021/115), Jan. 2021.

- Hwajeong Seo, Mila Anastasova, Amir Jalali and Reza
  Azarderakhsh. [Supersingular Isogeny Key Encapsulation (SIKE) Round
  2 on ARM Cortex-M4](https://eprint.iacr.org/2020/410), Apr. 2020.
  Published in IEEE Transactions on Computers.

- Hwajeong Seo, Pakize Sanal, Amir Jalali, and Reza
  Azarderakhsh. [Optimized implementation of SIKE round 2 on 64-bit
  ARM Cortex-A processors](https://doi.org/10.1109/TCSI.2020.2979410),
  Mar. 2020. Published in IEEE Transactions on Circuits and Systems I
  (2020).

- Hwajeong Seo, Amir Jalali, and Reza Azarderakhsh.  [Optimized SIKE
  Round 2 on 64-bit ARM](https://eprint.iacr.org/2019/721),
  Jun. 2019. Published in WISA 2019.

- Hwajeong Seo, Amir Jalali, and Reza Azarderakhsh. [SIKE Round 2
  speed record on ARM Cortex-M4](https://eprint.iacr.org/2019/535),
  May 2019. Published in CANS 2019.

- Joppe W. Bos and Simon J. Friedberger.  [Faster modular arithmetic
  for isogeny based crypto on embedded
  devices](https://eprint.iacr.org/2018/792), Aug. 2018. Published in
  Journal of Cryptographic Engineering (2020).

- Hwajeong Seo, Zhe Liu, Patrick Longa and Zhi Hu.  [SIDH on ARM:
  Faster Modular Multiplications for Faster Post-Quantum Supersingular
  Isogeny Key Exchange](https://eprint.iacr.org/2018/700),
  Jul. 2018. Published in TCHES 2018.

- Joppe W. Bos and Simon J. Friedberger. [Arithmetic considerations for
  isogeny based cryptography](https://eprint.iacr.org/2018/376),
  Apr. 2018. Published in IEEE Transactions on Computers (2019).


- Brian Koziel, Amir Jalali, Reza Azarderakhsh, David Jao, and Mehran
  Mozaffari Kermani. [NEON-SIDH: Efficient Implementation of
  Supersingular Isogeny Diffie-Hellman Key Exchange Protocol on
  ARM](https://eprint.iacr.org/2016/669), Nov. 2016. Published in CANS
  2016.

- Craig Costello, Patrick Longa, and Michael Naehrig. [Efficient
  algorithms for supersingular isogeny
  Diffie-Hellman](https://eprint.iacr.org/2016/413),
  Apr. 2016. Published in CRYPTO 2016.

Enhancements

- Geovandro C. C. F. Pereira and Paulo
  S. L. M. Barreto. [Isogeny-based key compression without
  pairings](https://eprint.iacr.org/2021/272), Apr. 2021.

- Geovandro C. C. F. Pereira, Javad Doliskani and David Jao. [x-only
  point addition formula and faster compressed
  SIKE](https://eprint.iacr.org/2020/431), Apr. 2020. Published in
  Journal of Cryptographic Engineering (2020).

- Michael Naehrig and Joost Renes.  [Dual Isogenies and Their
  Application to Public-key Compression for Isogeny-based
  Cryptography](https://eprint.iacr.org/2019/499), May 2019. Published
  in Asiacrypt 2019.

- Gustavo H. M. Zanon, Marcos A. Simplicio Jr., Geovandro
  C. C. F. Pereira, Javad Doliskani, and Paulo
  S. L. M. Barreto. [Faster key compression for isogeny-based
  cryptosystems](https://eprint.iacr.org/2017/1143),
  Nov. 2017. Published in IEEE Transactions on Computers (2019).

- Craig Costello, David Jao, Patrick Longa, Michael Naehrig, Joost
  Renes, and David Urbanik. [Efficient compression of SIDH public
  keys](https://eprint.iacr.org/2016/963), Oct. 2016. Published in
  Eurocrypt 2017.

- Reza Azarderakhsh, David Jao, Kassem Kalach, Brian Koziel,
  Christopher Leonardi. [Key compression for isogeny-based
  ryptosystems](https://eprint.iacr.org/2016/229),
  Mar. 2016. Published in AsiaPKC 2016.

Security analysis

- Laia Amorós, Annamaria Iezzi, Kristin Lauter, Chloe Martindale and
  Jana Sotáková. [Explicit connections between supersingular isogeny
  graphs and Bruhat–Tits trees](https://eprint.iacr.org/2021/372),
  Mar. 2021.  Published in Women in Numbers Europe III: Research
  Directions in Number Theory (2021).

- Péter Kutas, Simon-Philipp Merz, Christophe Petit and
  Charlotte Weitkämper. [One-way functions and malleability oracles:
  Hidden shift attacks on isogeny-based
  protocols](https://eprint.iacr.org/2021/282), Mar. 2021.
  Published in Eurocrypt 2021.

- Boris Fouotsa Tako, Péter Kutas and Simon-Philipp Merz. [On the
  isogeny problem with torsion point
  information](https://eprint.iacr.org/2021/153), Feb. 2021.

- Hiroshi Onuki, Yusuke Aikawa and Tsuyoshi Takagi. [The existence of
  cycles in the supersingular isogeny graphs Used in
  SIKE](https://eprint.iacr.org/2020/439), Aug. 2020.

- Victoria de Quehen, Péter Kutas, Chris Leonardi, Chloe Martindale,
  Lorenz Panny, Christophe Petit, and Katherine E. Stange. [Improved
  torsion point attacks on SIDH
  variants](https://arxiv.org/abs/2005.14681), May 2020.

- Samuel Jaques and André Schrottenloher. [Low-gate quantum golden
  collision finding](https://eprint.iacr.org/2020/424), Apr. 2020.
  Publisned in SAC 2020.

- Chloe Martindale and Lorenz Panny. [How to not break
  SIDH](https://eprint.iacr.org/2019/558), May 2019. Published in
  CFAIL 2019.

- Craig Costello, Patrick Longa, Michael Naehrig, Joost Renes and
  Fernando Virdia. [Improved classical cryptanalysis of the
  computational supersingular isogeny
  problem](https://eprint.iacr.org/2019/298), Mar. 2019.

- Samuel Jaques and John M. Schanck. [Quantum cryptanalysis in the RAM
  model: Claw-finding attacks on
  SIKE](https://eprint.iacr.org/2019/103), Feb. 2019. Published in
  CRYPTO 2019.

- Anamaria Costache, Brooke Feigon, Kristin Lauter, Maike Massierer,
  and Anna Puskás. [Ramanujan graphs in
  cryptography](https://arxiv.org/abs/1806.05709),
  Jun. 2018. Published in Research Directions in Number Theory: Women
  in Numbers IV.

- Gora Adj, Daniel Cervantes-Vázquez, Jesús-Javier Chi-Domínguez,
  Alfred Menezes, and Francisco Rodríguez-Henríquez. [On the cost of
  computing isogenies between supersingular elliptic
  curves](https://eprint.iacr.org/2018/313), Apr. 2018. Published in
  SAC 2018.

- Brian Koziel, Reza Azarderakhsh, and David Jao. [An Exposure Model
  for Supersingular Isogeny Diffie-Hellman Key
  Exchange](http://faculty.eng.fau.edu/azarderakhsh/files/2016/11/RSA-2018-01-08.pdf),
  Nov. 2016. Published in CT-RSA 2018.

- Brian Koziel, Reza Azarderakhsh, and David Jao. [Side-Channel
  Attacks on Quantum-Resistant Supersingular Isogeny
  Diffie-Hellman](https://www.site.uottawa.ca/~cadams/papers/prepro/paper_29.pdf),
  Jul. 2017. Published in SAC 2017.

- Steven D. Galbraith, Christophe Petit, Barak Shani, and Yan Bo Ti.
  [On the security of supersingular isogeny
  cryptosystems](https://eprint.iacr.org/2016/859),
  Sep. 2016. Published in Asiacrypt 2016.

- Luca De Feo, David Jao, and Jérôme Plût. [Towards Quantum-Resistant
  Cryptosystems From Supersingular Elliptic Curve
  Isogenies](https://eprint.iacr.org/2011/506), Sep. 2011. Published
  in PQCrypto 2011 and Journal of Mathematical Cryptology (2014).

#### Expository articles

- Craig Costello, [The case for SIKE: A decade of the Supersingular
  Isogeny Problem](https://eprint.iacr.org/2021/543), Apr. 2021.

- Craig Costello, [Supersingular isogeny key exchange for
  beginners](https://eprint.iacr.org/2019/1321), Nov. 2019. Invited
  talk at SAC 2019.

- Luca De Feo. [Mathematics of Isogeny Based
  Cryptography](https://arxiv.org/abs/1711.04062), Nov. 2017.

- Steven Galbraith and Frederik Vercauteren, [Computational problems
  in supersingular elliptic curve
  isogenies](https://eprint.iacr.org/2017/774), Aug. 2017.

- Wouter Castryck. [Elliptic curves are quantum dead, long live
  elliptic
  curves](https://www.esat.kuleuven.be/cosic/elliptic-curves-are-quantum-dead-long-live-elliptic-curves/),
  May 2017.

- David Urbanik. [A friendly introduction to Supersingular Isogeny
  Diffie-Hellman](https://csclub.uwaterloo.ca/~dburbani/work/friendlysidh.pdf),
Mar. 2017.

#### Industry studies

- Christian Paquin, [Stay quantum safe: future-proofing encrypted
  secrets](https://christianpaquin.github.io/presentations/northsec2020_paquin.pdf),
  May 2020.

- Amazon Web Services Security Blog:
  - [Round 2 Hybrid Post-Quantum TLS Benchmarks](https://aws.amazon.com/blogs/security/round-2-hybrid-post-quantum-tls-benchmarks/), Apr. 2020
  - [Post-quantum TLS now supported in AWS KMS](https://aws.amazon.com/blogs/security/post-quantum-tls-now-supported-in-aws-kms/), Nov. 2019

- [CloudFlare blog](https://blog.cloudflare.com/):
  - [The TLS Post-Quantum Experiment](https://blog.cloudflare.com/the-tls-post-quantum-experiment/), Oct. 2019
  - [Towards Post-Quantum Cryptography in TLS](https://blog.cloudflare.com/towards-post-quantum-cryptography-in-tls/), Jun. 2019
  - [Introducing CIRCL: An Advanced Cryptographic Library](https://blog.cloudflare.com/introducing-circl/), Jun. 2019
  - [SIDH in Go for quantum-resistant TLS 1.3](https://blog.cloudflare.com/sidh-go/), Sep. 2017

- Adam Langley, [Real-world measurements of structured-lattices and supersingular isogenies in TLS](https://www.imperialviolet.org/2019/10/30/pqsivssl.html), Oct. 2019

#### Talks

- David Jao. [Implementation of isogeny-based cryptography](https://www.nist.gov/video/implementation-isogeny-based-cryptography), NIST PQC Round 3 seminar series, Feb. 2021.

- [@naehrwert](https://twitter.com/naehrwert). [(Post-Quantum) Isogeny Cryptography](https://media.ccc.de/v/36c3-10543-post-quantum_isogeny_cryptography), 36c3, Dec. 2019.

- David Jao. [Supersingular Isogeny Key Encapsulation](files/SIKE.pdf),
  NIST PQC Standardization Conference, Apr. 2018.

- Patrick Longa. [Supersingular isogeny based cryptography gets
  practical](https://www.youtube.com/watch?v=31NyfrHSAcoBcM)
  ([slides](https://irp-cdn.multiscreensite.com/7fa75f95/files/uploaded/Supersingular%20isogeny%20based%20cryptography%20gets%20practical%20-%20RWC2018.pdf)),
  Real World Cryptography Conference 2018, Jan. 2018.

- Craig Costello. [Key encapsulation using supersingular
  isogenies](https://ecc2017.cs.ru.nl/slides/ecc2017-costello.pdf), Nov. 2017.

- Luca De Feo. [20 Years of Isogeny-Based
  Cryptography](https://defeo.lu/docet/assets/slides/2017-11-14-ecc.pdf),
Nov. 2017.

- Deirdre Connolly. [Supersingular Isogeny
  Diffie-Hellman](https://www.youtube.com/watch?v=ctP24WKusX0)
  ([slides](https://dconnolly.github.io/talks/cloudflare-crypto-meetup-feb-2017/Crypto%20Meetup%20Feb%202017.pdf)),
  Cloudflare Crypto Meetup, Feb. 2017.

- Michael Naehrig. [Supersingular Isogeny Diffie-Hellman](https://cryptosith.org/michael/data/talks/2017-01-04-SIDH-RWC17.pdf),
  Real-World Cryptography Conference 2017, Jan. 2017.

- David Urbanik. [Introduction to the post-quantum Supersingular
  Isogeny Diffie-Hellman
  protocol](https://www.youtube.com/watch?v=PW5Vsu57o9I)
  ([slides](https://csclub.uwaterloo.ca/~dburbani/work/sidh_talk_july_2016.pdf)),
  Jul. 2016.

## Implementation

The SIKE submission contains seven implementations. These are available
from the [submission package](files/sike.tar.gz), or individually below:

- [Reference implementation](files/reference.zip)
- [Optimized implementation](files/optimized.zip)
- [AMD64 implementation](files/x64.zip)
- [ARM64 implementation](files/arm64.zip)
- [Cortex M4 implementation](files/m4.zip)
- [VHDL implementation](files/vhdl.zip)
- [Weierstrass implementation](files/weierstrass.zip)

All of the implementations are licensed under the [MIT
license](files/License.txt).

The following implementation is available from Microsoft Research:

- [Microsoft SIDH library](https://github.com/Microsoft/PQCrypto-SIDH)

The following implementations are available from third parties:

- [Cloudflare CIRCL library](https://github.com/cloudflare/circl/tree/master/dh/sidh)
- [SIKE for Java](https://github.com/wultra/sike-java)

### Known Answer Test

Known Answer Test (KAT) files are available from the [submission
package](files/sike.tar.gz), or individually from [this
server](files/KAT/).

## Authors

- David Jao, University of Waterloo and evolutionQ, Inc. (principal submitter)
- Reza Azarderakhsh, Florida Atlantic University and PQSecure Technologies, LLC
- Matthew Campagna, Amazon
- Craig Costello, Microsoft Research
- Luca De Feo, IBM Research Zürich
- Basil Hess, Infosec Global, Switzerland
- Aaron Hutchinson, University of Waterloo, Canada
- Amir Jalali, LinkedIn Corporation
- Koray Karabina, National Research Council, Canada
- Brian Koziel, Texas Instruments
- Brian LaMacchia, Microsoft Research
- Patrick Longa, Microsoft Research
- Michael Naehrig, Microsoft Research
- Geovandro Pereira, University of Waterloo and evolutionQ, Inc.
- Joost Renes, Radboud University
- Vladimir Soukharev, Infosec Global, Canada
- David Urbanik, University of Toronto

### Contact

- [sike@sike.org](mailto:sike@sike.org)
