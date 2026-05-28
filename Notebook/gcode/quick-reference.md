# G-Code Quick Reference

#gcode #reference

## Motion Commands

| Code | Description | Example |
|------|-------------|---------|
| `G00` | Rapid positioning | `G00 X0 Y0 Z5.` |
| `G01` | Linear interpolation (feed) | `G01 X1.5 Y2.0 F20.` |
| `G02` | Circular interpolation CW | `G02 X1. Y0 I0.5 J0` |
| `G03` | Circular interpolation CCW | `G03 X1. Y0 I0.5 J0` |
| `G04` | Dwell | `G04 P500` (500ms) |

## Program Structure

| Code | Description |
|------|-------------|
| `%` | Program start/end delimiter |
| `O####` | Program number |
| `N####` | Line number (optional) |
| `M30` | End program, rewind |
| `M02` | End program |

## Tool & Spindle

| Code | Description | Example |
|------|-------------|---------|
| `M06` | Tool change | `T02 M06` |
| `M03` | Spindle on CW | `M03 S3000` |
| `M04` | Spindle on CCW | `M04 S1500` |
| `M05` | Spindle stop | `M05` |
| `M08` | Coolant on | `M08` |
| `M09` | Coolant off | `M09` |

## Example Program

```gcode
O0001
G17 G20 G40 G49 G80 G90   (safety block)
G28 G91 Z0.               (home Z)
T01 M06                   (tool change)
G90 G54                   (absolute, work offset 1)
M03 S3500                 (spindle CW, 3500 RPM)
G00 X0. Y0. Z0.5          (rapid to start)
G01 Z-0.1 F10.            (plunge)
X2.0 F20.                 (cut)
G00 Z1.0                  (retract)
M05                       (spindle stop)
G28 G91 Z0.               (home Z)
M30                       (end)
%
```

## Notes

The <span class="gcode">G17/G18/G19</span> modal sets the active plane:
- **G17** — XY plane (most common for vertical mills)
- **G18** — ZX plane
- **G19** — YZ plane

<span class="caution">Always include a safety block at program start to reset modal state.</span>
