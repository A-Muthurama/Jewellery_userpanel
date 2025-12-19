import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchOfferById } from '../services/offerservice';
import { MapPin, Share2, Calendar, Navigation, ArrowLeft } from 'lucide-react';
import './OfferDetails.css';

const OfferDetails = () => {
  const { id } = useParams();

  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadOffer = async () => {
      try {
        setLoading(true);
        const data = await fetchOfferById(id);
        if (!data) {
          setError('Offer not found');
        } else {
          setOffer(data);
        }
      } catch (err) {
        setError('Error fetching offer details');
      } finally {
        setLoading(false);
      }
    };

    loadOffer();
  }, [id]);

  /* ---------------- STATES ---------------- */

  if (loading) {
    return (
      <div className="container section text-center">
        <h3>Loading offer details...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section text-center">
        <h2>{error}</h2>
        <Link to="/offers" className="btn-primary">
          Back to Offers
        </Link>
      </div>
    );
  }

  /* ---------------- ACTIONS ---------------- */

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${offer.discountValue} at ${offer.shopName}`,
          text: offer.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDirections = () => {
    const query = `${offer.shopName}, ${offer.location.city}`;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
      '_blank'
    );
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="offer-details-page">
      <div className="container section details-wrapper">

        <Link to="/offers" className="view-all-link">
          <ArrowLeft size={18} /> Back to Offers
        </Link>

        <div className="details-hero">
          <img src={offer.image} alt={offer.shopName} className="details-image" />
          <span className="details-badge">{offer.category}</span>
        </div>

        <div className="details-content">
          {/* LEFT */}
          <div className="main-info">
            <h1>{offer.shopName}</h1>

            <div className="shop-link">
              <MapPin size={18} />
              {offer.location.city}, {offer.location.state}
            </div>

            <div className="discount-banner">
              <div className="big-discount">{offer.discountValue}</div>
              <div className="discount-type">{offer.discountType}</div>
            </div>

            <div className="mobile-validity">
              <Calendar size={16} />
              Valid Until: <strong>{offer.validUntil}</strong>
            </div>

            <div className="description-box">
              <h3>About This Offer</h3>
              <p className="description-text">{offer.description}</p>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="details-sidebar">
            <div className="card-base">
              <div className="validity-block">
                <span className="validity-label">
                  <Calendar size={14} /> Valid Until
                </span>
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
    </div>
  );
};

export default OfferDetails;
