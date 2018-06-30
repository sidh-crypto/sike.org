---
layout: main.pug
---

<br>

| List of known errata |
|-|
* p. 18: The correct value of p in SIKEp503 is<br>
<tt>
    004066F5 41811E1E 6045C6BD DA77A4D0<br>
    1B9BF6C8 7B7E7DAF 13085BDA 2211E7A0<br>
    ABFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF<br>
    FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF<br> </tt>
* p. 20: The correct value of yQ20 in SIKEp751 is<br>
<tt>
    00003BBF 8DCD4E7E B6236F5F 598D56EB<br>
    5E15915A 755883B7 C331B043 DA010E6A<br>
    163A7421 DFA8378D 1E911F50 BF3F721A<br>
    8ED5950D 80325A8D 0F147EF3 BD0CFEC5<br>
    236C7FAC 9E69F7FD 5A99EBEC 3B5B8B00<br>
    0F8EEA73 70893430 12E0D620 BFB341D5<br></tt>
* p. 50: The output of Algorithm 8 is P+[m]Q, not Q+[m]P.
* p. 52: Line 3 in Algorithm 14 should read "t₀ ← K₁ · t₀"
* p. 58: Algorithm 23 should initalize the value of t₂ to be equal to 1
* p. 59: In line 3 of Algorithm 24, <tt>xDBLAffine</tt> should be <tt>xDBL</tt>
* p. 63: In Algorithms 34 and 35, (a',b') should be initialized to (a,b)
  inside the <tt>for</tt> loop, and calls to <tt>xDBLe</tt> should use
  (a',b') instead of (a,b).
* p. 72: In the definition of P₃, the Weil pairing should be of order 3ᵉ₃.
