

## Fix Email References

The contact email is displayed as `info@mshreyasracing.com` in the Contact section, but all the `mailto:` links still point to the old email `mshreyas2009@gmail.com`. This plan updates every occurrence to use the correct email.

### Changes

**3 files need updating:**

1. **ContactSection.tsx** -- 2 mailto links
   - Line 45: `mailto:mshreyas2009@gmail.com` to `mailto:info@mshreyasracing.com`
   - Line 102: `mailto:mshreyas2009@gmail.com?subject=...` to `mailto:info@mshreyasracing.com?subject=...`

2. **Footer.tsx** -- 1 mailto link
   - Line 43: `mailto:mshreyas2009@gmail.com` to `mailto:info@mshreyasracing.com`

3. **HeroSection.tsx** -- 1 mailto link + 1 visible text
   - Line 141: `mailto:mshreyas2009@gmail.com` to `mailto:info@mshreyasracing.com`
   - Line 145: Display text `mshreyas2009@gmail.com` to `info@mshreyasracing.com`

All five references will be updated so the backend mailto actions match the displayed email address.

