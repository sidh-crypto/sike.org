---
layout: main.pug
---

<br>

| Changes made since the 2nd round NIST submission |
|-|

- p. 36: In Table 2.4, the originally submitted ARM64 performance numbers
  are incorrect due to a device bug. The correct table is as follows.


|<th colspan=4>Optimized implementation (portable)|||||
|--------|-------:|-------:|-------:|-------:|
|Scheme | Keygen | Encaps | Decaps | Total (E+D) |
|`SIKEp503` | 121,048 | 199,093 | 211,271 | 410,364 |
|`SIKEp751` | 415,085 | 677,698 | 723,416 | 1,401,114 |
|`SIKEp503_compressed` | 301,663 | 365,259 | 340,315 | 705,575 |
|`SIKEp751_compressed` | 992,640 | 1,241,449 | 1,158,156 | 2,399,605 |
|<th colspan=4>Additional implementation using ARMv8 assembly|||||
|Scheme | Keygen | Encaps | Decaps | Total (E+D) |
|`SIKEp503` | 26,928 | 44,388 | 47,377 | 91,764 |
|`SIKEp751` | 90,012 | 147,589 | 159,517 | 307,105 |
|`SIKEp503_compressed` | 67,424 | 81,424 | 75,631 | 151,262 |
|`SIKEp751_compressed` | 217,710 | 271,493 | 252,955 | 524,448 |






- p. 62: Line 1 in Algorithm 21 should read ((A : C), (A₂₄⁺ : C₂₄)) ←
  ((6 : 1), (8 : 4)), and line 2 in Algorithm 22 should read ((A : C),
  (A₂₄⁺ : A₂₄⁻)) ← ((6 : 1), (8 : 4)).

Acknowledgments: Carlos Andrés Lara Niño.

| Other errata and corrections |
|-|

- p. 12: In Section 1.3.3 it should read "P₃ ∈ E₀(Fₚ) and Q₃ ∈ E₀ (Fₚ²) ∖ E₀(Fₚ)" as opposed to "P₃ ∈ E₀ (Fₚ²) ∖ E₀(Fₚ) and Q₃ ∈ E₀(Fₚ)".
- p. 57: In Algorithm 11, step 3 should read A₂₄⁺ ← C₂₄ - A₂₄⁺.
- p. 58: In Algorithm 15, step 18-20 should be removed and replaced by the single step A₂₄⁺ ← t₃ ⋅ t₄.
- p. 58: In Algorithm 16, step 11 should read <b>return</b> (X<sub>Q'</sub> : Z<sub>Q'</sub>).

Acknowledgments: Pedro Maat Costa Massolino.
