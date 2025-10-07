// /pages/api/upload.js
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
    try {
        const file = req.body.file
        const path = `news/${Date.now()}-${file.name}`
        const { error } = await supabase.storage.from("news-images")
            .upload(path, file, { upsert: false })
        if (error) throw error

        const { data: { publicUrl } } =
            supabase.storage.from("news-images").getPublicUrl(path)

        res.status(200).json({ url: publicUrl })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
