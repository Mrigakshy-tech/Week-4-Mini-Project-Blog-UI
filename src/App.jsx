import {useMemo,useState} from "react";
import {Link,NavLink,Route,Routes,useParams} from "react-router-dom";
import posts from "./data/posts.json";

function Header(){
 return <header className="header"><Link to="/" className="brand"><span className="brand-mark">i.</span><span>ink<span className="brand-light">&ideas</span></span></Link>
 <nav><NavLink to="/" end>Home</NavLink><a href="/#articles">Articles</a><a href="/#about">About</a></nav><Link to="/#articles" className="write-link">Explore stories <span>↗</span></Link></header>;
}
function PostCard({post,index}){
 return <article className="post-card"><Link to={`/post/${post.id}`} className={`cover ${post.color}`} aria-label={`Read ${post.title}`}><span className="cover-number">0{index+1}</span><span className="cover-art">{post.category==="Design"?"✳":post.category==="Technology"?"⌘":post.category==="Lifestyle"?"☼":post.category==="Learning"?"✎":"✦"}</span><span className="cover-caption">{post.category} / JOURNAL</span></Link>
 <div className="post-info"><div className="meta">{post.category}<span>·</span>{post.readTime}</div><h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3><p>{post.excerpt}</p><div className="post-footer"><span>{post.author}</span><span>{post.date}</span></div></div></article>
}
function Home(){
 const [query,setQuery]=useState(""); const [category,setCategory]=useState("All");
 const categories=["All","Design","Technology","Productivity","Learning","Lifestyle"];
 const filtered=useMemo(()=>posts.filter(p=>(category==="All"||p.category===category)&&(`${p.title} ${p.excerpt} ${p.author}`).toLowerCase().includes(query.toLowerCase())),[query,category]);
 const featured=posts.find(p=>p.featured);
 return <><section className="hero"><div className="hero-copy"><p className="eyebrow">A JOURNAL FOR CURIOUS MINDS</p><h1>Ideas worth<br/><em>sharing.</em></h1><p className="hero-intro">Thoughts on design, technology, creativity, and the little things that make life interesting.</p><a className="dark-button" href="#articles">Explore the journal <span>↓</span></a></div><div className="hero-visual"><div className="sun-shape"></div><div className="hero-note"><span>THE WEEKLY EDIT</span><strong>Make time<br/>for ideas.</strong><small>ISSUE Nº 024 — NOV 2026</small></div><div className="hero-stamp">READ<br/>SLOWLY</div></div></section>
 <section className="featured-strip"><span className="strip-label">EDITOR'S PICK</span><Link to={`/post/${featured.id}`}>{featured.title}</Link><span className="strip-date">{featured.date}</span></section>
 <section className="articles-section" id="articles"><div className="section-heading"><div><p className="eyebrow">THE LATEST</p><h2>Stories & perspectives<span>.</span></h2></div><p className="section-note">A collection of ideas to help you<br/>think, make, and grow.</p></div>
 <div className="toolbar"><div className="categories">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?"category active":"category"}>{c}</button>)}</div><input aria-label="Search articles" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search stories  ↗"/></div>
 <div className="post-grid">{filtered.map((p,i)=><PostCard post={p} index={i} key={p.id}/>)}</div>{filtered.length===0&&<div className="empty">No stories found. Try another search or category.</div>}</section>
 <section className="about-band" id="about"><div><p className="eyebrow">A NOTE FROM US</p><h2>Curiosity looks<br/><em>good on you.</em></h2></div><p>Ink & Ideas is a little corner of the internet for thoughtful stories, practical lessons, and fresh perspectives. Take what you need, leave with a new idea.</p></section></>;
}
function PostDetail(){
 const {id}=useParams();const post=posts.find(p=>p.id===id);
 if(!post)return <main className="not-found"><p className="eyebrow">404 / NOT FOUND</p><h1>Story not found.</h1><Link className="dark-button" to="/">Back to home</Link></main>;
 return <main className="detail"><Link to="/" className="back-link">← Back to all stories</Link><div className={`detail-cover ${post.color}`}><span>{post.category} / JOURNAL</span><strong>{post.title}</strong><small>{post.date} · {post.readTime}</small><b>{post.category==="Design"?"✳":post.category==="Technology"?"⌘":post.category==="Lifestyle"?"☼":post.category==="Learning"?"✎":"✦"}</b></div><article className="article-body"><div className="article-meta">WORDS BY <strong>{post.author.toUpperCase()}</strong></div><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>{post.content.split("\n\n").map((para,i)=><p key={i}>{para}</p>)}<div className="article-end">— END OF STORY —</div><Link to="/" className="dark-button">Explore more stories <span>→</span></Link></article></main>;
}
export default function App(){return <div className="app"><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/post/:id" element={<PostDetail/>}/><Route path="*" element={<PostDetail/>}/></Routes><footer className="footer"><Link to="/" className="brand"><span className="brand-mark">i.</span><span>ink<span className="brand-light">&ideas</span></span></Link><span>© 2026 INK & IDEAS. MADE FOR THE CURIOUS.</span><a href="#top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>BACK TO TOP ↑</a></footer></div>}