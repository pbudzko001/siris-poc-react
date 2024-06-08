// src/components/atoms/Link.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  label: string;
}

const Link: React.FC<LinkProps> = ({ to, label }) => (
  <RouterLink to={to} className="text-teal-500 hover:underline">
    {label}
  </RouterLink>
);

export default Link;
