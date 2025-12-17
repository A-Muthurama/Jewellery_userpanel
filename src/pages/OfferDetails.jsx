import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { OFFERS } from '../data/mockData';
import { MapPin, Share2, Calendar, Navigation, ArrowLeft } from 'lucide-react';
import './OfferDetails.css';

const OfferDetails = () => {
    const { id } = useParams();
    const offer = OFFERS.find(o => o.id === parseInt(id));

    if (!offer) {
        return (
            <div className="container section text-center">
                <h2>Offer Not Found</h2>
                <Link to="/offers" className="btn-primary">Back to Offers</Link>
            </div>
        );
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${offer.discountValue} at ${offer.shopName}`,
                    text: `Check out this offer: ${offer.description}`,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleDirections = () => {
        const query = `${offer.shopName}, ${offer.location.city}`;
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
    };

    return (
        <div className="details-container container section offer-details-page">
            <Link to="/offers" className="view-all-link" style={{ marginBottom: '1rem' }}>
                <ArrowLeft size={18} /> Back to Offers
            </Link>

            <div className="details-hero">
                <img src={offer.image} alt={offer.shopName} className="details-image" />
                <span className="details-badge">{offer.category}</span>
            </div>

            <div className="details-content">
                <div className="main-info">
                    <h1>{offer.shopName}</h1>
                    <div className="shop-link">
                        <MapPin size={18} color="var(--color-gold-primary)" />
                        {offer.location.city}, {offer.location.state}
                    </div>

                    <div className="discount-banner">
                        <div className="big-discount">{offer.discountValue}</div>
                        <div className="discount-type">{offer.discountType}</div>
                    </div>

                    <div className="mobile-validity">
                        <Calendar size={16} /> Valid Until: <strong>{offer.validUntil}</strong>
                    </div>

                    <div className="description-box">
                        <h3>About This Offer</h3>
                        <p className="description-text">{offer.description}</p>
                    </div>
                </div>

                <aside className="details-sidebar">
                    <div className="card-base">
                        <div className="validity-block">
                            <span className="validity-label"><Calendar size={14} style={{ marginRight: '5px' }} /> Valid Until</span>
                            <div className="validity-date">{offer.validUntil}</div>
                        </div>

                        <div className="action-buttons">
                            <button className="btn-primary btn-full" onClick={handleDirections}>
                                <Navigation size={18} /> Get Directions
                            </button>
                            <button className="btn-share btn-full" onClick={handleShare}>
                                <Share2 size={18} /> Share
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default OfferDetails;
