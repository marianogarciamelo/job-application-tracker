const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

// GET /applications - Get all applications for the authenticated user
router.get('/', async (req, res) => {
    const { data, error } = await req.supabase
        .from('applications')
        .select('*');

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

module.exports = router;

//POST /applications - Create a new application for the authenticated user
router.post('/', async (req, res) => {
    const {data: { user } } = await req.supabase.auth.getUser(); //shorthand for const result = await req.supabase.auth.getUser(); const user = result.data.user;

    const {comp_name, job_name, job_status, job_link, date_applied, notes} = req.body;

    const { data, error } = await req.supabase
        .from('applications')
        .insert(
            {
                user_id: user.id,
                comp_name,
                job_name,
                job_status,
                job_link,
                date_applied,
                notes,
                interview_stage,
                contact
            }
        )
        .select();
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await req.supabase
        .from('applications')
        .update(updates)
        .eq('job_id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { error } = await req.supabase
        .from('applications')
        .delete()
        .eq('job_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(204).send();
});