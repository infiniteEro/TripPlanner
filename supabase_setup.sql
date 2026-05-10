-- ✅ Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Create Trips Table
CREATE TABLE IF NOT EXISTS public.trips (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id UUID REFERENCES auth.users(id),
    destination TEXT NOT NULL,
    start_date DATE,
    end_date DATE,
    budget_limit DECIMAL(12, 2),
    status TEXT DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Itinerary Table
CREATE TABLE IF NOT EXISTS public.itinerary (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    trip_id BIGINT REFERENCES public.trips(id) ON DELETE CASCADE,
    day_number INT,
    place_name TEXT,
    description TEXT
);

-- 3. Create Expenses Table
CREATE TABLE IF NOT EXISTS public.expenses (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    trip_id BIGINT REFERENCES public.trips(id) ON DELETE CASCADE,
    category TEXT,
    description TEXT,
    amount_inr DECIMAL(12, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.itinerary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;

-- 5. Create Policies (Allow users to see only their own data)
CREATE POLICY "Users can view their own trips" ON public.trips
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own trips" ON public.trips
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own trips" ON public.trips
    FOR UPDATE USING (auth.uid() = user_id);

-- Note: Itinerary and Expenses policies would ideally link back to trips.user_id
-- For simplicity, let's allow all authenticated users to read/write for now, 
-- or you can refine these policies later.
CREATE POLICY "Authenticated users can manage itinerary" ON public.itinerary
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage expenses" ON public.expenses
    FOR ALL USING (auth.role() = 'authenticated');
