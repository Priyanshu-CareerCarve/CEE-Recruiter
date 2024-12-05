"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  isCore?: boolean;
}

export function FeatureCard({ icon: Icon, title, description, isCore }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "bg-white p-6 rounded-lg transition-shadow hover:shadow-lg",
        isCore && "border-2 border-primary/20"
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4",
          isCore ? "bg-primary/20" : "bg-primary/10"
        )}>
          <Icon className={cn(
            "w-6 h-6",
            isCore ? "text-primary" : "text-primary/80"
          )} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}