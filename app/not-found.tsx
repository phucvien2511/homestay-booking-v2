'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          <FileQuestion className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold mb-2"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground mb-8"
        >
          The page you are looking for does not exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button>
            <Link href="/">Back to Home</Link>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
