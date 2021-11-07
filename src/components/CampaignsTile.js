import React from 'react'

export default function CampaignsTile({campaign}) {
    return (
        <div className="offersTile" id={campaign.campaignId}>
            <div>{campaign.campaignName}</div> 
            <div>{campaign.campaignMessage}</div>
            <img src={campaign.campaignBannerUrl} alt=""/>
        </div>
    )
}
