import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { fetchLivePrices } from "../services/livePriceService";
import "./PriceTicker.css";

const PriceTicker = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadPrices = async () => {
            try {
                const prices = await fetchLivePrices();
                setData(prices);
            } catch (error) {
                console.error("Failed to fetch prices", error);
            }
        };

        loadPrices();
        const interval = setInterval(loadPrices, 60000); // refresh every minute
        return () => clearInterval(interval);
    }, []);

    if (!data) {
        return (
            <div className="price-widget-skeleton">
                <div className="skeleton-line title"></div>
                <div className="skeleton-line row"></div>
                <div className="skeleton-line row"></div>
            </div>
        );
    }

    const format = (value) =>
        value.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    return (
        <div className="price-widget">
            <div className="widget-header">
                <h3 className="widget-title">Live Gold & Silver Prices</h3>
                <span className="last-updated">Updated: {data.lastUpdated}</span>
            </div>

            <div className="price-grid">
                {/* GOLD ROW */}
                <div className="price-row gold-row">
                    <div className="metal-info">
                        <span className="metal-icon">🟡</span>
                        <span className="metal-name">Gold (22K)</span>
                    </div>

                    <div className="price-values">
                        <div className="price-block">
                            <span className="unit-label">1 Gram</span>
                            <span className="price-value">₹{format(data.gold.price1g)}</span>
                        </div>
                        <div className="price-block">
                            <span className="unit-label">8 Gram (1 Pavan)</span>
                            <span className="price-value">₹{format(data.gold.price8g)}</span>
                        </div>
                    </div>

                    <div className={`price-change ${data.gold.isUp ? "up" : "down"}`}>
                        {data.gold.isUp ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        <span>{format(Math.abs(data.gold.change))}</span>
                    </div>
                </div>

                <div className="divider"></div>

                {/* SILVER ROW */}
                <div className="price-row silver-row">
                    <div className="metal-info">
                        <span className="metal-icon">⚪</span>
                        <span className="metal-name">Silver</span>
                    </div>

                    <div className="price-values">
                        <div className="price-block">
                            <span className="unit-label">1 Gram</span>
                            <span className="price-value">₹{format(data.silver.price1g)}</span>
                        </div>
                        <div className="price-block">
                            <span className="unit-label">1 Kg</span>
                            <span className="price-value">₹{format(data.silver.price1kg)}</span>
                        </div>
                    </div>

                    <div className={`price-change ${data.silver.isUp ? "up" : "down"}`}>
                        {data.silver.isUp ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        <span>{format(Math.abs(data.silver.change))}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceTicker;
