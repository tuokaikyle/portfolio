## Personal website

A serverless website built using React and Tailwind.
This website has a top bar as the menu, a side bar to display personal highlights, and four pages:

- Front page: to display welcoming message and a brief introduction
- Resume page: display web version resume, also allow pdf download
- Projects page: display cards of projects
- Contact page: allow viewers to leave a message to you. The messages will be sent to your google spread sheet.

Steps to run:

- `npm install`
- Name your pdf version of resume 'cv.pdf' and put it into `public/`.
- Navigate to `public/images` and `src/content`. Put your data here.
- Create a .env file at the root
- A _tricky_ part: in order to let users send messages to your google spread sheet, you will need to
  1: create a google spread sheet
  2: enable google sheet api, and
  3: connect this sheet with your website project - basically it means to follow the steps in [this link](https://dev.to/calvinpak/how-to-read-write-google-sheets-with-react-193l).
  It seems a bit tricky, but believe me it is not!

### To be done

- Add Google Analytics
