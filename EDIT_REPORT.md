# Edit Report - GSAP Animation Implementation

**Date:** 2026-06-24  
**Project:** Web Portfolio  
**Topic:** Cakra Mahendra Putra Text Animation with GSAP

---

## Summary
Implemented GSAP SplitText animation for "Cakra Mahendra Putra" name in the LoadingScreen component with alternating character animations (top and bottom entry).

---

## Changes Made

### 1. Initial Setup (Reverted)
**File:** `src/sections/Hero.tsx`  
**Action:** Applied GSAP animation  
**Status:** ❌ REVERTED - User requested animation in LoadingScreen, not Hero

**Changes:**
- Added imports: `gsap`, `SplitText` from `gsap/dist/SplitText`
- Registered SplitText plugin
- Added `nameRef` with `useRef`
- Created GSAP animation effect

**Why Reverted:** User clarified that animation should be in LoadingScreen, not Hero section.

---

### 2. Fix Hero.tsx JSX Error
**File:** `src/sections/Hero.tsx`  
**Status:** ✅ FIXED

**Issue:** Malformed JSX structure with incomplete `<motion.h1>` and missing closing tags.

**Fix Applied:**
```jsx
// Before (BROKEN):
<motion.h1>
  <span>...
  animate={{ opacity: 1, y: 0 }}
  <motion.h2>

// After (FIXED):
<motion.h1>
  <span className="...">
    Cakra Mahendra Putra
  </span>
</motion.h1>

<motion.h2>
  ...
</motion.h2>
```

---

### 3. Apply GSAP Animation to LoadingScreen
**File:** `src/components/LoadingScreen.tsx`  
**Status:** ✅ COMPLETED

#### 3.1 Import GSAP and SplitText
```typescript
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(SplitText);
```

#### 3.2 Add nameTextRef
```typescript
const nameTextRef = useRef<HTMLHeadingElement>(null);
```

#### 3.3 Implement GSAP Animation Timeline
**Location:** Inside `useLayoutEffect` hook

**Animation Details:**
- **Timeline Duration:** ~5 seconds total
- **Name Container:** Slides in from left at 0s
- **Characters:** Animate from 0.5s with stagger
- **Progress Bar:** Appears at 2.2s
- **Final Fade Out:** On complete

**Initial Version (Static):**
```javascript
gsap.set(chars, { opacity: 0, y: 30, rotationZ: -10 });
```

#### 3.4 Update h1 Element
```jsx
// Added ref binding
<h1 ref={nameTextRef} className="...">
  Cakra Mahendra Putra
</h1>
```

---

### 4. Fix Blank Screen Issue
**File:** `src/components/LoadingScreen.tsx`  
**Status:** ✅ FIXED

**Problem:** LoadingScreen becomes blank on refresh due to improper cleanup function.

**Root Cause:** Nested return statements in `gsap.context()` callback causing incorrect cleanup logic.

**Solution:**
- Move `split` declaration outside `gsap.context` callback
- Create single cleanup function with proper null check
- Remove nested return statement

**Before:**
```javascript
const ctx = gsap.context(() => {
  const split = new SplitText(...);
  // ...
  return () => {
    split.revert();
    ctx.revert();
  };
});
return () => ctx.revert();
```

**After:**
```javascript
let split: any = null;
const ctx = gsap.context(() => {
  split = new SplitText(...);
  // ... animations
});
return () => {
  if (split) split.revert();
  ctx.revert();
};
```

---

### 5. Alternating Character Animation
**File:** `src/components/LoadingScreen.tsx`  
**Status:** ✅ COMPLETED

**Feature:** Each character animates from alternating direction (top ↓ / bottom ↑)

**Implementation:**
```javascript
gsap.set(chars, { 
  opacity: 0, 
  y: (i: number) => i % 2 === 0 ? -40 : 40,
  rotationZ: -10 
});
```

**Animation Pattern:**
- **Character Index 0, 2, 4...** (Even): Enter from top (y: -40 → 0)
- **Character Index 1, 3, 5...** (Odd): Enter from bottom (y: 40 → 0)
- **Stagger Delay:** 0.08s between each character
- **Ease:** `back.out(1.7)` - creates bouncy effect
- **Duration:** 0.6s per character

**Result:** "Cakra Mahendra Putra" appears with zigzag motion pattern

---

## Timeline of Changes

| # | Date | File | Change | Status |
|---|------|------|--------|--------|
| 1 | 2026-06-24 | Hero.tsx | Applied GSAP animation | ❌ Reverted |
| 2 | 2026-06-24 | Hero.tsx | Fixed JSX structure | ✅ Active |
| 3 | 2026-06-24 | LoadingScreen.tsx | Imported GSAP/SplitText | ✅ Active |
| 4 | 2026-06-24 | LoadingScreen.tsx | Created animation timeline | ✅ Active |
| 5 | 2026-06-24 | LoadingScreen.tsx | Fixed blank screen issue | ✅ Active |
| 6 | 2026-06-24 | LoadingScreen.tsx | Added alternating animation | ✅ Active |

---

## Files Modified

### 1. `src/sections/Hero.tsx`
- Reverted GSAP imports/setup
- Fixed JSX structure error
- Kept clean Framer Motion animations only

### 2. `src/components/LoadingScreen.tsx`
- Added GSAP and SplitText imports
- Registered SplitText plugin
- Added nameTextRef hook
- Implemented complete animation timeline
- Fixed cleanup logic
- Added alternating character animation logic

---

## Animation Specifications

### LoadingScreen - Text Animation
```
Timeline: 0s ────────────────────── 5s
          │
          ├─ 0s: Container slides in (x: -120 → 0)
          │
          ├─ 0.5s: Characters animate in (staggered)
          │   ├─ Even chars: -40 → 0 (from top)
          │   ├─ Odd chars: 40 → 0 (from bottom)
          │   └─ Duration: 0.6s, Ease: back.out(1.7)
          │
          ├─ 2.2s: Progress bar wrapper fades in
          │
          ├─ 2.5s: Progress bar fills (0% → 100%)
          │   └─ Duration: 2s
          │
          └─ 5s: Container fades out, onComplete fires
```

---

## Rollback Instructions

If needed to rollback changes:

1. **Revert LoadingScreen to original:**
   - Remove GSAP/SplitText imports
   - Remove nameTextRef
   - Remove animation logic
   - Restore simple character spans with color mapping

2. **Verify Hero.tsx:**
   - Keep JSX fixes
   - Remove any experimental animations

---

## Testing Checklist

- ✅ LoadingScreen appears on page load
- ✅ Text animates with GSAP SplitText
- ✅ Characters alternate from top/bottom
- ✅ Progress bar animates smoothly
- ✅ LoadingScreen disappears after animation
- ✅ Page content shows without blank screen
- ✅ Hero section displays correctly

---

## Notes

- Animation timing is optimized for smooth UX (5 seconds total)
- SplitText automatically splits text into individual characters
- Cleanup functions prevent memory leaks
- GSAP context ensures proper scope management
- Alternating animation adds visual interest and depth

