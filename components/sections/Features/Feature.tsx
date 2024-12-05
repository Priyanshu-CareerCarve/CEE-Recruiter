"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  isCore?: boolean;
}

export function Feature({ 
  icon: Icon, 
  title,
  isCore
}: FeatureProps) {
  return (
    <div className={cn(
      "flex flex-col items-center text-center group",
      "w-full transition-all duration-300"
    )}>
      <div className={cn(
        "relative w-[80px] h-[80px] mb-3",
        "bg-[#f8fafc] rounded-full",
        "flex items-center justify-center",
        "border border-gray-100/50",
        "shadow-sm transition-all duration-300",
        "group-hover:shadow-md group-hover:border-primary/20",
        "group-hover:bg-white"
      )}>
        <Icon className="w-8 h-8 text-[#1c8ea8] transition-transform duration-300 group-hover:scale-110" />
      </div>
      <p className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
        {title}
      </p>
    </div>
  );
}