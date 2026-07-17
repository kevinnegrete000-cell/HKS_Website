HKS DIGITAL ARCHIVE — ROTATING CONSTELLATION PROTOTYPE

HOW TO RUN
1. Unzip the folder.
2. Open the folder in Visual Studio Code.
3. Right-click index.html and choose "Open with Live Server."
4. Do not open index.html directly with file:// because the OBJ and textures need a local web server.

WHAT CHANGED
- Rebuilt the observatory to match the supplied monochrome reference.
- Added 12 large elliptical archive orbits.
- The orbit ellipses slowly rotate.
- Every archive node independently travels along an orbit.
- Added full metadata labels, dark node fields, highlighted orbit sweeps, and side navigation.
- Clicking a node pauses the constellation, zooms the selected object to the left, and opens a paper-colored information panel on the right.
- The Window Profile Prototype opens as a textured interactive OBJ with automatic rotation and drag/zoom controls.
- The Three.js viewer loads from jsDelivr only when a 3D object is opened, so the rest of the archive can still load first.

MAIN FILES
- index.html
- style.css
- script.js
- assets/window-profile/window-profile.obj
- assets/window-profile/window-profile.mtl
- assets/window-profile/textures/

REPOSITORY NOTE
Upload the entire extracted folder and preserve the asset directory structure exactly.
