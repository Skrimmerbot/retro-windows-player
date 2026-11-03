# Retro Windows Player

A Windows 98-inspired browser desktop with an EmulatorJS-powered game player for compatible retro systems and DOS game archives.

## Open the site

GitHub Pages site: https://skrimmerbot.github.io/retro-windows-player/

If Pages has just been enabled, give the GitHub Actions deployment a moment to complete. The latest deployment can be monitored from the repository's Actions tab.

## Upload games to GitHub

**Upload folder:** `games/` (open [the games directory](https://github.com/Skrimmerbot/retro-windows-player/tree/main/games))

1. In this repository, open the `games` folder.
2. Select **Add file → Upload files**.
3. Drag/drop your legally distributable game files (DOS game ZIP files are a convenient starting point).
4. Commit changes to `main` and wait for the Pages workflow to deploy.
5. On the website, double-click **Emulator Player** on the desktop, or choose **Start → Programs → Emulator Player**.
6. Select a system/core, type the hosted path (for example `games/my-game.zip`) or choose a local file, enter the game title, then press **Load & Play**.

Exact filename and case matter. Local browser file selection does not upload the file to GitHub; the upload steps above do.

## Compatibility and limitations

- EmulatorJS loads its emulator runtime from its stable CDN and supports selected retro systems. The player currently offers MS-DOS (DOSBox Pure), NES, SNES, Game Boy, GBA, Genesis/Mega Drive, Arcade, PS1, and N64 options.
- DOS game ZIP archives may work with DOSBox Pure, depending on contents and game configuration. Console ROMs need a matching system/core.
- This browser player **does not directly run arbitrary Windows `.exe` applications**. Entries such as Age of Empires or Need for Speed Underground in the Windows 98 mockup are sample entries, not supported native Windows launches. A separate PC/Windows emulation solution and legally obtained game images would be needed.
- A GitHub Pages site and repository are public. Only upload files you own or are authorized to redistribute. GitHub blocks individual files larger than 100 MB; large game disk images are not suitable for repository hosting.
- Emulator save behavior and compatibility depend on the core/browser. EmulatorJS requires an internet connection to fetch its CDN runtime.

## Desktop prototype

The site includes the animated boot screen, desktop icons and drag/drop, Start menu, taskbar clock, simulated windows and Explorer, Program Files mock directory, context-menu shortcut deletion and Recycle Bin restoration.

## GitHub Pages deployment

Workflow: `.github/workflows/pages.yml`

Repository Settings → Pages → Build and deployment → Source should be **GitHub Actions**. The workflow validates HTML/inline JavaScript and deploys the repository root.
