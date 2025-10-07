import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
    try {
        // ---------- READ ----------
        if (req.method === 'GET') {
            const { data, error } = await supabase
                .from('news')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            return res.status(200).json({ data });
        }
        // ---------- CREATE ----------
        if (req.method === 'POST') {
            const { title, content, image, author } = req.body;
            if (!title || !content) {
                return res.status(400).json({ error: 'Title and content are required' });
            }
            let image_url = null;
            if (image) {
                // Assuming image is a base64 string or buffer (sent from client)
                const fileExt = image.type.split('/').pop();
                const fileName = `news/${uuidv4()}.${fileExt}`;
                const { error: uploadError } = await supabase.storage
                    .from('news-images')
                    .upload(fileName, Buffer.from(image.data, 'base64'), {
                        contentType: image.type,
                        cacheControl: '3600',
                        upsert: false,
                    });
                if (uploadError) throw uploadError;
                const { data: urlData } = supabase.storage.from('news-images').getPublicUrl(fileName);
                image_url = urlData.publicUrl;
            }
            const { data, error } = await supabase
                .from('news')
                .insert([{ title, content, image_url, author: author || null }])
                .select();
            if (error) throw error;
            return res.status(201).json({ data });
        }
        res.status(405).json({ error: 'Method not allowed' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}