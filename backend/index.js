import express from 'express';
import ytdl from "ytdl-core";
import instagramGetUrl from "instagram-url-direct";
import fbDownloader from "fb-downloader-scrapper";
import cors from 'cors';
const app = express();
const port = 5000;
app.use(cors());
app.get("/download-fb-video", async (req, res) => {
  const videoUrl = req.query.url;
  try {
    const videoInfo = await fbDownloader(videoUrl);
    const videoDownloadUrl = videoInfo.hd;
    if (videoDownloadUrl) {
      return res.json({ videoUrl: videoDownloadUrl });
    } else {
      return res.status(404).json({ error: "No downloadable video found." });
    }
  } catch (error) {
    
    return res.status(404).json({ error: "Please enter the valid Facebook URL" })
  }
})

app.get("/download-instagram-video", async (req, res) => {
  const videoUrl = req.query.url;
  try {
    const videoInfo = await instagramGetUrl(videoUrl);
    if (!videoInfo.url_list || videoInfo.url_list.length === 0) {
      return res.status(400).send("No downloadable video found.");
    }
    const videoDownloadUrl = videoInfo.url_list[0];
    return res.json({ videoUrl: videoDownloadUrl });
  } catch (error) {
    return res.status(404).json({ error: "Please enter the valid Instagram URl" })
    
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// app.get("/download-yt-video", async (req, res) => {
//   const YTURL = req.query.url;

//   if (!YTURL) {
//     return res.status(400).send("You must provide a YouTube URL.");
//   }

//   const videoID = ytdl.getVideoID(YTURL);
//   console.log(videoID);

//   res.header('Content-Disposition', `attachment; filename="${videoID}.mp4"`);

//   ytdl(YTURL, { quality: 'highestvideo' })
//     .pipe(res)
//     .on('error', (err) => {
//       console.error(err);
//       res.status(500).send("Error downloading the video.");
//     });
// });

