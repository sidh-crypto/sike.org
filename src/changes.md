---
layout: main.pug
---

<br>

| Changes made since the 2nd round NIST submission |
|-|

- p. 36: In Table 2.4, the originally submittted ARM64 performance numbers
  are incorrect due to a device bug. The correct table is as follows.


|<th colspan=4>Optimized implementation (portable)|||||
|--------|-------:|-------:|-------:|-------:|
|Scheme | Keygen | Encaps | Decaps | Total |
|`SIKEp503` | 121,048 | 199,093 | 211,271 | 410,364 |
|`SIKEp751` | 415,085 | 677,698 | 723,416 | 1,401,114 |
|`SIKEp503_compressed` | 301,663 | 365,259 | 340,315 | 705,575 |
|`SIKEp751_compressed` | 992,640 | 1,241,449 | 1,158,156 | 2,399,605 |
|<th colspan=4>Additional implementation using ARMv8 assembly|||||
|Scheme | Keygen | Encaps | Decaps | Total |
|`SIKEp503` | 26,928 | 44,388 | 47,377 | 91,764 |
|`SIKEp751` | 90,012 | 147,589 | 159,517 | 307,105 |
|`SIKEp503_compressed` | 67,424 | 81,424 | 75,631 | 151,262 |
|`SIKEp751_compressed` | 217,710 | 271,493 | 252,955 | 524,448 |






- p. 62: Line 1 in Algorithm 21 should read ((A : C), (A₂₄⁺ : C₂₄)) ←
  ((6 : 1), (8 : 4)), and line 2 in Algorithm 22 should read ((A : C),
  (A₂₄⁺ : A₂₄⁻)) ← ((6 : 1), (8 : 4)).

Acknowledgments: Carlos Andrés Lara Niño.
