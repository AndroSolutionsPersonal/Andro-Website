import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
    const { id } = req.query

    try {
        if (req.method === 'PUT') {
            const { title, content, image_url, author } = req.body
            const { data, error } = await supabase
                .from('news')
                .update({ title, content, image_url, author })
                .eq('id', id)
                .select()

            if (error) throw error
            return res.status(200).json({ data })
        }

        if (req.method === 'DELETE') {
            const { error } = await supabase.from('news').delete().eq('id', id)
            if (error) throw error
            return res.status(200).json({ success: true })
        }

        res.status(405).json({ error: "Method not allowed" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message })
    }
}
