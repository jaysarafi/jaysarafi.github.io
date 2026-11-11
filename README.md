# jaysarafi.github.io

Personal academic website of Jaysa Rafi. Plain HTML and CSS, hosted on GitHub Pages.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page: header, About, Teaching, Experience, footer |
| `data/papers.js` | All papers (Working Papers and Work in Progress) |
| `assets/style.css` | Layout, colors, light and dark mode |
| `assets/main.js` | Builds the paper list from `data/papers.js`; theme toggle |
| `images/headshot.jpg` | Photo |
| `papers/`, `slides/` | Paper drafts and slides (PDF) |
| `files/` | CV and statements (PDF) |

## Common updates

**Add or edit a paper.** Open `data/papers.js`, copy an existing entry, and change the fields. Instructions are at the top of that file.

**Add a PDF for a paper.** Put the file in `papers/` (or `slides/`) and add `pdf: "papers/your_file.pdf"` (or `slides: ...`) to that paper's entry.

**Mark a job market paper.** Set `jmp: true` on that paper in `data/papers.js`.

**Turn on the CV button.** Save the CV as `files/Rafi_CV.pdf`. In `index.html`, find the comment that starts with "CV button" and remove the comment lines around the link.

**Turn on the research and teaching statements.** Save them as `files/Rafi_Research_Statement.pdf` and `files/Rafi_Teaching_Statement.pdf`, then remove the comment lines around that block in `index.html`.

**Replace a file with a newer version.** Save the new file with the same name. The link does not change.

**Update the date.** Change the "Last updated" line at the bottom of `index.html`.

After any change, commit and push to `main`. GitHub Pages updates the live site within a minute or two.
