import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import OfferCard from '../components/OfferCard';
import { OFFERS, CATEGORIES, LOCATIONS } from '../data/mockData';
import { Frown } from 'lucide-react';
import './Offers.css';

const Offers = () => {
    const [filteredOffers, setFilteredOffers] = useState(OFFERS);

    const handleFilterChange = (filters) => {
        let result = [...OFFERS];

        // 1. Text Search
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            result = result.filter(o =>
                o.shopName.toLowerCase().includes(searchLower) ||
                o.description.toLowerCase().includes(searchLower)
            );
        }

        // 2. Category
        if (filters.category && filters.category !== 'All') {
            result = result.filter(o => o.category === filters.category);
        }

        // 3. Location Hierarchy
        if (filters.state) {
            result = result.filter(o => o.location.state === filters.state);
        }
        if (filters.city) {
            result = result.filter(o => o.location.city === filters.city);
        }
        if (filters.pincode) {
            result = result.filter(o => o.location.pincode === filters.pincode);
        }

        // 4. Distance 
        if (filters.distance < 10) {
            result = result.slice(0, Math.max(1, Math.floor(result.length / 2)));
        }

        // 5. Sorting
        if (filters.sort) {
            switch (filters.sort) {
                case 'discount_high':
                    result.sort((a, b) => (b.discountValueNumeric || 0) - (a.discountValueNumeric || 0));
                    break;
                case 'discount_low':
                    result.sort((a, b) => (a.discountValueNumeric || 0) - (b.discountValueNumeric || 0));
                    break;
                case 'newest':
                default:
                    result.sort((a, b) => b.id - a.id);
                    break;
            }
        }

        setFilteredOffers(result);
    };

    return (
        <div className="offers-page container section">
            <div className="page-header">
                <h1 className="page-title">Explore Jewellery Offers</h1>
                <p className="page-subtitle">Find the best deals in your city.</p>
            </div>

            <FilterBar
                categories={CATEGORIES}
                locations={LOCATIONS}
                onFilterChange={handleFilterChange}
            />

            {filteredOffers.length > 0 ? (
                <div className="offers-grid">
                    {filteredOffers.map(offer => (
                        <OfferCard key={offer.id} offer={offer} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <Frown size={48} color="var(--color-gold-dark)" />
                    <h3>No offers found</h3>
                    <p>Try adjusting your search or filters.</p>
                </div>
            )}
        </div>
    );
};

export default Offers;
