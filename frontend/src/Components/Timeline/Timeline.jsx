import "./Timeline.css"
const Timeline = () => {
    return (
        <>
            <div className="timeline" >
                <div className="timeline-container">
                    <h1 className="steps">1</h1>
                    <div className="text-box">
                        <h2>Copy the URL</h2>
                        <p>To get started, access either the Instagram app or Facebook and retrieve the link to the specific video or reels content that you want to copy</p>
                    </div>
                </div>
                <div className="timeline-container right-container">
                    <h1 className="steps">2</h1>
                    <div className="text-box">
                        <h2>Paste the link</h2>
                        <p>Return to the FI Video website, paste the link into the input field at the top of the screen and click the “Download” button.</p>
                    </div>
                </div>
                <div className="timeline-container left-container">
                    <h1 className="steps">3</h1>
                    <div className="text-box">
                        <h2>Download</h2>
                        <p>In no time at all, you'll receive a list of results that offer various quality options. Choose the option that best suits your requirements and download it.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Timeline