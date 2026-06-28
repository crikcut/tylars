# Roughing Cycles

## G71

- Roughing cycle that can be used on OD and ID turning.


```gcode

(G71 EXAMPLE)

(--------------------------)

G99G0X2.0Z.5M6 
X1.315Z.1

G71U(DEPTH OF CUT)R.01
G71P110Q120U.01(MAT TO LEAVE IN X)W.01(MAT TO LEAVE IN Z)F.016(ROUGH FEEDRATE)

(PROFILE G71 WILL FOLLOW)
N110G0X1.78W0.0
G1Z-.118F.008(FINISH FEEDRATE)  
X1.7W-.04
Z-.875
N120G1X1.315W-.05

(--------------------------)

(FINISHING)

G99G0X2.0Z.5M6 
X1.315Z.1(NORMAL SETUP CODE)

G70P110Q120

(--------------------------)

P=NUMBER START
Q=NUMBER FINISH

(SHOULD MATCH SEQUENCE NUMBERS INSIDE G71)


(--------------------------)



```