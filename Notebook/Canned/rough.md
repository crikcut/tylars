# Roughing Cycles

## G71

- Roughing cycle that can be used on OD and ID turning.


```gcode

(G71 EXAMPLE)

(--------------------------)

G99 G0 X2.0 Z.5 M6 
X1.315 Z.1

G71 U(DEPTH OF CUT) R.01
G71P110Q120U (MAT TO LEAVE IN X) W (MAT TO LEAVE IN Z) F.016 (ROUGH FEEDRATE)

(PROFILE G71 WILL FOLLOW)
N110 G0 X1.78 W0.0
G1 Z-.118 F.008 (FINISH FEEDRATE)  
X1.7 W-.04
Z-.875
N120 G1 X1.315 W-.05

(--------------------------)

FINISHING:

G99 G0 X2.0 Z.5 M6 
X1.315 Z.1 (NORMAL SETUP CODE)

G70P110Q120

(--------------------------)

P=NUMBER START
Q=NUMBER FINISH

(SHOULD MATCH SEQUENCE NUMBERS INSIDE G71)


(--------------------------)



```