# Tareq & Layan’s wedding website

A static, mobile-friendly wedding website for GitHub Pages. No installation or build is required.

## Publish on GitHub Pages

1. Create a GitHub repository for the website.
2. Upload the contents of this folder to the repository root, including the assets folder. Upload the files inside this folder, not the enclosing folder itself.
3. Open Settings → Pages. Choose “Deploy from a branch”, select main and / (root), then Save.
4. GitHub displays your website address when deployment finishes.

The website uses relative asset paths so it works on a repository URL or a custom domain. No RSVP responses or invitation lists should be committed to the repository.

## Activate the RSVP form

1. Create a Tally account at https://tally.so and create a wedding RSVP form.
2. Use the field plan below. Match the ivory background (#faf8f3), dark text (#433d34) and brown accent (#80503e) where available.
3. Publish the form. Its link will look like https://tally.so/r/ABC123.
4. Open config.js and set tallyFormId to the actual ID from your link, for example "ABC123".
5. Upload the edited config.js to GitHub. The RSVP section automatically embeds your live form.
6. Submit a test response, check it in Tally’s Submissions tab, and remove the test before sharing the website.

Until a real form ID is configured, the site shows an honest “form available soon” message. No responses are collected by the supplied files alone.

## Suggested Tally form

Form title: Tareq & Layan’s wedding RSVP

Intro: We can’t wait to celebrate with you on 30 April 2027 at La Plage, Hyatt Regency Beach Club, Aqaba. Please respond for the people named on your invitation and approved plus-ones only.

- Your full name (required short text)
- Email address (required email)
- Will you be joining us? (required choice: Joyfully accept / Regretfully decline)
- Names of other invited guests included in this response (long text; one name per line)
- Attendance for each additional guest (long text; ask for “Name — attending / not attending” for each person)
- Are you bringing an approved plus-one? (Yes / No; show only when attending)
- Approved plus-one’s full name (required when the previous answer is Yes)
- Dietary requirements or allergies (optional long text; include the relevant guest’s name)
- A message for Tareq & Layan (optional long text)
- Required checkbox: “I am responding only for invited guests and plus-ones approved by Tareq and Layan.”

Confirmation: Thank you! We’ve received your RSVP. We can’t wait to celebrate with you.

This lets one submission cover multiple guests. Additional guest names and attendance are stored within that submission; it is not automatically one database row per guest.

## Approved plus-ones

The site displays the rule, and the form asks guests to confirm it. This is a policy and manual check, not technical enforcement. Review submitted names against your private invitation list in Tally. Do not upload that list to GitHub.

For hard enforcement, a separate invitation-validation service would be needed to check private invitation codes and guest limits before accepting submissions. A public JavaScript guest list would expose names and would not securely enforce the rule.

## View responses

Use the “Couple’s dashboard” link in the footer. It opens a page linking to https://tally.so/dashboard. Sign in, select the wedding form and open Submissions. The response dashboard is Tally’s private dashboard, not a custom admin system hosted on GitHub Pages.

There is no password or credential in the website. The dashboard gateway page is publicly reachable but contains no guest information.

## Wedding content

- Names: Tareq & Layan
- Date: Friday, 30 April 2027
- Time: 6pm Jordan time
- Venue: La Plage – Hyatt Regency Beach Club, Aqaba, Jordan
- Countdown: 2027-04-30T18:00:00+03:00 (15:00 UTC)

Jordan’s current UTC+3 offset is encoded explicitly, so visitors see the same countdown worldwide. The calendar file uses the matching UTC start time. The venue link is a map search using the supplied name; check the resulting pin before sending invitations.

No RSVP deadline, schedule, dress code or travel arrangements were supplied, so those details have not been invented. Edit index.html to add them later.

## Files

index.html: wedding page; styles.css: design and mobile layout; app.js: countdown and embed; config.js: public form ID; dashboard.html: Tally dashboard gateway; wedding.ics: calendar invitation; assets/: supplied artwork and favicon; .nojekyll: disables Jekyll processing.

## Local preview

From this folder run: python3 -m http.server 8000

Then visit http://localhost:8000. Stop the server with Ctrl+C.

## Guest wedding theme

The guest theme section describes a sunset palette of peach, coral, golden yellow and olive green, with optional outfit or accessory inspiration. This is not a mandatory dress code.

## Things to do in Jordan

The guest travel section includes Petra (1 full day; 2 for a slower visit), Wadi Rum (1 day and 1 night), Aqaba (1–2 extra days), Dead Sea (1 day or overnight), Amman (1–2 days) and Jerash (half a day, or a full day with travel). Durations are editorial planning suggestions, not official minimums. Travel time is additional unless stated. Destination background is based on Jordan Tourism Board resources: https://international.visitjordan.com/where-to-go/ and https://jerash.visitjordan.com/en/page/6/Discover-Jerash .

## Accommodation

Includes Hyatt Regency Aqaba Ayla Resort (home to La Plage Beach Club), Kempinski Hotel Aqaba Red Sea, InterContinental Aqaba and DoubleTree by Hilton Aqaba. Descriptions and official links were checked against hotel websites on 1 October 2026. Rates, availability, room blocks, discounts and transfer times are not asserted. Guests should check their dates directly with each property.
