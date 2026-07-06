# Samarbetsbolaget – webbplats

Statisk flersidig webbplats (ren HTML/CSS) för GitHub + Netlify.
Primär domän: **samarbetsbolaget.se** (`.com` omdirigeras dit).

## Filer
- `index.html` (startsida), `tjanster.html`, `vi-ar.html`, `resurser.html`, `referenser.html`, `kontakt.html`, `tack.html`
- `style.css` – allt utseende (byt accentfärg här, se nedan)
- `script.js` – mobilmeny, årtal, formulärets mottagarstyrning
- `robots.txt`, `sitemap.xml`, `netlify.toml`
- Bilder: logo + porträtt + tjänstebilder

**Viktigt:** ladda upp *filerna* till GitHub-repots toppnivå (inte mappen).

## Byta accentfärg (en rad)
Öppna `style.css`, högst upp står:
```
--primary: #8a1e2c;   /* loggans mörkröda */
```
Byt hex-koden så ändras hela sajten. Testa t.ex. `#a01f2e` (ljusare) eller `#6d1622` (djupare).

## Kontaktformuläret – gör detta i Netlify en gång
1. **Forms → Enable form detection.**
2. Lägg upp e-postnotiser för **båda** formulären:
   - Formulär `kontakt-patrick` → notis till **gruczkun@gmail.com**
   - Formulär `kontakt-syrene` → notis till **syrene_h@hotmail.com**
   Rullgardinen på sidan avgör vilket formulär som skickas. Utan JavaScript går allt till Patrick (inget tappas).

## Domän
Sätt **samarbetsbolaget.se** som primär domän i Netlify och lägg till **samarbetsbolaget.com** som domänalias – Netlify omdirigerar då `.com` till `.se` automatiskt. DNS pekas mot Netlify hos din registrar.
