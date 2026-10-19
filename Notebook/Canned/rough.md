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


## G75

- Rough facing cycle    

X = X POS FACE OFF TO    
Z = Z POS FACE OFF TO    
I = DOC X PECK CYCLE - IF LEFT OUT CYCLE WILL MAKE SINGLE PASS TO X POSITION    
K = DOC Z EACH PASS    

```gcode

(G75 EXAMPLE)

(--------------------------)

N1103 T1111 (CCGT32.5 - ALUM INSERT .008" CR) 
G00 G28 U0 
G50 S500 (FACE) 
G96 S526 M03 
G00 G99 G54 Z0.25 (START Z POSITION)
G00 X12.2 (START X POSITION)

G75 X9.4 Z0.05 K0.1 F0.006 (I VALUE LEFT OUT - SINGLE PASS TO X9.4)

G00 X12.2 W0.02 
Z0. 
G01 X9.4 F0.006 
G00 X12.5 Z0.5 
G00 G28 U0 M09 
G00 G53 Z-6. 
M05 
M01 
