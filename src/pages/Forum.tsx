import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Users, MessageCircle, Heart, Shield, TrendingUp, Clock, UserCheck } from "lucide-react";

const Forum = () => {
  const [newPost, setNewPost] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);

  const posts = [
    {
      id: 1,
      author: "Anonymous_123",
      timeAgo: "2 hours ago",
      title: "Dealing with exam anxiety",
      content: "Has anyone found effective ways to manage anxiety before exams? I've been struggling lately...",
      likes: 24,
      replies: 8,
      tags: ["anxiety", "exams", "student-life"],
      verified: true
    },
    {
      id: 2,
      author: "HopefulStudent",
      timeAgo: "5 hours ago",
      title: "Success story: Overcoming social anxiety",
      content: "I wanted to share my journey of overcoming social anxiety. It took time, but therapy and support from this community really helped...",
      likes: 56,
      replies: 15,
      tags: ["success-story", "social-anxiety", "recovery"],
      verified: false
    },
    {
      id: 3,
      author: "NightOwl_22",
      timeAgo: "1 day ago",
      title: "Sleep schedule tips?",
      content: "My sleep schedule is completely messed up. Any tips for getting back on track?",
      likes: 31,
      replies: 12,
      tags: ["sleep", "wellness", "tips"],
      verified: false
    },
    {
      id: 4,
      author: "CalmMind",
      timeAgo: "2 days ago",
      title: "Meditation group - Join us!",
      content: "Starting a virtual meditation group every evening at 7 PM. Everyone is welcome!",
      likes: 42,
      replies: 20,
      tags: ["meditation", "group", "support"],
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Peer Support Community</h1>
          <p className="text-muted-foreground">A safe, moderated space to connect and share experiences</p>
        </div>

        {/* Community Guidelines */}
        <Card className="p-4 mb-6 bg-primary/5 border-primary/20 rounded-2xl">
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">
              <strong>Community Guidelines:</strong> Be respectful, supportive, and maintain anonymity. 
              All posts are moderated for safety. Crisis situations will be directed to professional help.
            </p>
          </div>
        </Card>

        {/* New Post Section */}
        {!showNewPost ? (
          <div className="text-center mb-8">
            <Button 
              variant="calm" 
              size="lg"
              onClick={() => setShowNewPost(true)}
              className="rounded-2xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Share Your Thoughts
            </Button>
          </div>
        ) : (
          <Card className="p-6 mb-8 rounded-2xl bg-card/90 backdrop-blur shadow-3d">
            <h3 className="font-semibold text-foreground mb-4">Create a New Post</h3>
            <Textarea
              placeholder="Share your experience, ask for support, or offer encouragement to others..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-[120px] rounded-xl mb-4"
            />
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setShowNewPost(false)}>
                Cancel
              </Button>
              <Button variant="calm">
                Post Anonymously
              </Button>
            </div>
          </Card>
        )}

        {/* Trending Topics */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-5 w-5 text-primary mr-2" />
            <h2 className="text-lg font-semibold text-foreground">Trending Topics</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["anxiety", "depression", "self-care", "study-tips", "relationships", "sleep", "mindfulness"].map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1 rounded-full cursor-pointer hover:bg-primary/20">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="p-6 rounded-2xl bg-card/80 backdrop-blur hover:shadow-3d transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">{post.author}</span>
                      {post.verified && (
                        <UserCheck className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.content}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs rounded-full">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="rounded-xl">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-xl">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.replies} Replies
                  </Button>
                </div>
                <Button variant="glass" size="sm" className="rounded-xl">
                  View Discussion
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-2xl">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Forum;