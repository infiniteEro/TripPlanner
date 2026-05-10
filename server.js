const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// ✅ Replace these with your actual Supabase project URL and anon key
// Found at: https://supabase.com/dashboard → Your Project → Settings → API
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- AUTH ENDPOINTS ---

// SIGNUP - creates user and sends verification email automatically
app.post('/api/auth/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    res.json({
        message: 'Account created! Please check your email to verify your account.',
        user: { id: data.user.id, email: data.user.email }
    });
});

// LOGIN
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        return res.status(401).json({ message: error.message });
    }

    res.json({
        token: data.session.access_token,
        user: { id: data.user.id, email: data.user.email }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Traveloop backend running at http://localhost:${PORT}`);
});
