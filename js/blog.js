// Blog post data with placeholders
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Large Language Models",
        excerpt: "An overview of LLM fundamentals and practical tips for integrating them into production systems. We'll explore fine-tuning strategies and deployment considerations.",
        date: 'September 2024',
        category: 'Machine Learning',
        tags: ['LLMs', 'Production', 'Best Practices'],
        readTime: '8 min read',
        link: '#'
    },
    {
        id: 2,
        title: "Building Scalable ML Pipelines",
        excerpt: "Lessons learned from building data pipelines that process millions of records daily. Covers optimization techniques and error handling strategies.",
        date: 'August 2024',
        category: 'Data Engineering',
        tags: ['Pipelines', 'Scalability', 'Optimization'],
        readTime: '12 min read',
        link: '#'
    }
];

// Markdown renderer using simple regex-based parser
function parseMarkdown(text) {
    const lines = text.split('\n');
    let html = '';
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Headers
        if (line.startsWith('# ')) {
            html += `<h3 class="blog-post-title">${parseInline(line.slice(2))}</h3>`;
        } else if (line.startsWith('## ')) {
            html += `<h4>${parseInline(line.slice(3))}</h4>`;
        } else if (line.startsWith('### ')) {
            html += `<h5>${parseInline(line.slice(4))}</h5>`;
        }
        
        // Line breaks
        else if (line.endsWith('=')) {
            html += '<hr>';
        }
        
        // Empty lines
        else if (line.trim() === '') {
            html += '</p><br>';
        }
        
        // Regular text
        else {
            html += `<p>${parseInline(line)}<br>`;
        }
    }
    
    return html;
}

// Parse inline formatting like **bold**, *italic*, etc.
function parseInline(text) {
    let html = text
    
    // Escape HTML entities
    html = html.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');
    
    // Code blocks (backticks)
    html = html.replace(/\`([^`]+)\`/g, '<code>\\$1</code>');
    
    // Bold (**text**)
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>\\$1</strong>');
    
    // Italic (*text*)
    html = html.replace(/\*(.+?)\*/g, '<em>\\$1</em>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="\\$2">\\$1</a>');
    
    return html;
}

// Get markdown content from file (simulated with placeholder content)
function getBlogContent(postId) {
    const posts = document.querySelectorAll('.blog-post-card');
    for (let card of posts) {
        const id = card.dataset.id;
        if (id === postId) {
            return card.querySelector('.markdown-content').innerHTML;
        }
    }
    
    // Fallback placeholder content if file doesn't exist yet
    const placeholders = {
        '1': `# My First Blog Post

> Welcome to my first blog post! Here I'm discussing my thoughts on ${'**AI Engineering**'} and how we can make the transition from data science.

## What is AI Engineering?

AI Engineering refers to the process of building reliable, scalable, and production-ready AI systems. It's not just about training models; it's about:

1. Creating robust data pipelines
2. Implementing proper monitoring and observability
3. Ensuring model fairness and explainability
4. Deploying efficiently in production environments

## Key Takeaways

**Be practical**: Focus on what matters for your users  
*Start small*: Iterate based on feedback  
**Document everything**: Make it easier to maintain`,
        
        '2': `# Building Efficient Data Pipelines

In this article, I'll share my approach to building scalable machine learning pipelines. The key lesson: simplicity often wins in production environments.

## Principles for Production ML Systems

### Write clean data transformations

```python
def preprocess_data(df):
    """Simple and maintainable preprocessing"""
    df['normalized'] = (df['value'] - df['mean']) / df['std']
    return df
```

### Implement proper error handling

Always add retry logic and dead letter queues for robust systems.

### Monitor everything

Track metrics, errors, and data quality indicators from day one.

## Final Thoughts

Remember that your first version rarely becomes production-ready. Iterate based on real user feedback!`
    };
    
    return placeholders[postId] || `# Blog Post ${postId}

This is a placeholder for blog post \`${postId}\`. Replace this content with actual markdown from your \`blog/post${postId}.md\` file.`;
}

// Initialize blog posts when page loads
document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('blog-posts-container');
    
    if (!container) return;
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-post-card';
        blogCard.dataset.id = post.id;
        
        const fullMarkdown = getBlogContent(post.id);
        const parsedContent = parseMarkdown(fullMarkdown);
        
        blogCard.innerHTML = \`
            <h3 class="blog-post-title">\${post.title}</h3>
            <p class="blog-post-excerpt">\${post.excerpt}</p>
            <div class="blog-post-meta">
                <span>\${post.date}</span> · 
                <span class="category">\${post.category}</span> · 
                <span>\${post.readTime}</span>
            </div>
            <br>
            <div class="markdown-content">\${parsedContent}</div>
            <a href="\${post.link}" class="blog-post-btn" rel="noopener noreferrer">Read Full Post</a>
        \`;
        
        container.appendChild(blogCard);
    });
});

// Simple search/filter utility for blog posts
function filterBlogPosts(term) {
    const cards = document.querySelectorAll('.blog-post-card');
    
    if (!term) {
        cards.forEach(card => card.style.display = 'block');
        return;
    }
    
    const lowerTerm = term.toLowerCase();
    cards.forEach(card => {
        const content = (card.textContent + card.dataset.title).toLowerCase();
        if (content.includes(lowerTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parseMarkdown, getBlogContent };
}
