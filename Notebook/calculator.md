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
| 316 Stainless | `40 - 60 sfm` | `200 - 300 sfm` | `.004 - .016 ipr` |

## 17/4 Feeds and speeds by condition
| Condition	| Turning SFM |	Turning IPR |	Milling SFM |	Chip load per tooth (in) |    
|------|-------------|---------|---------|-----|    
| Condition A | 150–250	| 0.010–0.020	| 200–300	| 0.004–0.008 |    
| H900	| 80–140 | 0.007–0.012 |	120–200 |	0.003–0.006 |    
| H925 / H1025 |	100–160 |	0.008–0.014 |	140–220	0.003–0.007 |    
| H1075 / H1100 |	130–200	| 0.009–0.016 |	170–260	0.004–0.007 |    
| H1150 |	150–250	| 0.010–0.020 |	200–300 |	0.004–0.008 |    

