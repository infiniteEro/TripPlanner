/**
 * Traveloop Supabase API Bridge
 * Direct database connectivity for cloud sync.
 */

const SUPABASE_URL = 'https://zibslyxkfixiqyuczrfp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_nd9sX-EYwAqKmF5CjxTmIQ_wWjSYtgC';

// Initialize Supabase Client
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

const TravelAPI = {
    /**
     * TRIPS
     */
    async getTrips() {
        if (!supabase) return this.getLocal('trips');
        const { data, error } = await supabase.from('trips').select('*');
        if (error) {
            console.error('Supabase Error:', error);
            return this.getLocal('trips');
        }
        return data;
    },

    async saveTrip(trip) {
        if (!supabase) return this.setLocal('trips', trip);
        const { data, error } = await supabase.from('trips').insert([trip]);
        if (error) console.error('Save Error:', error);
        return data;
    },

    /**
     * EXPENSES
     */
    async getExpenses() {
        if (!supabase) return this.getLocal('expenses');
        const { data, error } = await supabase.from('expenses').select('*');
        return data || [];
    },

    async saveExpense(expense) {
        if (!supabase) return this.setLocal('expenses', expense);
        await supabase.from('expenses').insert([expense]);
    },

    /**
     * FALLBACK HELPERS
     */
    getLocal(key) {
        const data = localStorage.getItem(`traveloop_${key}`);
        return data ? JSON.parse(data) : [];
    },

    setLocal(key, item) {
        const data = this.getLocal(key);
        data.push(item);
        localStorage.setItem(`traveloop_${key}`, JSON.stringify(data));
    }
};

window.TravelAPI = TravelAPI;
window.supabaseClient = supabase;
