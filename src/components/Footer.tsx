export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">⚡</span>
            </div>
            <span className="text-sm font-semibold">
              Apply<span className="gradient-text">Faster</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-gray-300 transition">
              Privacy
            </a>
            <a href="/terms" className="hover:text-gray-300 transition">
              Terms
            </a>
            <a href="/blog" className="hover:text-gray-300 transition">
              Blog
            </a>
            <a href="mailto:support@applyfaster.ai" className="hover:text-gray-300 transition">
              Contact
            </a>
          </div>

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ApplyFaster. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-[var(--border)]">
          <a href="https://dang.ai/" target="_blank" rel="noopener">
            <img
              src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png"
              alt="Featured on Dang.ai"
              width="150"
              height="54"
              style={{ width: 120, height: 'auto' }}
            />
          </a>
          <a href="https://startupfa.me" target="_blank" rel="noopener">
            <img
              src="https://startupfa.me/badge.png"
              alt="Featured on Startup Fame"
              width="150"
              height="54"
              style={{ width: 120, height: 'auto' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
