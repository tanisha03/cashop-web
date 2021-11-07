import React from 'react'

export default function OffersTile({offer}) {
    return (
        <div className="offersTile" id={offer.offerId}>
            <div>{offer.offerName}</div> 
            <div>{offer.offerDetails}</div>
        </div>
    )
}
