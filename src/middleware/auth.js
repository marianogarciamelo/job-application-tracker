const {createSupabaseClient} = require('../supabaseClient');

function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1];

    req.supabase = createSupabaseClient(token);

    next();
}

module.exports = requireAuth;