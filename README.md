## Personal website

A serverless website built using React and Tailwind.
This website has a top bar as the menu, a side bar to display personal highlights, and four pages:

- Front page: to display welcoming message and a brief introduction
- Resume page: display web version resume, also allow pdf download
- Projects page: display cards of projects
- Contact page: allow viewers to leave a message to you. The messages will be sent to your google spread sheet.

## Data preparation

- Modify `src/content/frontPage.md`. This is for the content shown on front page.
- Modify `src/content/data.js` without changing the file structure.
- Navigate to `public/images` and add your own images. Make sure the image names are same as the ones defined in 'data.js'.
- Create your resume as 'cv.pdf' and put it into `public/`. This is for viewers to download the resume.

## Steps to run:

1. `npm install`
2. Create a .env file at the root
3. A _tricky_ part: in order to let users send messages to your google spread sheet, you will need to

- create a google spread sheet
- enable google sheet api
- connect this sheet with your website project - basically it means to follow the steps in [this link](https://dev.to/calvinpak/how-to-read-write-google-sheets-with-react-193l). It seems a bit tricky, but believe me it is not!

## To be done

- Add Google Analytics
