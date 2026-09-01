VIDEO SETUP NOTES (Eventzone.ng)

This folder now holds real event clips, compressed for the web:

- wedding-aisle.mp4           Abiodun and Olusanmi, aisle reveal (featured
                               as "most recent work" on the homepage and
                               projects page)
- wedding-reception.mp4       Abiodun and Olusanmi, reception hall
- elroi-playdate-garden.mp4   El'roi's play date, garden lunch tables
- elroi-playdate-entrance.mp4 El'roi's play date, arch entrance
- cherry-on-top-birthday.mp4  A cherry themed birthday tablescape
- ms-rachel-birthday.mp4      A Ms Rachel themed toddler party
- first-birthday-moment.mp4   A first birthday moment

All of these were sourced from Instagram exports, which meant they
came in at 720p vertical (9 by 16); that is the real ceiling of
quality in the original files, since Instagram compresses on upload,
so there was no true 4K source to work from. Upscaling them would not
add real detail, only file size, so each clip was re-encoded at its
native resolution: H.264 MP4, faststart enabled for instant web
playback, mono audio at a light bitrate. Combined, the seven clips
went from about 31 MB to about 15 MB with no visible quality loss at
the sizes they display on the site.

If a future clip actually is shot in 4K (3840 by 2160), the same
compression approach still applies: keep the source resolution,
export H.264 at roughly 6 to 10 Mbps, and rely on the CSS to scale it
down responsively rather than storing multiple resolutions.

Only the featured wedding clip needs to be a video; everything else
on the site stays a photo, to keep pages fast.
