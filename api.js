/**
 * Traveloop Local API Bridge
 * Reverted to local-first architecture using localStorage.
 */

const TravelAPI = {
    /**
     * TRIPS
     */
    async getTrips() {
        return this.getLocal('trips');
    },

    async saveTrip(trip) {
        return this.setLocal('trips', trip);
    },

    /**
     * ITINERARY
     */
    async getItinerary() {
        const data = localStorage.getItem('traveloop_itinerary');
        return data ? JSON.parse(data) : { stops: [] };
    },

    async saveItinerary(itinerary) {
        localStorage.setItem('traveloop_itinerary', JSON.stringify(itinerary));
    },

    /**
     * EXPENSES
     */
    async getExpenses() {
        return this.getLocal('expenses');
    },

    async saveExpense(expense) {
        return this.setLocal('expenses', expense);
    },

    /**
     * LOCAL STORAGE HELPERS
     */
    getLocal(key) {
        const data = localStorage.getItem(`traveloop_${key}`);
        return data ? JSON.parse(data) : [];
    },

    setLocal(key, item) {
        const data = this.getLocal(key);
        data.push(item);
        localStorage.setItem(`traveloop_${key}`, JSON.stringify(data));
        return item;
    }
};

window.TravelAPI = TravelAPI;
