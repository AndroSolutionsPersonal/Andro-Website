"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function AdminNews() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({ title: "", content: "", author: "", image: null })
    const [editing, setEditing] = useState(null)

    async function fetchNews() {
        setLoading(true)
        const res = await fetch("/api/news")
        const { data } = await res.json()
        setNews(data || [])
        setLoading(false)
    }

    useEffect(() => { fetchNews() }, [])

    async function uploadImage(file) {
        if (!file) return null
        const fileName = `${Date.now()}-${file.name}`
        const { data, error } = await supabase.storage.from("news-images").upload(fileName, file)
        if (error) console.error(error)
        const { data: publicUrl } = supabase.storage.from("news-images").getPublicUrl(fileName)
        return publicUrl.publicUrl
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let image_url = null
        if (form.image) image_url = await uploadImage(form.image)

        const body = { ...form, image_url }

        const endpoint = editing ? `/api/news/${editing}` : "/api/news"
        const method = editing ? "PUT" : "POST"

        await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })

        setForm({ title: "", content: "", author: "", image: null })
        setEditing(null)
        setOpen(false)
        fetchNews()
    }

    async function deleteNews(id) {
        await fetch(`/api/news/${id}`, { method: "DELETE" })
        fetchNews()
    }

    return (
        <div className="max-w-5xl mx-auto p-8 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#113559]">News Management</h1>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#113559] text-white hover:bg-[#0e2a46]">
                            {editing ? "Edit News" : "Add News"}
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>{editing ? "Edit News" : "Create News"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <div>
                                <Label>Title</Label>
                                <Input
                                    required
                                    placeholder="News title"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Content</Label>
                                <Textarea
                                    required
                                    placeholder="News content..."
                                    rows={5}
                                    value={form.content}
                                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Author</Label>
                                <Input
                                    placeholder="Author name"
                                    value={form.author}
                                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Image</Label>
                                <Input
                                    type="file"
                                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                                />
                            </div>
                            <Button type="submit" className="w-full bg-[#113559] text-white">
                                {editing ? "Update" : "Create"} News
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* News list */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {loading ? (
                    <p>Loading news...</p>
                ) : (
                    news.map((n) => (
                        <Card key={n.id} className="border shadow-sm hover:shadow-md transition">
                            <CardHeader>
                                <CardTitle className="line-clamp-1">{n.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {n.image_url && (
                                    <img
                                        src={n.image_url}
                                        alt={n.title}
                                        className="w-full h-40 object-cover rounded-md mb-3"
                                    />
                                )}
                                <p className="text-sm text-gray-700 line-clamp-3">{n.content}</p>
                                <p className="text-xs text-gray-500 mt-2">
                                    By {n.author || "Unknown"} •{" "}
                                    {new Date(n.created_at).toLocaleDateString()}
                                </p>
                                <div className="flex justify-end gap-2 mt-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            setForm({
                                                title: n.title,
                                                content: n.content,
                                                author: n.author,
                                                image: null,
                                            })
                                            setEditing(n.id)
                                            setOpen(true)
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => deleteNews(n.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}
