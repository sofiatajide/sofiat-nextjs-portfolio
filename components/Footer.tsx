export default function Footer() {
  return (
    <footer className="section py-10 border-t border-gray-100 text-sm text-gray-600">
      <div className="flex items-center justify-between">
        <p>© {new Date().getFullYear()} Sofiat Ajide</p>
        <div className="flex gap-4">
          <a href="https://github.com/sofiatajide" target="_blank" rel="noreferrer" className="underline">GitHub</a>
          <a href="https://www.linkedin.com/in/sofiat-ajide/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          <a href="/rss.xml" className="underline">RSS</a>
        </div>
      </div>
    </footer>
  );
}
