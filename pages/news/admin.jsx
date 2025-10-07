"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Trash2, Newspaper } from "lucide-react"

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
        <div className="pt-24 px-6 md:px-12 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-[#113559] flex items-center gap-2">
                            <Newspaper className="w-7 h-7 text-[#113559]" />
                            News Management
                        </h1>
                        <p className="text-gray-600 mt-1">
                            Manage, create, and publish Andro Solutions updates
                        </p>
                    </div>
                </div>

                {/* Add News Dialog */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold text-[#113559]">
                                {editing ? "Edit News" : "Create News"}
                            </DialogTitle>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-4 text-[#113559]">
                            <div>
                                <Label>Title</Label>
                                <Input
                                    required
                                    placeholder="Enter news title"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Content</Label>
                                <Textarea
                                    required
                                    placeholder="Write your article..."
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
                                {editing ? "Update News" : "Publish News"}
                            </Button>
                        </form>
                    </DialogContent>

                    {/* News Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                        {/* Add News Card */}
                        <DialogTrigger asChild>
                            <Card className="group flex items-center justify-center border-dashed border-2 border-[#113559]/40 bg-gradient-to-br from-[#113559]/10 to-white hover:from-[#113559]/20 hover:to-[#113559]/10 transition-all rounded-xl p-6 cursor-pointer min-h-[220px] hover:shadow-md">
                                <div className="text-center space-y-3">
                                    <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#113559]/10 group-hover:bg-[#113559]/20 transition-all">
                                        <Plus className="w-6 h-6 text-[#113559]" />
                                    </div>
                                    <h3 className="font-semibold text-[#113559] text-lg">Add New Post</h3>
                                    <p className="text-sm text-gray-500">Create a new news article</p>
                                </div>
                            </Card>
                        </DialogTrigger>

                        {/* News Items */}
                        {loading ? (
                            <p className="col-span-full text-center text-gray-500">Loading news...</p>
                        ) : news.length === 0 ? (
                            <p className="col-span-full text-center text-gray-500">No news available.</p>
                        ) : (
                            news.map((n) => (
                                <Card
                                    key={n.id}
                                    className="border-0 shadow-sm hover:shadow-md transition-all bg-white rounded-xl"
                                >
                                    {n.image_url && (
                                        <img
                                            src={n.image_url}
                                            alt={n.title}
                                            className="w-full h-40 object-cover rounded-t-xl"
                                        />
                                    )}
                                    <CardHeader>
                                        <CardTitle className="line-clamp-1 text-[#113559] font-semibold">
                                            {n.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-700 line-clamp-3">{n.content}</p>
                                        <p className="text-xs text-gray-500 mt-2">
                                            By {n.author || "Unknown"} •{" "}
                                            {new Date(n.created_at).toLocaleDateString()}
                                        </p>
                                        <div className="flex justify-end gap-2 mt-4">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center gap-1"
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
                                                <Edit className="w-4 h-4" /> Edit
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                className="flex items-center gap-1"
                                                onClick={() => deleteNews(n.id)}
                                            >
                                                <Trash2 className="w-4 h-4" /> Delete
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </Dialog>
            </div>
        </div>
    )
}
