'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RepoStats {
  stars: number;
  forks: number;
  openIssues: number;
  lastUpdate: string;
}

export default function GitHubStats({ repo = 'vercel/next.js' }: { repo?: string }) {
  const [stats, setStats] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, this would fetch from Parther's private GoMyTruck repo using a secure API route.
    // We fetch public Next.js stats here just as a UI placeholder for the "Live GitHub Statistics" requirement.
    fetch(`https://api.github.com/repos/${repo}`)
      .then(res => res.json())
      .then(data => {
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          openIssues: data.open_issues_count,
          lastUpdate: new Date(data.updated_at).toLocaleDateString(),
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [repo]);

  if (loading) {
    return (
      <div className="my-8 p-6 bg-gray-900 rounded-xl flex items-center justify-center animate-pulse h-32">
        <div className="text-gray-500 font-mono text-sm flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Fetching Live Architecture Telemetry...
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="my-8 p-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl">
      <div className="bg-[#0A0A0A] rounded-xl p-6 border border-gray-800">
        <div className="flex items-center gap-3 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <div>
            <h4 className="text-white font-syncopate font-bold text-sm">Live Engineering Telemetry</h4>
            <p className="text-gray-400 text-xs">Real-time metrics from {repo}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-gray-400 text-xs font-mono uppercase mb-1">Stars</div>
            <div className="text-white font-bold text-xl">{stats.stars.toLocaleString()}</div>
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-gray-400 text-xs font-mono uppercase mb-1">Forks</div>
            <div className="text-white font-bold text-xl">{stats.forks.toLocaleString()}</div>
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-gray-400 text-xs font-mono uppercase mb-1">Active Issues</div>
            <div className="text-white font-bold text-xl">{stats.openIssues.toLocaleString()}</div>
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-gray-400 text-xs font-mono uppercase mb-1">Last Deploy</div>
            <div className="text-white font-bold text-sm mt-1">{stats.lastUpdate}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
