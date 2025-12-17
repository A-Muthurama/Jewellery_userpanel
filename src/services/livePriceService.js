/**
 * Service to fetch live Gold and Silver prices.
 * 
 * NOTE: In a production environment, this should call your own backend API
 * which securely handles the secret keys for external providers (like GoldAPI.io).
 * 
 * Current Implementation: MOCK Data with simulated fluctuations.
 */

export const fetchLivePrices = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Base prices (approximate market rates)
    const baseGold = 6245.00;
    const baseSilver = 74.50;

    // Random small fluctuation
    const goldFluctuation = (Math.random() - 0.4) * 10; // -4 to +6 range
    const silverFluctuation = (Math.random() - 0.5) * 0.8;

    const newGoldPrice = baseGold + goldFluctuation;
    const newSilverPrice = baseSilver + silverFluctuation;

    return {
        gold: {
            price1g: newGoldPrice,
            price8g: newGoldPrice * 8, // 1 Pavan calculation
            change: 15.00 + goldFluctuation, // Mock change from yesterday
            isUp: true
        },
        silver: {
            price1g: newSilverPrice,
            price1kg: newSilverPrice * 1000,
            change: -0.25 + silverFluctuation,
            isUp: false
        },
        lastUpdated: "Just now"
    };
};
