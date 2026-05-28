# Coordinate Systems

#cnc #coordinates #offsets #g54

## Machine vs. Work Coordinates

**Machine coordinates (G53)** are absolute — origin is fixed at machine home. Never changes.

**Work coordinates (G54–G59)** define a programmable offset from machine home. You set these when you touch off a part.

## Work Offset Codes

| Code | Register | Notes |
|------|----------|-------|
| `G54` | #5221–5223 | Most common default |
| `G55` | #5241–5243 | |
| `G56` | #5261–5263 | |
| `G57` | #5281–5283 | |
| `G58` | #5301–5303 | |
| `G59` | #5321–5323 | |

## Setting a Work Offset

Basic touch-off procedure for <span class="axis">X0 Y0</span> at the corner of a part:

1. Load an edge finder or probe in the spindle
2. Touch off <span class="axis">X</span> — jog until contact, note machine position, enter offset
3. Touch off <span class="axis">Y</span>
4. Touch off <span class="axis">Z</span> — top of part or gage surface

To set offset directly in code:

```gcode
G10 L2 P1 X-5.0 Y-3.0 Z-12.5
```

> `L2` = work coordinate offset, `P1` = G54, `P2` = G55, etc.

## G53 — Machine Coordinates

Use <span class="gcode">G53</span> for a one-block move in machine coordinates. Non-modal — only applies to that line.

```gcode
G53 G00 Z0.   (rapid to machine Z home, regardless of work offset)
```

<span class="caution">G53 requires an active motion mode (G00 or G01). It does not permanently cancel work offsets.</span>
