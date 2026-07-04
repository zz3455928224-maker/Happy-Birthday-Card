# Design QA

- source visual truth path: `C:/Users/zzb99/.codex/generated_images/019f2bc7-04f6-7db2-8afe-75b5de02bf93/exec-1f870be7-0d4c-4c87-8902-04cae6730752.png`
- implementation screenshot path: `.codex-audit/after/01-opening-mobile-v2.png`
- viewport: 390 × 844 mobile; 1280 × 720 desktop spot check
- state: opening plus complete seven-scene mobile flow
- full-view comparison evidence: `.codex-audit/after/opening-reference-comparison.jpg`
- focused region evidence: `.codex-audit/after/final-scenes-contact-sheet.jpg`, `.codex-audit/after/final-06-letter-end.png`, `.codex-audit/after/final-07-card.png`

## Findings

- No actionable P0/P1/P2 findings remain.
- Typography: Noto Serif SC and Ma Shan Zheng reproduce the restrained Chinese editorial hierarchy; body line height and long-form width remain readable at 390px.
- Spacing: opening composition, safe areas, bottom actions and long-form paragraph rhythm match the selected direction without horizontal overflow.
- Colors: ink black, warm ivory and muted amber remain consistent across all seven scenes.
- Image quality: all visible scene assets are real raster/source assets; generated room, corridor and gift backgrounds replace the previous cartoon/template imagery and are optimized WebP files.
- Copy: original confirmed wording is preserved; only line breaks, grouping and display timing changed.

## Patches made

- Removed mockup-embedded text from the bedroom background.
- Removed visible star-pattern grain after mobile comparison.
- Replaced cartoon room, hallway, door and gift visuals with coherent cinematic assets.
- Replaced the sample portrait ending with a dim return to the bedside lamp.
- Verified letter progress reaches 100% and final scene reports `07 / 07`.

## Follow-up polish

- P3: real-device audio volume can be tuned after hearing the phone speaker used for the gift.

final result: passed
