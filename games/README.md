# Upload your game files here

This folder is the public game-file directory for Retro Windows Player. Files placed here can be referenced by the browser player through a relative URL.

## Upload using GitHub website

1. Open the repository: https://github.com/Skrimmerbot/retro-windows-player
2. Click the **games** folder.
3. Click **Add file → Upload files**.
4. Drag your legally obtained game file(s) into the upload area. For DOS games, ZIP archives are usually the easiest format to manage.
5. Add a commit message such as **Add my game files**, then click **Commit changes**.
6. Allow GitHub Pages deployment to finish.

Then on the published site, double-click **Emulator Player** on the desktop (or Start → Programs → Emulator Player), choose the system/core, and enter a file path like:

`games/my-game.zip`

Use the exact filename, including capitalization. The browser loads hosted assets from the published Pages site.

## Important notes

- Only upload games, ROMs, disk images, BIOS files, and other assets that you own or are legally allowed to distribute. A repository on GitHub Pages is public; uploaded files can be downloaded by anyone.
- GitHub blocks files larger than 100 MB. Repositories are not a suitable place for large disk images or bulky game archives.
- EmulatorJS supports specific retro systems and formats; it does **not** directly launch arbitrary Windows `.exe` files. DOSBox Pure is the selected DOS core.
- You can also select a game file directly from your computer in the browser player. That local file is not uploaded to GitHub by the webpage.
- Game saves and emulator compatibility can vary by core and browser.

See the root README for further setup information.
