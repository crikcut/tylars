# Feeds & Speeds Calculator

<div id="sf-calc">
<div class="sf-tabs">
<button class="sf-tab active" data-panel="sf-turning">TURNING</button>
<button class="sf-tab" data-panel="sf-milling">MILLING</button>
</div>
<div id="sf-turning" class="sf-panel active">
<div class="sf-blocks">
<div class="sf-block">
<div class="sf-block-label">RPM → SFM</div>
<div class="sf-field"><label>RPM</label><input id="t1-rpm" type="number" min="0" placeholder="—"></div>
<div class="sf-field"><label>DIA (in)</label><input id="t1-dia" type="number" min="0" step="0.001" placeholder="—"></div>
<div class="sf-result"><span class="sf-result-label">SFM</span><span id="t1-sfm" class="sf-result-value">—</span></div>
<div class="sf-formula">SFM = (π × D × RPM) / 12</div>
</div>
<div class="sf-block">
<div class="sf-block-label">SFM → RPM</div>
<div class="sf-field"><label>SFM</label><input id="t2-sfm" type="number" min="0" placeholder="—"></div>
<div class="sf-field"><label>DIA (in)</label><input id="t2-dia" type="number" min="0" step="0.001" placeholder="—"></div>
<div class="sf-result"><span class="sf-result-label">RPM</span><span id="t2-rpm" class="sf-result-value">—</span></div>
<div class="sf-formula">RPM = (SFM × 12) / (π × D)</div>
</div>
</div>
</div>
<div id="sf-milling" class="sf-panel">
<div class="sf-blocks">
<div class="sf-block">
<div class="sf-block-label">RPM → SFM</div>
<div class="sf-field"><label>RPM</label><input id="m1-rpm" type="number" min="0" placeholder="—"></div>
<div class="sf-field"><label>DIA (in)</label><input id="m1-dia" type="number" min="0" step="0.001" placeholder="—"></div>
<div class="sf-result"><span class="sf-result-label">SFM</span><span id="m1-sfm" class="sf-result-value">—</span></div>
<div class="sf-formula">SFM = (π × D × RPM) / 12</div>
<div class="sf-divider"></div>
<div class="sf-block-label">FEED RATE</div>
<div class="sf-field"><label>FLUTES</label><input id="m1-flutes" type="number" min="1" step="1" placeholder="—"></div>
<div class="sf-field"><label>CHIP LOAD (IPT)</label><input id="m1-chipload" type="number" min="0" step="0.0001" placeholder="—"></div>
<div class="sf-result"><span class="sf-result-label">FEED (IPM)</span><span id="m1-feed" class="sf-result-value">—</span></div>
<div class="sf-formula">IPM = RPM × Flutes × Chip Load</div>
</div>
<div class="sf-block">
<div class="sf-block-label">SFM → RPM</div>
<div class="sf-field"><label>SFM</label><input id="m2-sfm" type="number" min="0" placeholder="—"></div>
<div class="sf-field"><label>DIA (in)</label><input id="m2-dia" type="number" min="0" step="0.001" placeholder="—"></div>
<div class="sf-result"><span class="sf-result-label">RPM</span><span id="m2-rpm" class="sf-result-value">—</span></div>
<div class="sf-formula">RPM = (SFM × 12) / (π × D)</div>
<div class="sf-divider"></div>
<div class="sf-block-label">FEED RATE</div>
<div class="sf-field"><label>FLUTES</label><input id="m2-flutes" type="number" min="1" step="1" placeholder="—"></div>
<div class="sf-field"><label>CHIP LOAD (IPT)</label><input id="m2-chipload" type="number" min="0" step="0.0001" placeholder="—"></div>
<div class="sf-result"><span class="sf-result-label">FEED (IPM)</span><span id="m2-feed" class="sf-result-value">—</span></div>
<div class="sf-formula">IPM = RPM × Flutes × Chip Load</div>
</div>
</div>
</div>
</div>





# Speeds / Feeds


| Material | SFM HSS | SFM Carbide | Feed Range |
|------|-------------|---------|---------|
| 316 Stainless | 40 - 60 sfm | 200 - 300 sfm | .004 - .016 ipr |
| `G01` | Linear interpolation (feed) | `G01 X1.5 Y2.0 F20.` | |
| `G02` | Circular interpolation CW | `G02 X1. Y0 I0.5 J0` | |
| `G03` | Circular interpolation CCW | `G03 X1. Y0 I0.5 J0` | |
| `G04` | Dwell | `G04 P500` (500ms) |  |

