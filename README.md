## Personal website

This is a personal website that was greatly inspired by [Michael D'Angelo](https://mldangelo.com/)'s site, but was built using React and Tailwind. [Click here to see](https://tuokaikyle.github.io/portfolio/).

This website has a **top bar** as the menu, a **side bar** to display personal highlights, and four pages:

- Front: Welcoming message and a brief introduction
- Resume: Digital resume
- Projects: Cards of projects
- Contact: Allow viewers to send a message to your google spread sheet

## Data preparation

- `src/content/frontPage.md` This is for the content shown on front page.
- `src/content/data.js` Customizable data. Be careful not to change the variable names in this file.
- `public/images` Add your own images. The image names should be the same as the ones defined in 'data.js'.
- `public/cv.pdf` This is for viewers to download the resume in pdf version.

## Steps to run

1. `npm install`
2. Create a .env file at the root
3. A _tricky_ part: in order to let users send messages to your google spread sheet, you will need to
   - Create a google spread sheet
   - Eenable google sheet api
   - Connect this sheet with your website project - basically it means to follow the steps in [this link](https://dev.to/calvinpak/how-to-read-write-google-sheets-with-react-193l). It seems a bit tricky, but believe me it is not!
4. `npm start`
5. The website should be able to run locally at http://localhost:3000/portfolio

## To be done

- [ ] Add Google Analytics
- [x] Contact page: users send messages to google spread sheet
