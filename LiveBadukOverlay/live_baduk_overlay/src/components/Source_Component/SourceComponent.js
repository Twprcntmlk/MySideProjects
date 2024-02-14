import React, { useState } from 'react'

const SourceComponent= ({setLink, setService}) => {

    const [templink, setTempLink] = useState();
    const [tempservice, setTempService] = useState('Youtube');

    const handleServiceChange = (e) => {
        setTempService(e.target.value);
    };

    const handleLinkChange = (e) => {
        setTempLink(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setService(tempservice);
        setLink(templink);
        // Here you can update the state of the parent component with the videoType and videoLink values
      };

    // Need the V6LfPaZ-dYI from:
    // src="https://www.youtube.com/embed/V6LfPaZ-dYI"


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="service-select">Service:</label>
                <select id="service-select" value={tempservice} onChange={handleServiceChange}>
                <option value="Twitch">Twitch</option>
                <option value="Youtube">YouTube</option>
                </select>
                <br />
                <label htmlFor="link-input">videoId:</label>
                <input type="text" id="link-input" value={templink} onChange={handleLinkChange} />
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default SourceComponent
