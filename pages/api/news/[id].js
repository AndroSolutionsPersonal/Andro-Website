import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
    const { id } = req.query;
    try {
        // ---------- UPDATE ----------
        if (req.method === 'PUT') {
            const { title, content, image_url, author } = req.body;
            if (!title && !content && !image_url && !author) {
                return res.status(400).json({ error: 'At least one field must be provided for update' });
            }
            const updates = {};
            if (title !== undefined) updates.title = title;
            if (content !== undefined) updates.content = content;
            if (image_url !== undefined) updates.image_url = image_url || null;
            if (author !== undefined) updates.author = author || null;
            const { data, error } = await supabase
                .from('news')
                .update(updates)
                .eq('id', parseInt(id, 10))
                .select();
            if (error) throw error;
            if (!data || data.length === 0) {
                return res.status(404).json({ error: 'News article not found' });
            }
            return res.status(200).json({ data });
        }
        // ---------- DELETE ----------
        if (req.method === 'DELETE') {
            const { data: existing, error: fetchError } = await supabase
                .from('news')
                .select('image_url')
                .eq('id', parseInt(id, 10))
                .single();
            if (fetchError) throw fetchError;
            if (!existing) {
                return res.status(404).json({ error: 'News article not found' });
            }
            if (existing.image_url) {
                const filePath = existing.image_url.split('/').pop();
                await supabase.storage.from('news-images').remove([`news/${filePath}`]);
            }
            const { error } = await supabase
                .from('news')
                .delete()
                .eq('id', parseInt(id, 10));
            if (error) throw error;
            return res.status(200).json({ success: true });
        }
        res.status(405).json({ error: 'Method not allowed' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}