

## Plan: Replace Logo and Fix Hero Video Coverage

### 1. Replace Logo Image

Copy the uploaded new SM logo (`Shreyas_Logo_-_2.PNG`) into the project, replacing the current circular logo. Update all three files that reference it:

- **Navigation.tsx (line 48)**: Replace `sm-logo.jpg` import with the new logo. Remove `rounded-full` class since the new logo is a square/rectangular design with a dark background that matches the header color naturally. Adjust sizing for clean alignment within the nav bar.
- **Footer.tsx (line 17)**: Same update -- use the new logo, remove `rounded-full`, keep it aligned with the dark footer background.
- **public/sm-logo.jpg**: The footer currently references `/sm-logo.jpg` directly. Will update the footer to use the imported asset instead for consistency.

### 2. Fix Hero Video Underflow

The video background container currently uses `top-20` offset, which creates a gap. The fix:

- **HeroSection.tsx (line 26)**: Change the video background container from `absolute top-20 left-0 right-0 bottom-0` to `absolute inset-0` so the video fills the entire section from edge to edge (including behind the transparent nav).
- **HeroSection.tsx (line 24)**: Remove `pt-20` from the section since the video should fill the full viewport height. Keep content padded separately.
- **HeroSection.tsx (line 38)**: Ensure video element uses `min-w-full min-h-full` alongside `object-cover` for bulletproof coverage across all aspect ratios and devices.
- **HeroSection.tsx (line 24)**: Change `min-h-screen` to `h-screen` to enforce exact viewport height and prevent underflow.

### Technical Details

**Files to modify:**
1. Copy `user-uploads://Shreyas_Logo_-_2.PNG` to `src/assets/sm-logo.png`
2. `src/components/Navigation.tsx` -- update logo import and classes
3. `src/components/Footer.tsx` -- update logo import and classes  
4. `src/components/HeroSection.tsx` -- fix video container positioning

**Logo styling approach:**
- The new logo has a dark background (#3a3a3a) that closely matches the header background color (hsl(220, 15%, 6%))
- Remove `rounded-full` and `border-0` styling
- Use `object-contain` instead of `object-cover` for the logo to prevent cropping the SM text

**Video fix approach:**
- `inset-0` for full container coverage
- `object-cover` with `w-full h-full` ensures proportional scaling without distortion
- `h-screen` on the section prevents any empty space
- Content area gets its own padding to stay below the nav

